// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    n: '01',
    title: 'Study Inspirator',
    year: '2025',
    kind: 'Animation · Illustration',
    blurb: 'Character animation for the Studie Inspirator app.',
    slides: [
      {
        label: 'Intro',
        caption: 'Overview of animations for this project',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/SI-animatie-cover.mp4',
        bg: '#ffd1b3',
        coverKeyframes: [
          { time: 0,     color: '#ffd1b3' },
          { time: 1.53,  color: '#ffd1b3' },
          { time: 2.1,   color: '#dde9f8' },
          { time: 7.0,   color: '#dde9f8' },
          { time: 7.5,  color: '#ffd1b4' },
          { time: 9.4,  color: '#ffd1b4' },
          { time: 9.94,  color: '#eaf1c1' },
          { time: 12.6,  color: '#eaf1c1' },
          { time: 13.2, color: '#f2d8f9' },
          { time: 16.0, color: '#f2d8f9' },
        ],
      },
      {
        type: 'text',
        bg: '#ffffff',
        challenge: 'Study Inspirator was an existing app, but the old design was outdated and not as engaging to the target audience. Furthermore, we had to adhere to the WCAG guidelines while making a fun-feeling questionnaire.',
        idea:      'The new design would have to be fresh, engaging, and fun. Animation and good writing would bring the experience to life. A chat function guides students through the discovery journey — we even designed a new mascot!',
        result:    'Well, the mascot didn\'t make the final cut. But all the animations were a big success! Upcoming students are uncovering their future bachelor\'s programme every day!',
      },
      {
        label: 'A moment for our fallen friend',
        caption: 'The new mascot that didn\'t make it through the final revisions.',
        type: 'mascots',
        bg: '#ffffff',
        videos: [
          'content/projects/1%20Studie%20Inspirator/Mascotte-Neutraal.mp4',
          'content/projects/1%20Studie%20Inspirator/Mascotte-Knipoog.mp4',
          'content/projects/1%20Studie%20Inspirator/Mascotte-Enthousiast.mp4',
          'content/projects/1%20Studie%20Inspirator/Mascotte-Verbaasd.mp4',
        ],
      },
      {
        label: 'Discover',
        caption: 'Animation at the start of the journey',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/1-Ontdek.mp4',
        bg: '#fbd9c0',
      },
      {
        label: 'Loading',
        caption: 'Loading animation',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/2-Loading.mp4',
        bg: '#e3ecf8',
      },
      {
        label: 'How do you like to learn?',
        caption: 'Learn your way',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/3-Hoe-leer-je-het-lieftst.mp4',
        bg: '#e3ecf8',
      },
      {
        label: 'Let\'s go!',
        caption: 'Good job so far!',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/4-Goed-bezig-foutje.mp4',
        bg: '#fbd7be',
      },
      {
        label: 'Almost there!',
        caption: 'We\'re nearing the end of our journey.',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/5-Bijna-klaar.mp4',
        bg: '#edf3cd',
      },
      {
        label: 'Finish',
        caption: 'Animation to indicate the end of the questionnaire.',
        type: 'video',
        src: 'content/projects/1%20Studie%20Inspirator/6-Finish.mp4',
        bg: '#f0def8',
      },
      {
        label: 'This is the app',
        caption: 'You can try it yourself!',
        type: 'appscreens',
        bg: '#1c2340',
        images: [
          'content/projects/1%20Studie%20Inspirator/appscreen-1.png',
          'content/projects/1%20Studie%20Inspirator/appscreen-2.png',
          'content/projects/1%20Studie%20Inspirator/appscreen-3.png',
          'content/projects/1%20Studie%20Inspirator/appscreen-4.png',
          'content/projects/1%20Studie%20Inspirator/appscreen-5.png',
        ],
        link: 'https://vu.nl/nl/onderwijs/bachelor/studie-inspirator',
      },
    ],
  },
  {
    n: '02',
    title: 'Online Campus',
    year: '2021',
    kind: '3D · Visuals',
    blurb: 'Online Campus is an interactive community platform. In the various rooms, you can chat with students and lecturers, leave messages, attend live sessions and ask questions. There is also a hangout where you can meet each other in an informal setting.',
    slides: [
      {
        label: 'Cover',
        caption: '',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-coverimage.webp',
        bg: '#f0f0f0',
      },
      {
        type: 'text',
        bg: '#f0f0f0',
        challenge: 'When Covid hit, the physical campus disappeared overnight. VU Amsterdam needed more than a website. They needed a place where students and staff could still feel connected, run into each other, and actually belong somewhere.',
        idea:      'Think of the regular VU website as the bright side of the moon: factual, clear, informative. The Online Campus is the other side. A living space where you don\'t just find information, but find each other. Not a replacement for campus life, but a parallel world that breathes alongside it. The concept was developed by Total Design.',
        result:    'A browser- and app-based platform where students can attend open days, follow lectures, and hang out between classes. Without losing the sense of being somewhere together. As graphic designer at VU Amsterdam, I contributed by creating part of the 3D rendered backgrounds that make up this digital world. The project went on to win a Silver at the International Design Awards.',
      },
      {
        label: 'Render A',
        caption: 'Lounge room render',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-render-a.webp',
        bg: '#f0f0f0',
      },
      {
        label: 'Screenshot A',
        caption: 'Lounge room inside the Online Campus with the UI.',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-screenshot-a.webp',
        bg: '#f0f0f0',
      },
      {
        label: 'Render B',
        caption: 'Classroom 1',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-render-b.webp',
        bg: '#f0f0f0',
      },
      {
        label: 'Screenshot B',
        caption: 'Classroom 1 inside the Online Campus with UI.',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-screenshot-b.webp',
        bg: '#f0f0f0',
      },
      {
        label: 'Render C',
        caption: 'Classroom 2',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-render-c.webp',
        bg: '#f0f0f0',
      },
      {
        label: 'Screenshot C',
        caption: 'Classroom 2 inside the Online Campus with UI.',
        type: 'image',
        src: 'content/projects/2%20Online%20Campus/OC-screenshot-c.webp',
        bg: '#f0f0f0',
      },
    ],
  },
  {
    n: '03',
    title: 'How to video pitch?',
    year: '2020',
    kind: 'Animation · Explanation',
    blurb: 'During COVID, students had to submit a self-recorded video pitch for the annual talent awards — without any guidance. We made an explainer animation to help them structure their pitch and give the jury a fair basis for comparison.',
    slides: [
      {
        label: 'Animation',
        caption: 'Explanation for students on how to present their projects.',
        type: 'vimeo',
        vimeoId: '1191503261',
        bg: '#f0f0f0',
      },
      {
        type: 'text',
        challenge: 'The annual student talent awards moved online during COVID. Students had to submit a self-recorded video pitch, but without a shared format or guidance, entries would be difficult to compare and judge fairly.',
        idea:      'Create an explainer animation that gives students a clear structure and practical tips for recording their pitch — establishing a consistent format while keeping it approachable and fun to watch.',
        result:    'A playful frame-by-frame animation of paper cut-outs that students actually enjoyed watching, while giving the jury a level playing field to evaluate all entries.',
      },
      {
        label: 'Animating Process',
        caption: 'Screenshots from the frame-by-frame animation process in After Effects.',
        type: 'grid',
        cols: 3,
        images: [
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-1.png',
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-2.png',
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-3.png',
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-4.png',
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-5.png',
          'content/projects/3%20Video%20Pitch/animating%20proces/animating-6.png',
        ],
        bg: '#f0f0f0',
      },
      {
        label: 'Style Frames',
        caption: 'Eight style frames defining the visual language of the animation — colour, typography, and paper cut-out aesthetic.',
        type: 'grid',
        cols: 4,
        images: [
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-1.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-2.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-3.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-4.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-5.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-6.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-7.jpg',
          'content/projects/3%20Video%20Pitch/style%20frame/styleframe-8.jpg',
        ],
        bg: '#f0f0f0',
      },
      {
        label: 'Storyboard · Part 1',
        caption: 'First part of the storyboard, outlining the opening sequence of the explainer.',
        type: 'image',
        src: 'content/projects/3%20Video%20Pitch/storyboard%20sketches/storyboard-part-1.jpg',
        bg: '#f0f0f0',
      },
      {
        label: 'Storyboard · Part 2',
        caption: 'Second part of the storyboard, covering the core tips and structure.',
        type: 'image',
        src: 'content/projects/3%20Video%20Pitch/storyboard%20sketches/storyboard-part-2.jpg',
        bg: '#f0f0f0',
      },
      {
        label: 'Storyboard · Part 3',
        caption: 'Final part of the storyboard, leading to the closing of the animation.',
        type: 'image',
        src: 'content/projects/3%20Video%20Pitch/storyboard%20sketches/storyboard-part-3.jpg',
        bg: '#f0f0f0',
      },
    ],
  },
  {
    n: '04',
    title: 'VUfonds Magazine',
    year: '2025',
    kind: 'Editorial · Print',
    blurb: 'VUfonds Magazine #4 — the annual publication of VU Amsterdam\'s fundraising fund. A magazine that connects donors, researchers, and the broader VU community.',
    slides: [
      {
        label: 'Magazine',
        caption: 'Leaf through VUfonds Magazine #4. Click the page corners or use the arrows to browse.',
        type: 'flipbook',
        bg: '#ede8e0',
        pages: Array.from({ length: 16 }, (_, i) =>
          `content/projects/4%20VUfonds%20Magazine/pages/page-${String(i + 1).padStart(2, '0')}.png`
        ),
      },
      {
        type: 'text',
        bg: '#f5f0e8',
        challenge: 'VUfonds needed a magazine that would resonate with a diverse readership — from long-time donors to newly connected alumni — while staying true to the academic character of VU Amsterdam.',
        idea:      'A clean editorial design with warmth: generous whitespace, strong typographic hierarchy, and imagery that brings the human stories behind research to the foreground. Each spread tells a story, not just reports a fact.',
        result:    'VUfonds Magazine #4 was distributed to thousands of readers in the VU donor network, strengthening the connection between the university and its supporters.',
      },
    ],
  },
  {
    n: '05',
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

// ── VimeoSlide ────────────────────────────────────────────────────────────────

function VimeoSlide({ s }) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${s.vimeoId}?loop=1&title=0&byline=0&portrait=0`}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  );
}

// ── FlipbookSlide ─────────────────────────────────────────────────────────────

function FlipbookSlide({ s }) {
  const wrapRef = useRef(null);
  const elRef   = useRef(null);
  const pfRef   = useRef(null);
  const [page,  setPage]  = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const PageFlip = window.St?.PageFlip;
    if (!PageFlip) {
      console.warn('page-flip library niet geladen');
      return;
    }

    const timer = setTimeout(() => {
      const wrap = wrapRef.current;
      const el   = elRef.current;
      if (!wrap || !el) return;

      const dpr  = Math.min(window.devicePixelRatio || 1, 2);
      const visH = Math.floor(wrap.offsetHeight * 0.84);
      const visW = Math.floor(visH * 0.707);
      const h    = visH * dpr;
      const w    = visW * dpr;

      el.style.transform       = `scale(${1 / dpr})`;
      el.style.transformOrigin = 'center center';
      el.style.marginTop       = `${-visH * (dpr - 1) / 2}px`;
      el.style.marginBottom    = `${-visH * (dpr - 1) / 2}px`;

      const pf = new PageFlip(el, {
        width:               w,
        height:              h,
        showCover:           true,
        flippingTime:        800,
        usePortrait:         false,
        autoSize:            false,
        maxShadowOpacity:    0.5,
        showPageCorners:     false,
        disableFlipByClick:  true,
        swipeDistance:       0,
        startZIndex:         1,
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
      <div style={{ position: 'relative' }}>
        <div ref={elRef} />
        <div style={{ position: 'absolute', inset: 0 }} />
      </div>

      {total > 0 && (
        <div style={{
          position: 'absolute', bottom: 14,
          display: 'flex', alignItems: 'center', gap: 12,
          zIndex: 10,
        }}>
          <button
            onClick={() => pfRef.current?.flipPrev()}
            style={{ width: 34, height: 34, borderRadius: '50%', background: '#373737', color: '#f0f0f0', border: 'none', cursor: 'pointer', fontSize: 15, transition: 'transform 150ms' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >←</button>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8c8c8c', letterSpacing: 0.5, userSelect: 'none' }}>
            {String(page + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            onClick={() => pfRef.current?.flipNext()}
            style={{ width: 34, height: 34, borderRadius: '50%', background: '#ec5d00', color: '#f0f0f0', border: 'none', cursor: 'pointer', fontSize: 15, transition: 'transform 150ms' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >→</button>
        </div>
      )}
    </div>
  );
}

// ── SlideViewport ─────────────────────────────────────────────────────────────

function SlideViewport({ project, inverted, transitionStyle, captionMode, inView }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = project.slides.length;
  const coverVideoRef = useRef(null);
  const [coverBg, setCoverBg] = useState(() => project.slides[0]?.coverKeyframes?.[0]?.color ?? null);

  useEffect(() => {
    const video = coverVideoRef.current;
    if (!video) return;
    const kf = project.slides[0]?.coverKeyframes;
    if (!kf) return;
    const hexToRgb = h => [1,3,5].map(o => parseInt(h.slice(o, o+2), 16));
    const lerpColor = (a, b, t) => {
      const [r1,g1,b1] = hexToRgb(a), [r2,g2,b2] = hexToRgb(b);
      return '#' + [r1+(r2-r1)*t, g1+(g2-g1)*t, b1+(b2-b1)*t]
        .map(v => Math.round(v).toString(16).padStart(2,'0')).join('');
    };
    const onTimeUpdate = () => {
      const t = video.currentTime;
      let color = kf[0].color;
      for (let k = 0; k < kf.length - 1; k++) {
        if (t >= kf[k].time && t < kf[k + 1].time) {
          const progress = (t - kf[k].time) / (kf[k + 1].time - kf[k].time);
          color = lerpColor(kf[k].color, kf[k + 1].color, progress);
          break;
        }
      }
      if (t >= kf[kf.length - 1].time) color = kf[kf.length - 1].color;
      setCoverBg(color);
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  const prev = () => { setDir(-1); setI(v => (v - 1 + n) % n); };
  const next = () => { setDir( 1); setI(v => (v + 1) % n); };
  const goTo = (idx) => { setDir(idx > i ? 1 : -1); setI(idx); };

  const fg     = inverted ? '#373737' : '#f0f0f0';
  const muted  = '#8c8c8c';
  const isFade = transitionStyle === 'fade';
  const slideBg = (s) => s.bg
    ? s.bg
    : s.type === 'text'
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
              background: sIdx === 0 && coverBg ? coverBg : slideBg(s),
              transform: tx,
              opacity: isFade ? (active ? 1 : 0) : 1,
              transition: (isFade ? 'opacity 500ms ease' : 'transform 900ms cubic-bezier(0.76, 0, 0.24, 1)')
                + (sIdx === 0 && coverBg ? ', background-color 500ms ease' : ''),
              display: 'flex', alignItems: 'flex-end',
              padding: 0,
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
                        fontSize: 'clamp(13px, 1.3vw, 18px)',
                        lineHeight: 1.6, color: fg,
                      }}>{col.t}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {s.type === 'image' && (
                    <img
                      src={s.src}
                      alt={s.label}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {s.type === 'video' && (
                    <video
                      ref={sIdx === 0 ? coverVideoRef : null}
                      src={s.src}
                      autoPlay muted loop playsInline
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  {s.type === 'vimeo' && <VimeoSlide s={s} />}
                  {s.type === 'grid' && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'grid',
                      gridTemplateColumns: `repeat(${s.cols}, 1fr)`,
                      gap: 4,
                      padding: 4,
                    }}>
                      {s.images.map((src, ii) => (
                        <img key={ii} src={src} alt={`${s.label} ${ii + 1}`} style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                        }} />
                      ))}
                    </div>
                  )}
                  {s.type === 'mascots' && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 'clamp(12px, 2vw, 28px)',
                      padding: 'clamp(16px, 3vw, 40px)',
                    }}>
                      <div style={{
                        position: 'absolute', top: 'clamp(14px, 2vw, 28px)', left: 'clamp(14px, 2vw, 28px)',
                      }}>
                        <div style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: 'clamp(13px, 1.4vw, 20px)',
                          fontWeight: 700, color: fg,
                          letterSpacing: -0.3,
                        }}>{s.label}</div>
                        <div style={{
                          fontFamily: 'Literata, serif',
                          fontSize: 'clamp(11px, 1vw, 14px)',
                          color: fg, opacity: 0.7, marginTop: 4,
                        }}>He didn't make it through the final round of revisions.</div>
                      </div>
                      {s.videos.map((src, vi) => (
                        <div key={vi} style={{
                          width: 'clamp(80px, 18%, 160px)',
                          aspectRatio: '1/1',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}>
                          <video src={src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  )}
                  {s.type === 'flipbook' && <FlipbookSlide s={s} />}
                  {s.type === 'appscreens' && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
                      gap: 8, padding: 16,
                      alignItems: 'center',
                    }}>
                      {s.images.map((src, ii) => (
                        <img key={ii} src={src} alt={`App screen ${ii + 1}`} style={{
                          width: '100%', height: 'auto',
                          aspectRatio: '9/19',
                          objectFit: 'contain',
                          borderRadius: 8,
                        }} />
                      ))}
                      <a
                        href={s.link}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: '100%', height: 'auto',
                          aspectRatio: '9/19',
                          background: '#1a73e8',
                          color: '#fff',
                          borderRadius: 8,
                          fontFamily: '"Open Sans", sans-serif',
                          fontWeight: 600, fontSize: 'clamp(11px, 1.2vw, 16px)',
                          textDecoration: 'none',
                          textAlign: 'center',
                          padding: '0 12px',
                          boxSizing: 'border-box',
                        }}
                      >Try the app yourself!</a>
                    </div>
                  )}
                  {captionMode === 'overlay' && active && (
                    <div style={{
                      position: 'absolute', left: 24, right: 24, bottom: 56,
                      color: '#f0f0f0', fontFamily: '"Open Sans", sans-serif',
                      fontSize: 16, fontWeight: 400, maxWidth: 520,
                      textShadow: '0 1px 20px rgba(0,0,0,0.6)',
                      animation: 'boldCaptionIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both',
                    }}>{s.caption}</div>
                  )}
                </>
              )}
            </div>
          );
        })}

      </div>

      {/* Slide nav below viewport */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 12,
      }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {project.slides.map((_, sIdx) => (
            <button key={sIdx} onClick={() => goTo(sIdx)} style={{
              width: sIdx === i ? 28 : 10, height: 3,
              background: sIdx === i ? '#ec5d00' : muted,
              border: 'none', padding: 0, cursor: 'pointer',
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
              border: 'none', fontSize: 16, cursor: 'pointer',
              transition: 'transform 200ms ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            aria-label={label}>{label}</button>
          ))}
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
              <div style={{ fontFamily: 'Literata, serif', fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: inverted ? '#373737' : '#f0f0f0', maxWidth: 560 }}>
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

  const inverted = true;
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
            {' '}Project {project.n} / {String(PROJECTS.length).padStart(2, '0')}
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
        <p style={{ fontFamily: 'Literata, serif', fontSize: 16, fontWeight: 300, lineHeight: 1.55, color: fg, maxWidth: 640 }}>
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
    <div style={{ position: 'fixed', inset: 0, background: '#f0f0f0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

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
          color: '#373737', textDecoration: 'none',
          background: 'rgba(240,240,240,0.72)',
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
          background: 'rgba(240,240,240,0.72)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: 999,
          padding: '10px 12px',
          pointerEvents: 'auto',
        }}>
          {[0,1,2].map(k => (
            <div key={k} style={{ width: 18, height: 1.5, background: '#373737' }} />
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
          background: '#f0f0f0', color: '#373737',
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
            color: '#373737',
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
            <p style={{ fontFamily: 'Literata, serif', fontSize: 16, lineHeight: 1.55, maxWidth: 420, color: '#6c6c6c', margin: 0 }}>
              {PERSON.name} — {PERSON.role.toLowerCase()}, based in {PERSON.city}. Five projects below.
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
          background: '#f0f0f0', color: '#373737',
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
            color: '#373737',
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
