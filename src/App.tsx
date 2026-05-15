export default function App() {
  return (
    <div style={{ backgroundColor: '#0e0d0c', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Hero />
      <FormSection />
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient orb — amber warm glow, top-center bleeding in */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-18%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(210,95,28,0.62) 0%, rgba(185,70,18,0.35) 38%, rgba(140,50,12,0.10) 65%, transparent 80%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
        }}
      />

      {/* Secondary softer amber bloom — lower left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-12%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(190,80,20,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: 'clamp(48px, 8vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#e8e3da',
            margin: 0,
          }}
        >
          nyscents.
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: '14px',
            letterSpacing: '0.1em',
            color: '#a09890',
            marginTop: '20px',
            marginBottom: 0,
            textTransform: 'lowercase',
          }}
        >
          a sensory design research project
        </p>

        <div style={{ marginTop: '48px' }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: '#6b6258',
              textTransform: 'lowercase',
            }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '0 clamp(12px, 3vw, 24px) 120px',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow behind card */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,70,18,0.13) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '920px',
        }}
      >
        {/* Hairline rule */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(232,227,218,0.12), transparent)',
            marginBottom: '56px',
          }}
        />

        {/* Card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(232,227,218,0.08)',
            borderRadius: '16px',
            padding: 'clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: '#6b6258',
              textTransform: 'uppercase',
              marginBottom: '24px',
              marginTop: 0,
            }}
          >
            Scent Memory Survey
          </p>

          <iframe
            src="https://tally.so/embed/yPjb86?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Nyscents Scent Memory Survey"
            style={{ display: 'block', border: 'none', background: 'transparent' }}
          />
        </div>
      </div>
    </section>
  );
}
