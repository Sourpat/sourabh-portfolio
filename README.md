# Sourabh Patil – Portfolio (No‑build HTML + Tailwind)

A fast, shareable portfolio site you can edit directly and deploy on GitHub Pages or Netlify. No Node/Vite required.

## Files
- `index.html` — single‑file site using Tailwind CDN.
- `content.json` — structured data to keep bullets and text in one place (for future automation).
- `assets/` — put your `Sourabh_Patil_Resume.pdf`, `favicon.png`, images here.

## Local preview
Just open `index.html` in a browser.

## Deploy
### GitHub Pages (quick)
1. Create a repo (e.g., `sourabh-portfolio`), upload all files.
2. In Settings → Pages, set Source = `main` branch, root `/`.
3. Visit the URL it provides (e.g., `https://<user>.github.io/sourabh-portfolio/`).

### Netlify
Drag‑and‑drop the folder on https://app.netlify.com/drop

## Customize quickly
- Update `content.json` (bullets, case studies, skills) then optionally wire a small script to load it into the DOM if you prefer pure data‑driven content.
- Replace `assets/Sourabh_Patil_Resume.pdf` and `assets/favicon.png`.
- Change colors by editing Tailwind classes in `index.html`.

## Roadmap / TODO for Codex
- [ ] Add a light theme toggle.
- [ ] Generate `case-studies/*.html` detail pages from templates.
- [ ] Load `content.json` dynamically to separate content from layout.
- [ ] Add simple contact form (Netlify forms) with spam honeypot.
- [ ] Create `deploy.yml` GitHub Action to auto‑publish on push.
- [ ] Add `sitemap.xml` & `robots.txt` for SEO.

