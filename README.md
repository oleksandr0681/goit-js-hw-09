# goit-js-hw-09

Homework assignment #9 from the [GoIT](https://goit.global/) JavaScript course. A small multi-page Vite app with two tasks: an image gallery with a lightbox (using the [SimpleLightbox](https://simplelightbox.com/) library) and a feedback form whose state persists in `localStorage`.

## 📋 About

The site has an index page with navigation to two task pages:

- **Gallery (`1-gallery.html`)** — renders thumbnails from an array of image objects (`preview`, `original`, `description`) using `map()` and `insertAdjacentHTML`. Clicking a thumbnail opens the full-size image in a SimpleLightbox modal, with the image description shown as a caption (taken from the `alt` attribute, with a 250 ms delay, positioned at the bottom).
- **Feedback form (`2-form.html`)** — a form with email and message fields:
  - Every `input` event saves the current (trimmed) values to `localStorage` under the `feedback-form-state` key.
  - On page load, saved values are restored into the form.
  - On submit, the default action is prevented; if any field is empty, an alert is shown. Otherwise the data object is logged to the console, the saved state is removed from `localStorage`, and the form is reset.

## 🛠️ Tech Stack

- Vanilla JavaScript (ES modules, DOM API, event listeners, Web Storage API)
- HTML5 and CSS3 (modular stylesheets in `src/css`)
- [Vite](https://vitejs.dev/) — dev server and bundler
- [SimpleLightbox](https://github.com/andreknieriem/simplelightbox) — gallery modal
- `vite-plugin-html-inject` and `vite-plugin-full-reload` — HTML partials and live reload
- PostCSS (`postcss-sort-media-queries`, mobile-first sorting)
- GitHub Actions — automatic deploy to GitHub Pages

## 📁 Project Structure

```
goit-js-hw-09-main/
├── .github/workflows/
│   └── deploy.yml          # Build and deploy to GitHub Pages
├── src/
│   ├── index.html            # Index page with navigation
│   ├── 1-gallery.html         # Gallery page
│   ├── 2-form.html             # Feedback form page
│   ├── js/
│   │   ├── 1-gallery.js         # Gallery rendering and lightbox
│   │   └── 2-form.js             # Form state persistence
│   ├── css/                      # Page and component styles
│   ├── img/                       # Images and SVG sprite
│   └── public/                     # Static files (favicon)
├── vite.config.js                # Vite configuration
└── package.json
```

## 🚀 Getting Started

Requires an LTS version of [Node.js](https://nodejs.org/).

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The gallery images are loaded from external URLs, so an internet connection is required.

## 📤 Deployment

The production build is deployed automatically to GitHub Pages (the `gh-pages` branch) on every push to `main`, via the workflow in `.github/workflows/deploy.yml`. The `build` script in `package.json` uses `--base=/goit-js-hw-09/`, which must match the repository name.
