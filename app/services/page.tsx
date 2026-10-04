const services = [
  ["01","Live Audio","FOH, monitors, system support, show operation, and troubleshooting."],
  ["02","Video & Graphics","ProPresenter, presentation systems, playback, screens, and graphics operation."],
  ["03","Lighting","Show lighting operation, programming support, and event-day execution."],
  ["04","Production Operations","A1 support, stage management, scheduling, run-of-show, and technical coordination."],
  ["05","Training","Hands-on training for church and event production teams."],
  ["06","Event Support","Flexible technical support for concerts, special events, and productions."],
];

export default function ServicesPage() {
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/quote" className="secondaryButton">Start a project</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">SERVICES</p>
      <h1>Technical support that keeps the show moving.</h1>
      <p>Choose the support you need—or tell us what you are planning and we&apos;ll help build the right production package.</p>
    </section>
    <section className="serviceList">
      {services.map(([number,title,description]) => <article className="serviceRow" key={number}>
        <span>{number}</span>
        <div><h2>{title}</h2><p>{description}</p><a href="/quote" className="textLink">Build this into my project →</a></div>
        <b aria-hidden="true">↗</b>
      </article>)}
    </section>
    <section className="section">
      <p className="eyebrow">NOT SURE WHAT YOU NEED?</p>
      <h2>Tell us about the show.</h2>
      <p className="heroText">We can help turn your goals into a practical production plan, whether you need one technician or broader technical support.</p>
      <div className="actions"><a href="/quote" className="primaryButton">Start a project →</a><a href="/help" className="secondaryButton">Ask Echo Tech</a></div>
    </section>
  </main>;
}