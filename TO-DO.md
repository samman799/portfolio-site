# To do
---
## Projecten toevoegen
- "student dashboard" animatie
- **Dies 2025**
  - [ ] Create custom Dies cover slide with title (similar to Self Evaluation Report style)
  - [ ] Create three-column text slide for Dies project
  - [ ] Add individual photo slides for Dies project
  - [ ] Integrate Dies project into index.js (PROJECTS data)
- video assets vu
- video assets vu-ut
- Campus Online: voeg handout flyer toe

## Overig

# Backlog
---
## Page-flip CDN
- page-flip library wordt geblokt door adblocker op localhost (werkt wel op GitHub Pages)
- Oplossing: library lokaal hosten in plaats van van unpkg CDN

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

## CMS
- Content management systeem om makkelijker updates te doen.

## Notities
---
**Cookie notice:** Momenteel niet nodig (geen tracking, analytics of cookies). Wel toevoegen zodra we Google Analytics of ander tracking gaan gebruiken.
