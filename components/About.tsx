export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-visual" aria-hidden="true">
          <div className="about-stat">
            Engineering × Design × Intelligence
            <br />
            Built for the next decade.
          </div>
        </div>

        <div className="about-copy">
          <div className="eyebrow">ABOUT NEXORA</div>
          <h2>We build what comes <span className="gold">next.</span></h2>
          <p>
            NEXORA is an IT and AI solutions company focused on building
            digital products that are useful, scalable and beautifully
            engineered. We work across software, AI, cloud and data to solve
            problems that matter.
          </p>

          <div className="about-points">
            <div className="about-point">
              <strong>Business-first</strong>
              <span>Technology decisions tied to measurable outcomes.</span>
            </div>
            <div className="about-point">
              <strong>AI-native</strong>
              <span>Modern intelligence integrated into real workflows.</span>
            </div>
            <div className="about-point">
              <strong>Engineering-led</strong>
              <span>Clean architecture, automation and production discipline.</span>
            </div>
            <div className="about-point">
              <strong>Built to scale</strong>
              <span>Systems designed for the next stage, not just launch day.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}