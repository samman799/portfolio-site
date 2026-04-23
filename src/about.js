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
    <div style={{ position: 'fixed', inset: 0, background: '#f0f0f0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

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

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <section style={{
          background: '#f0f0f0', color: '#373737',
          minHeight: '100dvh',
          padding: 'clamp(100px, 14vw, 180px) clamp(24px, 5vw, 72px) clamp(60px, 10vw, 120px)',
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
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(32px)',
              transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 700ms ease 100ms',
            }} aria-label="Portrait photo" />

            {/* Bio column */}
            <div style={{ paddingTop: 8 }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c',
                letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 200ms, opacity 500ms ease 200ms',
              }}>
                About
              </div>
              <h1 style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 800, lineHeight: 0.92,
                letterSpacing: 'clamp(-1px, -0.03em, -3px)',
                color: '#373737', marginBottom: 28,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(28px)',
                transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 300ms, opacity 700ms ease 300ms',
              }}>
                {PERSON.name}
              </h1>
              <p style={{
                fontFamily: 'Literata, serif', fontSize: 18, lineHeight: 1.65,
                color: '#373737', maxWidth: 520, marginBottom: 32,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 420ms, opacity 700ms ease 420ms',
              }}>
                {PERSON.bio}
              </p>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c',
                letterSpacing: 1, textTransform: 'uppercase',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 540ms, opacity 500ms ease 540ms',
              }}>
                {PERSON.role} · {PERSON.city}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Menu open={menuOpen} closing={menuClosing} onClose={closeMenu} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
