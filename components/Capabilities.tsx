const capabilities = [
  ["Artificial Intelligence", "AI / ML"],
  ["Generative AI & LLMs", "AI"],
  ["Computer Vision", "AI"],
  ["Web & Mobile Platforms", "PRODUCT"],
  ["Cloud Architecture", "CLOUD"],
  ["DevOps & CI/CD", "ENGINEERING"],
  ["Data Engineering", "DATA"],
  ["API & System Integration", "BACKEND"]
];

export function Capabilities() {
  return (
    <section className="section capabilities" id="ai">
      <div className="container capability-layout">
        <div className="capability-copy">
          <div className="eyebrow">AI + ENGINEERING</div>
          <h2>Intelligence that <span className="gold">works.</span></h2>
          <p>
            AI should not be a buzzword sitting on a slide. We connect models
            to products, data and business workflows so intelligence becomes
            something people can actually use.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map(([name, category]) => (
            <div className="capability-row" key={name}>
              <span>{name}</span>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}