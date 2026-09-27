const steps = [
  ["01", "Discover", "We understand the problem, users, constraints and business opportunity."],
  ["02", "Design", "We shape the product, architecture and experience before heavy implementation."],
  ["03", "Engineer", "Our team builds, integrates, tests and automates the solution."],
  ["04", "Evolve", "We measure, improve and scale the system after it reaches production."]
];

export function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">HOW WE WORK</div>
            <h2>From <span className="gold">thought</span> to reality.</h2>
          </div>
          <p>
            A focused delivery process keeps strategy, design and engineering
            moving in the same direction.
          </p>
        </div>

        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <div className="num">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}