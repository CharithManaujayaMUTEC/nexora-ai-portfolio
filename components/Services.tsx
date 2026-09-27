const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Digital Products",
    text: "Web platforms, SaaS products and enterprise applications engineered around real business outcomes."
  },
  {
    number: "02",
    icon: "✦",
    title: "AI & Automation",
    text: "Intelligent assistants, predictive systems, computer vision and workflow automation that reduce complexity."
  },
  {
    number: "03",
    icon: "◇",
    title: "Cloud & Engineering",
    text: "Scalable infrastructure, APIs, DevOps and modern architectures designed for reliability and growth."
  }
];

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">WHAT WE DO</div>
            <h2>Technology with <span className="gold">purpose.</span></h2>
          </div>
          <p>
            From the first architecture diagram to production monitoring, we
            bring product thinking and engineering discipline to every digital
            challenge.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}