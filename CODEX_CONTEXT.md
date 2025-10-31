# Codex / Chat instructions

**Goal:** Maintain and extend a personal portfolio website for Sourabh Patil. Keep it fast (no heavy frameworks unless needed), scannable, and recruiter‑friendly.

**Current Stack:** Single HTML file with Tailwind CDN. No build step. Content lives in `content.json` for future automation.

**Principles:**
- Keep first‑screen messaging tight: name, role, outcomes, and CTAs.
- Sections: About, Achievements, Experience, Skills, Case Studies, Contact.
- Accessible contrast, keyboard navigable anchors, mobile‑first layout.
- Minimal JS; prefer declarative HTML + Tailwind.

**Immediate tasks:**
1. Wire `content.json` to render the Experience/Achievements/Case Studies/Skills via JS so content edits don’t touch HTML.
2. Add a light theme button (persist choice in `localStorage`).
3. Create `case-studies/license-management.html` with problem → approach → outcome layout and breadcrumb back to home.
4. Add `assets/Sourabh_Patil_Resume.pdf` link to the Download button.
5. Add favicon and basic `robots.txt` + `sitemap.xml`.

**Style cues to emulate:** https://menon379.github.io/
- Clean, high‑contrast, scroll‑friendly sections.
- Bullets over paragraphs; short sentences; verbs first.

**Content sources:**
- This repo’s `content.json` (primary).
- User’s LinkedIn: https://www.linkedin.com/in/sourabh-patil-87582719a/ (for context, do not scrape automatically).

**Non‑goals (for now):**
- Heavy animation libraries, SPA routing, or complex build systems.

**Deliverables:**
- Updated HTML/JS/CSS with clear comments.
- New pages under `/case-studies/`.
- `README.md` updated with any new steps.
