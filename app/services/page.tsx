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
      <a href="/#contact" className="secondaryButton">Start a project</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">SERVICES</p>
      <h1>Technical support that keeps the show moving.</h1>
      <p>Choose the support you need—or tell us what you are planning and we&apos;ll help build the right production package.</p>
    </section>
    <section className="serviceList">
      {services.map(([number,title,description]) => <article className="serviceRow" key={number}>
        <span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><b>↗</b>
      </article>)}
    </section>
  </main>;
}