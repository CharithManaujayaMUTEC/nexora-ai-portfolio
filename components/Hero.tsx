export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-noise" />
      <div className="hero-glow" />

      <div className="container hero-content">
        <div className="hero-copy reveal">
          <div className="eyebrow">IT × AI SOLUTIONS</div>
          <h1>
            Building
            <br />
            beyond <span>ordinary.</span>
          </h1>
          <p className="hero-description">
            We combine software engineering, artificial intelligence and cloud
            technology to turn ambitious ideas into intelligent digital products.
          </p>

          <div className="hero-actions">
            <a href="#work" aria-label="View our work">
              <span className="circle-arrow">↗</span>
            </a>
            <a href="#work" className="action-label">View our work</a>
          </div>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="sun" />
        <div className="planet" />
        <div className="mini-planet" />
        <div className="portal" />
        <div className="orbit" />
        <div className="mountains" />
      </div>

      <div className="water" aria-hidden="true" />
      <div className="hero-floor-line" aria-hidden="true" />

      <div className="container">
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}