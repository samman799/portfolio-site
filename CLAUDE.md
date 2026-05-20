# Portfolio Site Deployment Guide

This is a static portfolio website deployed via GitHub Pages. All changes pushed to the `main` branch are automatically published to [https://samman799.github.io/portfolio-site](https://samman799.github.io/portfolio-site).

## Important: Assets Must Be Tracked in Git

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

## Development

The site is built with React (see `src/index.js`). Project data is hardcoded in the `PROJECTS` array.

To add a new project:
1. Create folder in `content/projects/[N] Project Name/`
2. Add assets
3. Add project entry to `PROJECTS` array in `src/index.js`
4. Commit and push
