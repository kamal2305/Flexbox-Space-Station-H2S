import './LandingPage.css';

const levels = [
  { id: 1, title: "The First Docking",  concept: "Flexbox", tag: "justify-content",        ships: ["🚀"],                           points: 100 },
  { id: 2, title: "Final Approach",     concept: "Flexbox", tag: "justify-content",        ships: ["🚀","🛸"],                      points: 150 },
  { id: 3, title: "Vertical Alignment", concept: "Flexbox", tag: "align-items",            ships: ["🚀"],                           points: 150 },
  { id: 4, title: "Column Formation",   concept: "Flexbox", tag: "flex-direction",         ships: ["🚀","🛸","🛩️"],                points: 200 },
  { id: 5, title: "Fleet Wrap",         concept: "Flexbox", tag: "flex-wrap",              ships: ["🚀","🛸","🛩️","🚀","🛸"],     points: 200 },
  { id: 6, title: "Row Alignment",      concept: "Flexbox", tag: "align-content",          ships: ["🚀","🛸","🛩️","🚀","🛸","🛩️"], points: 250 },
  { id: 7, title: "Grid Sectors",       concept: "Grid",    tag: "grid-template-columns",  ships: ["🚀","🛸","🛩️","🚀","🛸","🛩️"], points: 300 },
  { id: 8, title: "Orbital Grid",       concept: "Grid",    tag: "grid-template-rows+gap", ships: ["🚀","🛸","🛩️","🚀","🛸","🛩️"], points: 400 },
];

const features = [
  {
    icon: "🎮",
    title: "Learn by Playing",
    desc: "Solve real CSS layout puzzles in an interactive docking bay. No boring tutorials — just drag, select, and ship.",
  },
  {
    icon: "⚡",
    title: "Instant Feedback",
    desc: "See your CSS changes applied in real-time. A glowing green match means mission success. Red? Try again, Commander.",
  },
  {
    icon: "🏆",
    title: "Score & Streak System",
    desc: "Earn points for each completed mission. Build streaks and track your progress across all 8 levels.",
  },
  {
    icon: "🧠",
    title: "From Flex to Grid",
    desc: "Master justify-content, align-items, flex-direction, flex-wrap, align-content — then level up to CSS Grid.",
  },
  {
    icon: "📱",
    title: "Mobile Ready",
    desc: "Optimized for desktop and mobile. Tap snippet chips on mobile or use dropdowns on desktop.",
  },
  {
    icon: "💾",
    title: "Progress Saved",
    desc: "Your progress is auto-saved to localStorage. Come back anytime and pick up right where you left off.",
  },
];

export default function LandingPage({ onStart }) {
  return (
    <div className="landing">

      {/* ── Nav ── */}
      <nav className="landing-nav">
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">🚀</span>
          <span className="nav-logo-text">Flexbox Space Station</span>
          <span className="nav-logo-badge">v1.0</span>
        </a>
        <button className="btn-primary" onClick={onStart}>
          <span>Launch Game</span>
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Interactive CSS Layout Training
        </div>

        <h1 className="hero-title">
          Master CSS Layouts
          <br />
          <span className="hero-title-gradient">One Docking Mission at a Time</span>
        </h1>

        <p className="hero-subtitle">
          An interactive space game that teaches Flexbox and CSS Grid through
          8 progressively challenging docking missions. No setup. Just play.
        </p>

        <div className="hero-cta-group">
          <button className="hero-cta-primary" onClick={onStart}>
            <span>🚀 Start Training</span>
          </button>
          <a
            className="hero-cta-secondary"
            href="https://github.com/kamal2305/Flexbox-Space-Station-H2S"
            target="_blank"
            rel="noreferrer"
          >
            ⭐ Star on GitHub
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">8</span>
            <span className="hero-stat-label">Missions</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">1,750</span>
            <span className="hero-stat-label">Max Points</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">6</span>
            <span className="hero-stat-label">CSS Concepts</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">0</span>
            <span className="hero-stat-label">Setup Required</span>
          </div>
        </div>

        {/* Orbit Visual */}
        <div className="hero-visual">
          <div className="orbit-ring orbit-1"><span className="orbit-ship">🛸</span></div>
          <div className="orbit-ring orbit-2"><span className="orbit-ship">🛩️</span></div>
          <div className="orbit-ring orbit-3"><span className="orbit-ship">🚀</span></div>
          <span className="orbit-core">🌌</span>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section">
        <p className="section-eyebrow">// Why Play</p>
        <h2 className="section-title">Built for developers who<br />learn by doing</h2>
        <p className="section-subtitle">
          Stop reading docs and start building intuition. Every mission in the Space Station
          teaches a real-world CSS skill you'll use daily.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Code Preview ── */}
      <section className="code-preview-section">
        <div className="code-preview-inner">
          <div className="code-preview-text">
            <p className="section-eyebrow">// How It Works</p>
            <h2 className="section-title">Write CSS.<br />Watch ships dock.</h2>
            <p className="section-subtitle">
              Select CSS values from the editor panel and watch the docking bay update
              in real time. Match the target layout to complete the mission and earn points.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">⚛️ React 19</span>
              <span className="tech-badge">⚡ Vite 8</span>
              <span className="tech-badge">🎨 Vanilla CSS</span>
              <span className="tech-badge">🔢 LocalStorage</span>
            </div>
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="code-dot code-dot-red" />
              <span className="code-dot code-dot-yellow" />
              <span className="code-dot code-dot-green" />
              <span className="code-filename">docking-bay.css</span>
            </div>
            <div className="code-body">
              <div><span className="code-comment">/* Mission: Center the cargo ship */</span></div>
              <br />
              <div>
                <span className="code-selector">.docking-bay</span>
                <span className="code-brace"> {'{'}</span>
              </div>
              <div>&nbsp;&nbsp;<span className="code-property">display</span>: <span className="code-value">flex</span>;</div>
              <div>&nbsp;&nbsp;<span className="code-property">justify-content</span>: <span className="code-value">center</span>;</div>
              <div>&nbsp;&nbsp;<span className="code-property">align-items</span>: <span className="code-value">center</span>;</div>
              <div><span className="code-brace">{'}'}</span></div>
              <br />
              <div><span className="code-comment">/* ✅ Mission Complete! +150pts */</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Levels ── */}
      <section className="section">
        <div className="levels-header">
          <div>
            <p className="section-eyebrow">// Mission Briefing</p>
            <h2 className="section-title">8 Missions.<br />2 Skill Trees.</h2>
            <p className="section-subtitle">
              Start with Flexbox fundamentals and graduate to CSS Grid mastery.
              Each mission builds on the last.
            </p>
          </div>
        </div>

        <div className="levels-grid">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`level-card${level.concept === 'Grid' ? ' grid-level' : ''}`}
            >
              <div className="level-number">MISSION {String(level.id).padStart(2, '0')}</div>
              <div className="level-ships">{level.ships.slice(0, 3).join('')}</div>
              <div className="level-title">{level.title}</div>
              <span className={`level-tag${level.concept === 'Grid' ? ' grid-tag' : ''}`}>
                {level.tag}
              </span>
              <span className="level-points">+{level.points}pts</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <span className="final-cta-emoji">🚀</span>
          <h2 className="final-cta-title">
            Ready to Dock,<br />Commander?
          </h2>
          <p className="final-cta-desc">
            Your first mission awaits. Center that cargo ship and start your journey
            to CSS layout mastery. No account needed. Free forever.
          </p>
          <div className="hero-cta-group">
            <button className="hero-cta-primary" onClick={onStart}>
              <span>🛸 Begin Mission 1</span>
            </button>
            <a
              className="hero-cta-secondary"
              href="https://github.com/kamal2305/Flexbox-Space-Station-H2S"
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <div className="footer-left">
          Built with <strong>React + Vite</strong> · Void Nexus Design System ·{' '}
          <strong style={{ color: 'var(--purple)' }}>Flexbox Space Station</strong>
        </div>
        <div className="footer-links">
          <a
            className="footer-link"
            href="https://github.com/kamal2305/Flexbox-Space-Station-H2S"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href="https://flexbox-space-station.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <button className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={onStart}>
            Play Now
          </button>
        </div>
      </footer>

    </div>
  );
}
