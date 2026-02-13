import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

/** Writes version.json into dist on build so clients can detect new deploys and auto-reload. */
function versionFilePlugin() {
  return {
    name: 'version-file',
    closeBundle() {
      const outDir = join(process.cwd(), 'dist')
      const version = Date.now().toString()
      writeFileSync(
        join(outDir, 'version.json'),
        JSON.stringify({ version }, null, 0),
        'utf-8'
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), versionFilePlugin()],
})
