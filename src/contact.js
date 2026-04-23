// ── App ───────────────────────────────────────────────────────────────────────

function App() {
  const [mounted,     setMounted]     = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const openMenu  = () => { setMenuClosing(false); setMenuOpen(true); };
  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => { setMenuOpen(false); setMenuClosing(false); }, 900);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#373737', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: 'clamp(16px, 2.5vw, 28px) clamp(20px, 4vw, 40px)',
        zIndex: 40, pointerEvents: 'none',
      }}>
        <a href="index.html" style={{
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

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <section style={{
          background: '#373737', color: '#f0f0f0',
          minHeight: '100dvh',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 72px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#8c8c8c',
            letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 500ms ease 100ms',
          }}>
            <span style={{ color: '#ec5d00', display: 'inline-block', animation: 'boldPulse 2.4s ease-in-out infinite' }}>●</span> Get in touch
          </div>

          <div style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 'clamp(36px, 7vw, 100px)',
            fontWeight: 700, lineHeight: 0.95,
            letterSpacing: 'clamp(-2px, -0.04em, -4px)',
            color: '#f0f0f0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(32px)',
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 220ms, opacity 700ms ease 220ms',
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

          <div style={{
            marginTop: 48, display: 'flex', gap: 40, flexWrap: 'wrap',
            fontFamily: 'Literata, serif', fontSize: 16,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 400ms, opacity 700ms ease 400ms',
          }}>
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

      <Menu open={menuOpen} closing={menuClosing} onClose={closeMenu} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
