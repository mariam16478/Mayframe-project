# Mayframe-project

Small static site built with HTML/CSS (Lato font) and Tailwind utilities.

## Quick start

Option A — Open in browser (fast)

- Open any page under `pages/` (for example `pages/consultancy.html`) in your browser.
- Or use VS Code Live Server: right-click the HTML and choose "Open with Live Server".

Option B — Serve locally with a simple HTTP server (Windows PowerShell)

```powershell
# from project root
python -m http.server 8080
# then open http://localhost:8080/pages/consultancy.html
```

## Tailwind (optional)

This project includes Tailwind usage via CDN in some pages. If you want a local Tailwind build:

1. Install Node (if not installed).
2. In project root:

```powershell
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

3. Example `tailwind.config.js` (add your fonts/colors under theme.extend).
4. Build CSS:

```powershell
npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css --watch
```

- Replace paths to match your project structure. Then link `dist/tailwind.css` in your HTML.

## Notes about this repo

- Fonts: Lato included via Google Fonts in pages.
- Custom CSS: `style.css` and `css/contact-us.css` contain component-specific rules.
- Images: stored under `images/` and referenced in pages via relative paths.

## File structure (example)

- pages/ — HTML pages (consultancy.html, ...)
- css/ — extra CSS (contact-us.css)
- style.css — main site CSS
- images/ — image assets
- index.js — site scripts (if present)

## Contributing

- Open an issue or submit a PR. Keep changes to styles/components modular.
- If adding Tailwind utilities, prefer semantic classes in `tailwind.config.js`.

## License

Specify your license here (e.g. MIT) or remove this section.
