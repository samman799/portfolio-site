// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    n: '01',
    title: 'Orbit Magazine',
    year: '2025',
    kind: 'Editorial · Print',
    blurb: 'An independent quarterly on urban ecology. Art direction, typography, and a custom display face used across three issues.',
    slides: [
      { label: 'Cover · Issue 03',    caption: 'Cover composition with custom display face' },
      { type: 'text',
        challenge: 'The editorial team wanted a recognisable quarterly that could survive rapidly shifting contributor styles and image quality, without collapsing into a generic magazine template.',
        idea:      'A single modular grid paired with a custom display face acts as the connective tissue. Color is kept restricted so imagery always leads, and typography can carry the lighter issues.',
        result:    'Three issues in print, 4 000 subscribers, and a visual system that contributors can extend themselves without supervision. Issue 04 is in production.' },
      { label: 'Spread · p.14–15',    caption: 'Typographic opener, 12-column grid' },
      { label: 'Spread · p.28–29',    caption: 'Image-led feature on tidal flats' },
      { label: 'Back matter',         caption: 'Colophon + subscription card' },
    ],
  },
  {
    n: '02',
    title: 'Kloot Studio — Identity',
    year: '2024',
    kind: 'Branding · Motion',
    blurb: 'A rolling identity system for an independent ceramics studio. Built around a single rotating mark that reacts to scroll and hover.',
    slides: [
      { label: 'Logo construction',   caption: 'Base mark, grid, and rotation logic' },
      { type: 'text',
        challenge: 'A small ceramics studio needed an identity that felt handmade and warm, but still held up in tiny digital contexts — favicons, Instagram tiles, shipping labels.',
        idea:      'A single mark built on a circle that rolls. It keeps legibility at small sizes, rewards motion in digital use, and prints beautifully as a static seal.',
        result:    'Identity shipped across packaging, signage, and web. Studio sales grew 40% in the first six months; the rolling mark is now a minor internet sport.' },
      { label: 'Motion still · 01',   caption: 'Rolling mark, frame 12 of 48' },
      { label: 'Applications',        caption: 'Packaging, signage, stationery' },
    ],
  },
  {
    n: '03',
    title: 'Halfmoon — Poster Series',
    year: '2024',
    kind: 'Illustration · Print',
    blurb: 'A series of 6 silkscreen posters for a nocturnal film festival. Two-color printing, heavy stock, limited run of 80 each.',
    slides: [
      { label: 'Poster 01 · Tarkovsky night', caption: 'Two-color silkscreen, 500×700mm' },
      { type: 'text',
        challenge: 'A festival with six very different auteurs needed a poster series that felt like one body of work without flattening what makes each filmmaker distinct.',
        idea:      'A strict two-color silkscreen rule, one shared compositional grid, six wildly different illustrative responses. The constraint does the unifying work; the illustration does the talking.',
        result:    'All 480 prints sold out in the first week of the festival. A second edition is now in production; the series was covered in two design annuals.' },
      { label: 'Poster 02 · Varda night',    caption: 'Two-color silkscreen, 500×700mm' },
      { label: 'Poster 03 · Akerman night',  caption: 'Two-color silkscreen, 500×700mm' },
      { label: 'In context',                 caption: 'Installed at the festival foyer' },
    ],
  },
  {
    n: '04',
    title: 'Field Notes OS',
    year: '2023',
    kind: 'Motion · UI',
    blurb: 'A loop system for a research tool. Micro-animations that communicate state without pulling focus — small, quiet, useful.',
    slides: [
      { label: 'Loop · Saving',  caption: '1.2s loop, ease-in-out' },
      { type: 'text',
        challenge: 'Researchers were losing trust in the app because state changes were invisible: they kept hitting save twice, re-syncing, and second-guessing whether anything was happening.',
        idea:      'A family of micro-loops, each tuned to the cost of the action behind it. Saving is brief and confident. Syncing is patient. Errors are a single pass — noticed, then gone.',
        result:    'Support tickets on "did this save?" dropped 70%. The loops are now the product\'s visual signature and have been rolled out across the entire research suite.' },
      { label: 'Loop · Syncing', caption: '0.9s loop, linear' },
      { label: 'Loop · Error',   caption: 'Single pass, 600ms' },
    ],
  },
];

// ── SlideViewport ─────────────────────────────────────────────────────────────

function SlideViewport({ project, inverted, transitionStyle, captionMode, inView }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = project.slides.length;

  const prev = () => { setDir(-1); setI(v => (v - 1 + n) % n); };
  const next = () => { setDir( 1); setI(v => (v + 1) % n); };
  const goTo = (idx) => { setDir(idx > i ? 1 : -1); setI(idx); };

  const fg     = inverted ? '#373737' : '#f0f0f0';
  const muted  = '#8c8c8c';
  const isFade = transitionStyle === 'fade';
  const slideBg = (s) => s.type === 'text'
    ? (inverted ? '#ebe7df' : '#2a2a2a')
    : (inverted ? '#dcdcdc' : '#2a2a2a');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Viewport */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/9',
        overflow: 'hidden',
        background: inverted ? '#dcdcdc' : '#2a2a2a',
        transform: inView ? 'translateX(0) scale(1)' : `translateX(${inverted ? -100 : 100}px) scale(0.96)`,
        opacity: inView ? 1 : 0,
        transition: 'transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, opacity 900ms ease 120ms',
      }}>
        {project.slides.map((s, sIdx) => {
          const active = sIdx === i;
          const tx = isFade ? undefined
            : active ? 'translateX(0)' : sIdx < i ? 'translateX(-100%)' : 'translateX(100%)';
          return (
            <div key={sIdx} style={{
              position: 'absolute', inset: 0,
              background: slideBg(s),
              transform: tx,
              opacity: isFade ? (active ? 1 : 0) : 1,
              transition: isFade ? 'opacity 500ms ease' : 'transform 900ms cubic-bezier(0.76, 0, 0.24, 1)',
              display: 'flex', alignItems: 'flex-end',
              padding: s.type === 'text' ? 0 : 20,
            }}>
              {s.type === 'text' ? (
                <div style={{
                  position: 'absolute', inset: 0,
                  padding: 'clamp(20px, 3vw, 44px)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 'clamp(18px, 2.4vw, 40px)',
                  color: fg,
                }}>
                  {[
                    { k: 'Challenge', t: s.challenge, n: '01' },
                    { k: 'Idea',      t: s.idea,      n: '02' },
                    { k: 'Result',    t: s.result,    n: '03' },
                  ].map((col, ci) => (
                    <div key={col.k} style={{
                      display: 'flex', flexDirection: 'column',
                      borderTop: `1px solid ${inverted ? '#cfc9be' : '#4a4a4a'}`,
                      paddingTop: 14,
                      transform: active ? 'translateY(0)' : 'translateY(16px)',
                      opacity: active ? 1 : 0,
                      transition: `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${200 + ci * 120}ms, opacity 500ms ease ${220 + ci * 120}ms`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
                        <span style={{
                          fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                          color: '#ec5d00', letterSpacing: 1,
                        }}>{col.n}</span>
                        <span style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 'clamp(18px, 2.2vw, 30px)',
                          fontWeight: 700, letterSpacing: -0.5, color: fg,
                        }}>{col.k}</span>
                      </div>
                      <p style={{
                        fontFamily: 'Literata, serif',
                        fontSize: 'clamp(11px, 1vw, 14px)',
                        lineHeight: 1.6, color: fg,
                      }}>{col.t}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {captionMode === 'overlay' && active && (
                    <div style={{
                      position: 'absolute', left: 24, right: 24, bottom: 56,
                      color: '#f0f0f0', fontFamily: '"Open Sans", sans-serif',
                      fontSize: 18, fontWeight: 500, maxWidth: 520,
                      textShadow: '0 1px 20px rgba(0,0,0,0.6)',
                      animation: 'boldCaptionIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both',
                    }}>{s.caption}</div>
                  )}
                </>
              )}
            </div>
          );
        })}

        {/* Slide nav inside viewport */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 16px',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {project.slides.map((_, sIdx) => (
              <button key={sIdx} onClick={() => goTo(sIdx)} style={{
                width: sIdx === i ? 28 : 10, height: 3,
                background: sIdx === i ? '#ec5d00' : muted,
                border: 'none', padding: 0,
                transition: 'all 400ms cubic-bezier(0.76, 0, 0.24, 1)',
              }} aria-label={`Slide ${sIdx + 1}`} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[['←', prev], ['→', next]].map(([label, handler], bi) => (
              <button key={bi} onClick={handler} style={{
                width: 38, height: 38, borderRadius: '50%',
                background: bi === 0
                  ? (inverted ? '#373737' : '#f0f0f0')
                  : '#ec5d00',
                color: bi === 0
                  ? (inverted ? '#f0f0f0' : '#373737')
                  : '#f0f0f0',
                border: 'none', fontSize: 16,
                transition: 'transform 200ms ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              aria-label={label}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Below-caption row */}
      {captionMode === 'below' && (
        <div style={{
          paddingTop: 16,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          opacity: inView ? 1 : 0,
          transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 260ms, opacity 700ms ease 260ms',
        }}>
          {project.slides[i].type === 'text' ? (
            <div style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
              color: muted, letterSpacing: 0.5, textTransform: 'uppercase',
            }}>
              {String(i + 1).padStart(2, '0')} — Case study · challenge / idea / result
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 28 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                {String(i + 1).padStart(2, '0')} — {project.slides[i].label}
              </div>
              <div style={{ fontFamily: 'Literata, serif', fontSize: 16, lineHeight: 1.5, color: inverted ? '#373737' : '#f0f0f0', maxWidth: 560 }}>
                {project.slides[i].caption}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── ProjectSection ────────────────────────────────────────────────────────────

function ProjectSection({ project, idx, captionMode, transitionStyle, scrollRef }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, scrollRef, 100);

  const inverted = idx % 2 === 1;
  const bg     = inverted ? '#f0f0f0' : '#373737';
  const fg     = inverted ? '#373737' : '#f0f0f0';
  const muted  = '#8c8c8c';
  const border = inverted ? '#d8d8d8' : '#4a4a4a';
  const fromLeft = idx % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id={`project-${project.n}`}
      style={{
        background: bg, color: fg,
        padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 72px) clamp(48px, 8vw, 96px)',
        display: 'flex', flexDirection: 'column', gap: 28,
        overflow: 'hidden',
      }}
    >
      {/* Title row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24,
        transform: inView ? 'translateX(0)' : `translateX(${fromLeft ? -80 : 80}px)`,
        opacity: inView ? 1 : 0,
        transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease',
      }}>
        <div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
            color: muted, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14,
          }}>
            <span style={{ color: '#ec5d00', display: 'inline-block', animation: 'boldPulse 2.4s ease-in-out infinite' }}>●</span>
            {' '}Project {project.n} / 04
          </div>
          <h2 style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 'clamp(44px, 7vw, 96px)',
            fontWeight: 800, lineHeight: 0.9,
            letterSpacing: 'clamp(-2px, -0.04em, -4px)',
            color: fg,
          }}>
            {project.title.split(' ').map((w, wi, arr) => (
              <React.Fragment key={wi}>
                {wi === arr.length - 1 && arr.length > 1 ? (
                  <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Literata, serif', color: '#ec5d00' }}>{w}</span>
                ) : w}
                {wi < arr.length - 1 && ' '}
              </React.Fragment>
            ))}
          </h2>
        </div>
        <div style={{ textAlign: 'right', paddingBottom: 8, flexShrink: 0 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: muted, letterSpacing: 1, textTransform: 'uppercase' }}>
            {project.kind}
          </div>
          <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: fg, letterSpacing: -1, lineHeight: 1 }}>
            {project.year}
          </div>
        </div>
      </div>

      {/* Slides */}
      <SlideViewport
        project={project}
        inverted={inverted}
        transitionStyle={transitionStyle}
        captionMode={captionMode}
        inView={inView}
      />

      {/* Blurb */}
      <div style={{
        paddingTop: 20,
        borderTop: `1px solid ${border}`,
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 28,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        opacity: inView ? 1 : 0,
        transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 380ms, opacity 700ms ease 380ms',
      }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: muted, letterSpacing: 1, textTransform: 'uppercase' }}>
          About
        </div>
        <p style={{ fontFamily: 'Literata, serif', fontSize: 18, lineHeight: 1.55, color: fg, maxWidth: 640 }}>
          {project.blurb}
        </p>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

function App() {
  const [mounted,     setMounted]     = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [scrollPct,   setScrollPct]   = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const pct = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight);
      setScrollPct(Math.min(1, Math.max(0, pct)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu  = () => { setMenuClosing(false); setMenuOpen(true); };
  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => { setMenuOpen(false); setMenuClosing(false); }, 900);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#373737', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Scroll progress */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 45, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${scrollPct * 100}%`, background: '#ec5d00', transition: 'width 80ms linear' }} />
      </div>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: 'clamp(16px, 2.5vw, 28px) clamp(20px, 4vw, 40px)',
        zIndex: 40, pointerEvents: 'none',
      }}>
        <a href="#" style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 13, fontWeight: 700, letterSpacing: -0.2,
          color: '#f0f0f0', textDecoration: 'none',
          background: 'rgba(42,42,42,0.72)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '8px 14px',
          borderRadius: 999,
          pointerEvents: 'auto',
        }}>
          {initials(PERSON.name)}<span style={{ color: '#ec5d00' }}>.</span>
        </a>
        <button onClick={openMenu} aria-label="Open menu" style={{
          display: 'flex', flexDirection: 'column', gap: 4.5,
          background: 'rgba(42,42,42,0.72)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: 999,
          padding: '10px 12px',
          pointerEvents: 'auto',
        }}>
          {[0,1,2].map(k => (
            <div key={k} style={{ width: 18, height: 1.5, background: '#f0f0f0' }} />
          ))}
        </button>
      </nav>

      {/* Scrollable content */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollBehavior: 'smooth' }}>

        {/* Hero */}
        <section id="work" style={{
          minHeight: '100dvh',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 5vw, 72px) clamp(48px, 8vw, 96px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          background: '#373737', color: '#f0f0f0',
        }}>
          {/* Available badge */}
          <div style={{
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            opacity: mounted ? 1 : 0,
            transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease',
          }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#8c8c8c', letterSpacing: 2, textTransform: 'uppercase' }}>
              <span style={{ color: '#ec5d00', display: 'inline-block', animation: 'boldPulse 2.4s ease-in-out infinite' }}>●</span>
              {' '}Available 2026
            </div>
          </div>

          {/* Display headline */}
          <h1 style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 'clamp(52px, 11vw, 160px)',
            fontWeight: 800, lineHeight: 0.87,
            letterSpacing: 'clamp(-3px, -0.05em, -8px)',
            color: '#f0f0f0',
            margin: '32px 0',
          }}>
            {[
              'Making',
              <>{'\u00a0'}<span style={{ color: '#ec5d00' }}>quiet</span> <span style={{ fontStyle: 'italic', fontFamily: 'Literata, serif', fontWeight: 400 }}>things</span></>,
              'loud enough.'
            ].map((line, li) => (
              <div key={li} style={{ overflow: 'hidden' }}>
                <div style={{
                  transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                  transition: `transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${180 + li * 140}ms`,
                }}>
                  {line}
                </div>
              </div>
            ))}
          </h1>

          {/* Bottom row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 700ms, opacity 500ms ease 700ms',
          }}>
            <p style={{ fontFamily: 'Literata, serif', fontSize: 16, lineHeight: 1.55, maxWidth: 420, color: '#c8c8c8', margin: 0 }}>
              {PERSON.name} — {PERSON.role.toLowerCase()}, based in {PERSON.city}. Four projects below.
            </p>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#8c8c8c', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              Scroll <span style={{ display: 'inline-block', animation: 'boldBob 1.6s ease-in-out infinite' }}>↓</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        {PROJECTS.map((p, idx) => (
          <ProjectSection
            key={p.n}
            project={p}
            idx={idx}
            captionMode="below"
            transitionStyle="slide"
            scrollRef={scrollRef}
          />
        ))}

        {/* About */}
        <section id="about" style={{
          background: '#f0f0f0', color: '#373737',
          padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 72px)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}>
            {/* Portrait placeholder */}
            <div style={{
              aspectRatio: '3/4',
              background: '#dcdcdc',
              maxWidth: 360,
            }} aria-label="Portrait photo" />

            {/* Bio column */}
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>
                About
              </div>
              <h2 style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 800, lineHeight: 0.92,
                letterSpacing: 'clamp(-1px, -0.03em, -3px)',
                color: '#373737', marginBottom: 28,
              }}>
                {PERSON.name}
              </h2>
              <p style={{ fontFamily: 'Literata, serif', fontSize: 18, lineHeight: 1.65, color: '#373737', maxWidth: 520, marginBottom: 32 }}>
                {PERSON.bio}
              </p>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c', letterSpacing: 1, textTransform: 'uppercase' }}>
                {PERSON.role} · {PERSON.city}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{
          background: '#373737', color: '#f0f0f0',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 72px)',
          minHeight: '60dvh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#8c8c8c', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
            <span style={{ color: '#ec5d00' }}>●</span> The End
          </div>
          <div style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 'clamp(36px, 7vw, 100px)',
            fontWeight: 700, lineHeight: 0.95,
            letterSpacing: 'clamp(-2px, -0.04em, -4px)',
            color: '#f0f0f0',
          }}>
            Let&#x27;s make<br />
            <a href={`mailto:${PERSON.email}`} style={{
              color: '#ec5d00', textDecoration: 'none',
              fontStyle: 'italic', fontFamily: 'Literata, serif', fontWeight: 400,
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              something →
            </a>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 40, flexWrap: 'wrap', fontFamily: 'Literata, serif', fontSize: 16 }}>
            {[['Email', PERSON.email, `mailto:${PERSON.email}`], ['LinkedIn', 'linkedin.com/in/sam-ten-voorde', PERSON.linkedin]].map(([label, display, href]) => (
              <div key={label}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                  {label}
                </div>
                <a href={href} target={label === 'LinkedIn' ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >{display}</a>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Menu overlay */}
      <Menu open={menuOpen} closing={menuClosing} onClose={closeMenu} />
      <PageTransition />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
