/**
 * Fetches the deployed app version and reloads the page when a new version is
 * available so users always see the latest build without manually clearing cache.
 */

const CHECK_INTERVAL_MS = 4 * 60 * 1000 // 4 minutes
const VERSION_URL = '/version.json'

let currentVersion = null

async function fetchVersion() {
  const url = `${VERSION_URL}?t=${Date.now()}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return null
  const data = await res.json()
  return data?.version ?? null
}

async function check() {
  try {
    const version = await fetchVersion()
    if (version == null) return

    if (currentVersion === null) {
      currentVersion = version
      return
    }

    if (currentVersion !== version) {
      currentVersion = version
      window.location.reload()
    }
  } catch {
    // ignore network errors
  }
}

export function initVersionCheck() {
  check()

  setInterval(check, CHECK_INTERVAL_MS)

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') check()
  })
}
