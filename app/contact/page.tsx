export default function ContactPage() {
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/" className="secondaryButton">Back home</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">CONTACT</p>
      <h1>Tell us what you&apos;re building.</h1>
      <p>For now, email us with the event date, location, production needs, and anything else we should know.</p>
      <a className="primaryButton" href="mailto:hello@echoproductions.com">hello@echoproductions.com</a>
    </section>
    <section className="contactChecklist">
      <h2>Helpful details</h2>
      <p>Event or service type</p><p>Date and location</p><p>Audio / video / lighting needs</p><p>Approximate schedule</p><p>Anything you already have in place</p>
    </section>
  </main>;
}