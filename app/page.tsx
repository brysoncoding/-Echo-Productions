const services=[["Live Audio","FOH, monitors, system support, and show operation."],["Video & Graphics","ProPresenter, playback, screens, and presentation systems."],["Lighting","Show operation and technical lighting support."]];

const work=[
  ["01","Live Audio","AUDIO / LIVE PRODUCTION","Live sound support, mixing, system setup, troubleshooting, and show operation."],
  ["02","Live Video & Switching","VIDEO / BROADCAST","Camera operation, live switching, IMAG, presentation systems, and livestream production."],
  ["03","Lighting & Show Control","LIGHTING / PRODUCTION","Lighting operation, programming, show looks, and technical production support."],
  ["04","Production Systems","SYSTEMS / IT","Building, configuring, troubleshooting, and maintaining the technology behind live production."]
];

export default function Home(){
  return <main>
    <nav className="nav">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <div className="navLinks"><a href="/services">Services</a><a href="/portfolio">Work</a><a href="/resources">Resources</a><a href="/about">About</a><a href="/contact" className="navButton">Contact</a></div>
    </nav>

    <section className="hero">
      <div className="heroGlow"/>
      <p className="eyebrow">LIVE PRODUCTION • AUDIO • AV</p>
      <h1>Technical production <span>for moments that matter.</span></h1>
      <p className="heroText">Echo Productions provides live audio, video, lighting, streaming, and technical support for churches, events, and creators.</p>
      <div className="actions"><a href="/quote" className="primaryButton">Request a quote <span>→</span></a><a href="/services" className="secondaryButton">Explore services</a></div>
    </section>

    <section className="section">
      <p className="eyebrow">SERVICES</p>
      <h2>Production support built around your event.</h2>
      <div className="grid">{services.map(([title,desc],i)=><article className="card" key={title}><div className="cardIcon">0{i+1}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      <a className="textLink" href="/services">See all services →</a>
    </section>

    <section className="statement"><p>From setup to showtime, the goal is simple: make the technology work so the moment can happen.</p></section>

    <section className="section workSection">
      <p className="eyebrow">SELECTED WORK</p>
      <h2>What Echo Productions is built to support.</h2>
      <p className="heroText">Real production work, technical systems, and event support—organized into the areas where Echo Productions can make a difference.</p>

      <div className="workGrid">
        {work.map(([number,title,category,description])=>
          <article className="workCard" key={title}>
            <div className="workMedia">
              <span>PHOTO / PROJECT</span>
              <strong>{number}</strong>
            </div>
            <div className="workInfo">
              <p className="eyebrow">{category}</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="textLink" href="/portfolio">View project →</a>
            </div>
          </article>
        )}
      </div>
    </section>

    <section className="section workStatement">
      <div>
        <p className="eyebrow">BEHIND THE SHOW</p>
        <h2>Production isn't just the show.</h2>
        <p className="heroText">It's everything that makes the show work. Echo Productions supports the people, systems, and technology behind live events—from audio and video to lighting, networking, computers, and troubleshooting.</p>
      </div>
      <div className="actions"><a href="/resources" className="primaryButton">Explore Production Resources</a><a href="/help" className="secondaryButton">Ask Echo Tech</a></div>
    </section>

    <section className="section">
      <p className="eyebrow">TECHNICAL RESOURCE</p>
      <h2>Need to figure something out?</h2>
      <p className="heroText">Echo Tech Assist is built into the site for production and IT questions—not as the whole site, but as a tool when you need it.</p>
      <div className="actions"><a href="/help" className="primaryButton">Open Echo Tech Assist</a><a href="/resources" className="secondaryButton">Browse resources</a></div>
    </section>

    <section className="contact"><div><p className="eyebrow">READY TO WORK TOGETHER?</p><h2>Have a production coming up?</h2><p>Tell us what you&apos;re planning and we&apos;ll figure out the technical side.</p></div><a className="primaryButton" href="/quote">Request a quote</a></section>

    <footer><div className="brand">ECHO<span>PRODUCTIONS</span></div><div className="footerLinks"><a href="/services">Services</a><a href="/portfolio">Work</a><a href="/resources">Resources</a><a href="/help">Tech Assist</a><a href="/contact">Contact</a></div><p>© 2026 Echo Productions.</p></footer>
  </main>
}