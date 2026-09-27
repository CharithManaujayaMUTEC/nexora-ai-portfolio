const projects = [
  ["01", "Intelligent Operations", "AI / AUTOMATION"],
  ["02", "Next-Gen Commerce", "PRODUCT / WEB"],
  ["03", "Enterprise Cloud", "CLOUD / DEVOPS"],
  ["04", "Computer Vision Lab", "AI / COMPUTER VISION"],
  ["05", "Data Intelligence", "DATA / ANALYTICS"]
];

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">SELECTED WORK</div>
            <h2>Ideas turned into <span className="gold">systems.</span></h2>
          </div>
          <p>
            A selection of the kinds of products and platforms we build for
            organizations ready to move from concept to measurable impact.
          </p>
        </div>

        <div className="work-list">
          {projects.map(([index, title, type]) => (
            <a className="work-item" href="#contact" key={index}>
              <span className="work-index">{index}</span>
              <span className="work-main">
                <span className="work-title">{title}</span>
                <span className="work-type">{type}</span>
              </span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}