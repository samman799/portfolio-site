# Plan: page-flip CDN integreren in FlipbookSlide

## Context

De portfolio site gebruikt React via unpkg CDN + Babel standalone (geen build-tool).
Alle React-code staat in `src/index.js` als één groot bestand.

Het VUfonds Magazine project (project 04 in de PROJECTS array) heeft een slide van
`type: 'flipbook'`. Die wordt nu gerenderd door een zelfgebouwde `FlipbookSlide`
component met CSS3 rotateY-animaties. Dat werkt, maar de echte `page-flip` library
geeft een mooier page-curl effect met schaduw en veer.

## Doel

Vervang de huidige `FlipbookSlide` component door een versie die de `page-flip`
library gebruikt via de unpkg CDN.

---

## Stap 1 — CDN script toevoegen aan index.html

Voeg dit script toe in `index.html`, **na** de Babel-tag en **voor** de sluit-tag van `<head>`:

```html
<script src="https://unpkg.com/page-flip/dist/js/page-flip.browser.js" crossorigin="anonymous"></script>
```

Als dit niet laadt (zie stap 3), probeer dan:
- `https://unpkg.com/page-flip@2.1.0/dist/js/page-flip.browser.js`
- `https://cdn.jsdelivr.net/npm/page-flip/dist/js/page-flip.browser.js`

De library exposeert zichzelf als `window.PageFlip` (hoofdletter P en F).

---

## Stap 2 — FlipbookSlide herschrijven

Vervang de huidige `FlipbookSlide` functie in `src/index.js` door onderstaande
implementatie. De component zit vlak **voor** de `// ── SlideViewport` comment.

```jsx
function FlipbookSlide({ s }) {
  const wrapRef = useRef(null);
  const elRef   = useRef(null);
  const pfRef   = useRef(null);
  const [page,  setPage]  = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!window.PageFlip) {
      console.warn('page-flip library niet geladen');
      return;
    }

    const timer = setTimeout(() => {
      const wrap = wrapRef.current;
      const el   = elRef.current;
      if (!wrap || !el) return;

      // Bereken paginaformaat op basis van beschikbare hoogte (A4 portret ratio)
      const h = Math.floor(wrap.offsetHeight * 0.84);
      const w = Math.floor(h * 0.707);

      const pf = new window.PageFlip(el, {
        width:              w,
        height:             h,
        showCover:          true,
        flippingTime:       800,
        usePortrait:        false,
        autoSize:           false,
        maxShadowOpacity:   0.5,
        showPageCorners:    true,
        disableFlipByClick: false,
        swipeDistance:      30,
        startZIndex:        1,
        mobileScrollSupport: false,
      });

      pfRef.current = pf;
      pf.loadFromImages(s.pages);
      pf.on('flip', e => setPage(e.data));
      pf.on('init', () => setTotal(pf.getPageCount()));
    }, 200);

    return () => {
      clearTimeout(timer);
      try { pfRef.current?.destroy(); } catch (_) {}
      pfRef.current = null;
    };
  }, []);

  return (
    <div ref={wrapRef} style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: s.bg || '#ede8e0',
      overflow: 'hidden',
    }}>
      <div ref={elRef} />

      {total > 0 && (
        <div style={{
          position: 'absolute', bottom: 14,
          display: 'flex', alignItems: 'center', gap: 12,
          zIndex: 10,
        }}>
          <button
            onClick={() => pfRef.current?.flipPrev()}
            style={{
              width: 34, height: 34, borderRadius: '50%',
              background: '#373737', color: '#f0f0f0',
              border: 'none', cursor: 'pointer', fontSize: 15,
              transition: 'transform 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >←</button>

          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, color: '#8c8c8c', letterSpacing: 0.5, userSelect: 'none',
          }}>
            {String(page + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <button
            onClick={() => pfRef.current?.flipNext()}
            style={{
              width: 34, height: 34, borderRadius: '50%',
              background: '#ec5d00', color: '#f0f0f0',
              border: 'none', cursor: 'pointer', fontSize: 15,
              transition: 'transform 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >→</button>
        </div>
      )}
    </div>
  );
}
```

---

## Stap 3 — Debuggen als de library niet laadt

Open de browser console (F12 → Console). Mogelijke problemen:

**404 Not Found**
→ De URL klopt niet. Probeer de alternatieve URLs uit stap 1.

**`window.PageFlip is not a constructor`**
→ De library laadt, maar de global heet anders. Controleer met:
```js
console.log(Object.keys(window).filter(k => k.toLowerCase().includes('flip')))
```

**Script laadt maar niets verschijnt**
→ De container heeft waarschijnlijk hoogte 0 op het moment van initialisatie.
Vergroot de `setTimeout` delay van 200ms naar 400ms.

**CORS-fout**
→ Gebruik een lokale kopie: download `page-flip.browser.js` en zet het in `src/`.
Vervang de CDN-tag door `<script src="src/page-flip.browser.js"></script>`.

---

## Stap 4 — Controleren

Na de wijzigingen:
1. Hard refresh in de browser: **Cmd+Shift+R** (wist Babel-cache)
2. Navigeer naar project 04 (VUfonds Magazine)
3. De magazine-spread zou moeten laden met het echte page-curl effect
4. Klik op de pagina-hoeken of gebruik de pijltjes-knoppen

---

## Referentie: huidige bestandsstructuur

```
src/index.js          — alle React-code, inclusief FlipbookSlide component
src/shared.js         — gedeelde utilities (useInView, PERSON, etc.)
index.html            — script-tags voor React, Babel, en straks page-flip
content/projects/
  4 VUfonds Magazine/
    pages/
      page-01.png ... page-16.png   ← 16 pagina's op 1241×1754px
```

De `s.pages` array in het project-object bevat alle 16 paden al correct:
```js
pages: Array.from({ length: 16 }, (_, i) =>
  `content/projects/4%20VUfonds%20Magazine/pages/page-${String(i + 1).padStart(2, '0')}.png`
)
```
