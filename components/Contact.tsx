const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@yourcompany.com";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content container">
        <div className="eyebrow">START A CONVERSATION</div>
        <h2>
          Have a problem
          <br />
          worth <span className="gold">solving?</span>
        </h2>
        <p>
          Tell us what you are building, what is getting in the way, or where
          you want to go next. We&apos;ll take it from there.
        </p>

        <a className="contact-button" href={`mailto:${email}`}>
          {email}
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}