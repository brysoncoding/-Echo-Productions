const packages = [
  ["SERVICE CALL","Flexible","Technical help for a specific service, rehearsal, or production need."],
  ["EVENT SUPPORT","Custom","Production operation and technical support tailored to the event."],
  ["TRAINING","Custom","Focused training sessions for teams that want to improve their workflow."],
];

export default function PricingPage() {
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/#contact" className="secondaryButton">Request a quote</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">PRICING</p>
      <h1>Simple packages. Custom projects.</h1>
      <p>Every production is different. We&apos;ll scope the work before quoting so you know what you&apos;re getting.</p>
    </section>
    <section className="pricingGrid">
      {packages.map(([name,price,desc]) => <article className="priceCard" key={name}><p className="eyebrow">{name}</p><h2>{price}</h2><p>{desc}</p><a href="/#contact" className="primaryButton">Request details</a></article>)}
    </section>
  </main>;
}