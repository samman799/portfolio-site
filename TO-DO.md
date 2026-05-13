# To do
---
## Projecten toevoegen
- "Hoe maak je een goede video pitch?" animatie
- "student dashboard" animatie
- Dies Natalis
- video assets vu
- video assets vu-ut
- VUfonds Magazine #4

## Overig
- Cookie notice toevoegen is wettelijk verplicht

# Nice to have
---
## Dark mode
De site is nu volledig licht. Een dark mode toevoegen als optie.
- In `ProjectSection` staat `const inverted = true;` — dit terugzetten naar `idx % 2 === 1` of sturen via een globale theme state.
- Hero, contact en nav hebben hardcoded lichte kleuren die ook mee moeten wisselen.
- Voorkeur van de gebruiker opslaan via `localStorage`.
- Toggle knop in de nav toevoegen.

## Custom cursor
- Animatie cursor: bol die "squisht" bij muisbewegingen (zoals vechtclub.nl)
- Canvas-based, mouse tracking met deformation/physics

# Backlog
---
## Page-flip CDN
- page-flip library wordt geblokt door adblocker op localhost (werkt wel op GitHub Pages)
- Oplossing: library lokaal hosten in plaats van van unpkg CDN

## CMS
-