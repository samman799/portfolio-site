# Portfolio Site — Documentation & Workflow

This is a static portfolio website deployed via GitHub Pages. All changes pushed to the `main` branch are automatically published to [https://samman799.github.io/portfolio-site](https://samman799.github.io/portfolio-site).

---

## ⚠️ Critical: Assets Must Be Tracked in Git

Project images, videos, and other assets **must be committed to git** to appear on the live site. Assets that are only on your local machine will not be deployed.

### Before Deploying

Run the deployment check script to verify all project assets are tracked:

```bash
./scripts/deploy-site.sh
```

This script will:
1. ✅ Check all project folders for untracked assets (images, videos, SVGs)
2. ⚠️ Report any missing files
3. 📤 Push to main if everything is tracked

### Common Issues

**Images not showing on GitHub Pages?**
- Likely cause: Assets are not in git
- Solution: `git add content/projects/` → `git commit` → `git push`

**To add individual assets:**
```bash
git add "content/projects/5 Self Evaluation/"
git add "content/projects/6 Dies 2025/"
git commit -m "Add project assets"
git push origin main
```

---

## Project Structure

```
content/projects/
├── 1 Studie Inspirator/   (animations & app screens)
├── 2 Online Campus/       (renders)
├── 3 VUfonds Magazine/    (flipbook pages)
├── 4 [Project Name]/
├── 5 Self Evaluation/     (cover + flipbook pages)
└── 6 Dies 2025/           (cover image + event photos)
```

Each project should contain:
- `[ProjectName]-info.md` — project metadata
- `[ProjectName]-cover.*` — cover image
- Subdirectories with pages, assets, or supporting files

Info bestanden per project gebruiken als bron voor tekst slides in `src/index.js`.

---

## Development

The site is built with React (see `src/index.js`). Project data is hardcoded in the `PROJECTS` array.

### To add a new project:
1. Create folder in `content/projects/[N] Project Name/`
2. Create `[ProjectName]-info.md` met challenge / idea / result tekst
3. Add project entry to `PROJECTS` array in `src/index.js`
4. Add all assets and commit to git
5. Run `./scripts/deploy-site.sh` before pushing

---

## Deployment Workflow

### `scripts/deploy-site.sh` — Pre-deployment Verification
- Scans alle project folders op untracked assets (jpg, png, svg, webp, mp4)
- Blokkeert push als assets missen met duidelijke foutmelding
- Geeft instructies om assets toe te voegen

### `.claude/settings.local.json` — Pre-push Hook
- `PreToolUse` hook op `Bash(git push)`
- Voert `deploy-site.sh` uit vóór elke push
- Voorkomt incomplete deployments naar GitHub Pages
- Permissions geconfigureerd voor git add en git push

---

## Branch Naming Convention

- `[projectafkorting]-v[versienummer]` — e.g. `CO-v1`, `SIV1`
- Altijd nieuwe branch per project/feature, dan PR naar `main`

---

## Project History

### Sessie 1 — Studie Inspirator (Project 1)
- Mappenstructuur opgezet (HTML, CSS, JS)
- Animaties toegevoegd (index, contact, about)
- Content: videos, appscreens, mascot slides
- Branch `SIV1` → merged via PR #3

### Sessie 2 — Online Campus (Project 2)
- Content uit `OC-info.md`: Covid challenge, connection idea, award result
- Renders en screenshots geupload
- Branch `CO-v1` → merged via PR #4
- Oude branches opgeruimd

### Sessie 3 — Self Evaluation Report (Project 5)
- Custom cover slide met VU branding (titel, jaar, instituten, logo)
- Flipbook: 12 pagina's uit rapport (landscape 1754×1240)
- Achtergrond #ede8e0
- URL-hash functionaliteit: smooth scroll naar `#project-XX`
- VUfonds Magazine flipbook 25% schaal vergroot

### Sessie 4 — Deployment Setup & Dies Natalis (Project 6)
- **Assets fix**: Project 5 & 6 afbeeldingen toegevoegd aan git
- **Deployment script**: `deploy-site.sh` created
- **Pre-push hook**: Configured in `.claude/settings.local.json`
- Alle assets MOETEN in git staan voor live deployment
