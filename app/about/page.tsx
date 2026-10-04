export default function AboutPage() {
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/#contact" className="secondaryButton">Contact</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">ABOUT ECHO PRODUCTIONS</p>
      <h1>Production should disappear behind the moment.</h1>
      <p>Echo Productions is built around dependable technical execution, clear communication, and a team-first approach to live events.</p>
    </section>
    <section className="aboutGrid">
      <div className="aboutCard"><strong>01</strong><h2>Reliable</h2><p>Preparation and troubleshooting are part of the job—not an afterthought.</p></div>
      <div className="aboutCard"><strong>02</strong><h2>Technical</h2><p>Audio, video, lighting, presentation, and production workflows all have to work together.</p></div>
      <div className="aboutCard"><strong>03</strong><h2>People-first</h2><p>The technology matters, but the people on stage, backstage, and in the room matter more.</p></div>
    </section>
  </main>;
}