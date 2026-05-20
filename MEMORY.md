# Portfolio Site — Sessie Log

---

## Sessie 1 — project 1 (Studie Inspirator)

- Mappenstructuur opgezet: HTML, CSS, JS gesplitst
- Eerste versie van de site gebouwd
- Animaties toegevoegd (index, contact, about)
- Content voor Studie Inspirator toegevoegd (videos, appscreens, mascot slides)
- Branch: `SIV1` → gemerged naar `main` via PR #3

---

## Sessie 2 — project 2 (Online Campus)

- Tekst slide van project 2 bijgewerkt op basis van `OC-info.md`
  - Challenge: Covid, verbinding, community
  - Idea: 'andere kant van de maan' concept (Total Design)
  - Result: browser/app platform, Silver bij International Design Awards
- Content bestanden geupload naar `main`:
  - `content/projects/1 Studie Inspirator/SI-animatie-cover.mp4`
  - `content/projects/2 Online Campus/OC-coverimage.webp`
  - `content/projects/2 Online Campus/OC-render-a/b/c.webp`
  - `content/projects/2 Online Campus/OC-screenshot-a/b/c.webp`
- Branch: `CO-v1` → gemerged naar `main` via PR #4
- Alle oude branches opgeruimd (CO-v1, SIV1, fixanimation, restructuur)

---

## Project structuur

```
src/index.js          — alle React code + PROJECTS data
content/projects/     — media per project
  1 Studie Inspirator/
  2 Online Campus/
```

## Info bestanden per project

Elk project heeft een `*-info.md` met challenge / idea / result tekst.
Gebruik deze als bron voor de tekst slide in `src/index.js`.

- `content/projects/2 Online Campus/OC-info.md` — Online Campus content

---

## Sessie 3 — project 5 (Self Evaluation Report)

- Project 5 volledig ingebouwd: "Self Evaluation — Natural & Life Sciences towards a Sustainable Society" (2025)
- Custom cover slide gemaakt met:
  - Achtergrond image (SER-cover.jpg)
  - Witte tekstkader, links uitgelijnd
  - Logo (VU beta logo.svg) onderaan
  - Titel (zwart), jaar (blauw #0089cf), ondertitel, en 3 instituten namen
  - Decoratief blauw diamant element half onder kader (via gekanteld vierkantje)
- Flipbook opgezet met 12 pagina's (highlights uit rapport):
  - Pages 1, 4-5 (cover + title spread)
  - Pages 50-51, 72-73 (text spreads)
  - Pages 84-87 (case study spreads)
  - Page 104 (back cover)
  - Landscape aspect ratio aangepast (1754 × 1240)
  - Achtergrond: #ede8e0 (match VUfonds)
  - Grootte: 55% van viewport hoogte
- VUfonds Magazine flipbook 25% groter gemaakt (scale property toegevoegd)
- URL-hash functionaliteit ingebouwd:
  - IDs toegevoegd aan alle 5 projecten: `project-01` tot `project-05`
  - Smooth scroll naar project via `#project-XX`
  - Hash-change listener in App component
  - Geen page jump bij reload/hardrefresh

---

## Sessie 4 — Deployment workflow + Project 6 (Dies Natalis)

### Missing assets fix
- Probleem: Self Evaluation (project 5) en Dies 2025 (project 6) afbeeldingen stonden NIET in git → niet op GitHub Pages
- Oplossing: Alle afbeeldingen toegevoegd aan git en gepusht:
  - `content/projects/5 Self Evaluation/` (cover + 12 flipbook pages)
  - `content/projects/6 Dies 2025/` (cover image + 5 event photos)

### Deployment workflow setup
- **`scripts/deploy-site.sh`** — pre-deployment verification script
  - Scant alle project folders op untracked assets (jpg, png, svg, webp, mp4)
  - Blokkeert push als assets missen met duidelijke foutmelding
  - Geeft instructies om assets toe te voegen
  
- **`.claude/settings.local.json`** — pre-push hook configuratie
  - `PreToolUse` hook op Bash(git push)
  - Voert `deploy-site.sh` uit vóór elke push
  - Voorkomt incomplete deployments naar GitHub Pages
  - Permissions toegevoegd voor: `git add content/projects/`, `git push`, deploy script

- **`CLAUDE.md`** — deployment documentatie
  - Asset tracking requirements
  - Pre-deployment checklist
  - Troubleshooting voor missing images

### Belangrijk
Alle project assets MOETEN in git staan. Lokale bestanden zonder git = niet op live site.

## Branch naamgeving

- `[projectafkorting]-v[versienummer]` — bv. `CO-v1`, `SIV1`
- Altijd nieuwe branch per project/feature, dan PR naar `main`
