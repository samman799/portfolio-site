const { useState, useEffect, useRef, useCallback } = React;

// ── Data ─────────────────────────────────────────────────────────────────────

const PERSON = {
  name:     'Sam ten Voorde',
  role:     'Graphic & Motion Designer',
  city:     'Utrecht, NL',
  bio:      'I work across graphic design, motion, and illustration — mostly for cultural clients, small studios, and people making independent things. Currently based in Utrecht, available for commissions and collaborations from 2026 onward.',
  email:    'samtenvoorde@pm.me',
  linkedin: 'https://www.linkedin.com/in/sam-ten-voorde/',
};

const NAV_ITEMS = [
  { label: 'Work',    href: 'index.html#work' },
  { label: 'About',   href: 'about.html' },
  { label: 'Contact', href: 'contact.html' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const initials = (name) => name.split(' ').map(w => w[0]).join('');

const SLICE_COUNT = 9;

// ── useInView hook ────────────────────────────────────────────────────────────

function useInView(ref, scrollRoot, offset = 120) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setInView(true); }),
      { root: scrollRoot?.current || null, rootMargin: `0px 0px -${offset}px 0px`, threshold: 0.10 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return inView;
}

// ── Menu ──────────────────────────────────────────────────────────────────────

function Menu({ open, closing, onClose }) {
  const [seed, setSeed] = useState(0);
  const delaysRef = useRef(Array.from({ length: SLICE_COUNT }, () => Math.random()));

  useEffect(() => {
    delaysRef.current = Array.from({ length: SLICE_COUNT }, () => Math.random());
    setSeed(s => s + 1);
  }, [open, closing]);

  if (!open) return null;
  const delays = delaysRef.current;

  return (
    <>
      {/* Orange slices */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 49, display: 'flex', pointerEvents: 'none' }}>
        {delays.map((r, si) => {
          const d = closing ? r * 240 + 120 : r * 300;
          return (
            <div key={`o${si}-${seed}`} style={{
              flex: 1, height: '100%', background: '#ec5d00',
              animation: closing
                ? `boldSliceDown 520ms cubic-bezier(0.76, 0, 0.24, 1) ${d}ms both`
                : `boldSliceUp 520ms cubic-bezier(0.76, 0, 0.24, 1) ${d}ms both`,
            }} />
          );
        })}
      </div>

      {/* Dark slices */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', pointerEvents: 'none' }}>
        {delays.map((r, si) => {
          const d = closing ? r * 180 : r * 320 + 160;
          return (
            <div key={`d${si}-${seed}`} style={{
              flex: 1, height: '100%', background: '#2a2a2a',
              animation: closing
                ? `boldSliceDown 520ms cubic-bezier(0.76, 0, 0.24, 1) ${d}ms both`
                : `boldSliceUp 560ms cubic-bezier(0.76, 0, 0.24, 1) ${d}ms both`,
            }} />
          );
        })}
      </div>

      {/* Content */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 51,
        color: '#f0f0f0',
        padding: 'clamp(20px, 3vw, 40px)',
        display: 'flex', flexDirection: 'column',
        animation: closing
          ? 'boldMenuContentOut 250ms ease-in forwards'
          : 'boldMenuContentIn 500ms ease-out 500ms both',
      }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 13, fontWeight: 700, letterSpacing: -0.2,
            color: '#f0f0f0',
          }}>
            {initials(PERSON.name)}<span style={{ color: '#ec5d00' }}>.</span>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none',
            fontSize: 28, color: '#f0f0f0', lineHeight: 1,
            transform: closing ? 'rotate(90deg) scale(0.6)' : 'rotate(0) scale(1)',
            transition: 'transform 300ms cubic-bezier(0.76, 0, 0.24, 1)',
          }} aria-label="Close menu">×</button>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          {NAV_ITEMS.map(({ label, href }, idx) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 'clamp(52px, 9vw, 96px)',
                fontWeight: 800,
                letterSpacing: 'clamp(-2px, -0.04em, -4px)',
                color: '#f0f0f0',
                lineHeight: 1.05,
                textDecoration: 'none',
                display: 'flex', alignItems: 'baseline', gap: 20,
                overflow: 'hidden',
                animation: closing
                  ? `boldMenuLineOut 250ms cubic-bezier(0.76, 0, 0.24, 1) ${idx * 40}ms both`
                  : `boldMenuLineIn 550ms cubic-bezier(0.22, 1, 0.36, 1) ${560 + idx * 80}ms both`,
                transition: 'color 200ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ec5d00'}
              onMouseLeave={e => e.currentTarget.style.color = '#f0f0f0'}
            >
              {label}
              <span style={{ flex: 1 }} />
              <span style={{ fontFamily: 'Literata, serif', fontSize: '0.3em', fontStyle: 'italic', color: '#8c8c8c', fontWeight: 400 }}>→</span>
            </a>
          ))}
        </nav>

        {/* Footer row */}
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
          color: '#8c8c8c', letterSpacing: 1,
          display: 'flex', justifyContent: 'space-between',
          animation: closing ? 'boldMenuContentOut 250ms ease-in forwards' : 'boldMenuContentIn 500ms ease-out 700ms both',
        }}>
          <span>{PERSON.city}</span>
          <a href={`mailto:${PERSON.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{PERSON.email}</a>
        </div>
      </div>
    </>
  );
}
