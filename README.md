# SAP Solutions – Website

A **Vite + React** single-page website for **SAP Solutions**, with landing page, privacy policy, React Router, and the same professional design and animations as before.

## Stack

- **Vite** – Fast dev server and build
- **React 18**
- **React Router 6** – Routes: `/` (home), `/privacy`

## Scripts

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # output in dist/
npm run preview # preview production build
```

## Structure

- `public/` – Static assets (served at root by Vite)
  - `favicon.svg` – Site icon (brand colors)
  - `robots.txt` – Crawler rules
  - `site.webmanifest` – PWA manifest (name, theme, icons)
- `src/App.jsx` – Router, layout (Header, Footer), scroll-to-hash
- `src/pages/` – `HomePage`, `PrivacyPage`
- `src/components/` – `Header`, `Footer`, `Hero`, `Solutions`, `Features`, `Benefits`, `Contact`
- `src/index.css` – Global styles (variables, sections, animations)

## Features

- Landing: Hero, Solutions, Features, Benefits, Contact form
- Privacy policy at `/privacy`
- Responsive layout and mobile nav
- Scroll-triggered animations and hero stat counters
- Hash links (`/#solutions`, `/#contact`) with smooth scroll
