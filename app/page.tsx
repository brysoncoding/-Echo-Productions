const services = [
  {
    title: "Live Audio",
    description: "FOH mixing, monitors, system support, and show-day audio operation.",
  },
  {
    title: "Production Support",
    description: "Hands-on help with lighting, video, graphics, playback, and show flow.",
  },
  {
    title: "Production Training",
    description: "Practical training that helps teams build confidence and run better productions.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">ECHO<span>PRODUCTIONS</span></div>
        <a href="#contact" className="navButton">Get in touch</a>
      </nav>

      <section className="hero">
        <div className="heroGlow" />
        <p className="eyebrow">LIVE PRODUCTION • AUDIO • AV</p>
        <h1>Make every moment <span>sound</span> and look better.</h1>
        <p className="heroText">
          Echo Productions helps churches, events, and creators deliver
          reliable, professional live production.
        </p>
        <div className="actions">
          <a href="#services" className="primaryButton">Explore services</a>
          <a href="#contact" className="secondaryButton">Start a project</a>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>Production built around your event.</h2>
        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="cardIcon">+</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p>
          From Sunday services to special events, Echo Productions brings
          technical skill, preparation, and a team-first mindset to the room.
        </p>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
          <h2>Have a production coming up?</h2>
          <p>Tell us what you&apos;re working on and what you need help with.</p>
        </div>
        <a className="primaryButton" href="mailto:hello@echoproductions.com">
          Contact Echo Productions
        </a>
      </section>

      <footer>
        <div className="brand">ECHO<span>PRODUCTIONS</span></div>
        <p>© {new Date().getFullYear()} Echo Productions. All rights reserved.</p>
      </footer>
    </main>
  );
}