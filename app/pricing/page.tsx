import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Productions Pricing | Production Services & Event Support",
  description: "Explore ECHO Productions service packages and learn what goes into custom pricing for live production and event support.",
  alternates: { canonical: "/pricing" },
};

const packages = [
  ["SERVICE CALL","Flexible","Technical help for a specific service, rehearsal, or production need.","Best for focused technical help."],
  ["EVENT SUPPORT","Custom","Production operation and technical support tailored to your event.","Best for show-day support."],
  ["TRAINING","Custom","Focused training sessions for teams that want to improve workflow and confidence.","Best for building your team."],
];

export default function PricingPage() {
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/quote" className="secondaryButton">Request a quote</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">PRICING</p>
      <h1>Simple packages. Custom projects.</h1>
      <p>Final pricing depends on scope, duration, location, equipment, staffing, and technical requirements. Request a quote for an accurate price.</p>
    </section>
    <section className="pricingGrid">
      {packages.map(([name,price,desc,best]) =>
        <article className="priceCard" key={name}>
          <p className="eyebrow">{name}</p>
          <h2>{price}</h2>
          <p>{desc}</p>
          <strong>{best}</strong>
          <a href="/quote" className="primaryButton">Request a quote →</a>
        </article>
      )}
    </section>
    <section className="section">
      <p className="eyebrow">WHAT A QUOTE CONSIDERS</p>
      <h2>Built around the actual production.</h2>
      <p className="heroText">We consider event length, location, technical scope, equipment needs, staffing, setup and teardown, and any special requirements before giving a final price.</p>
      <div className="actions">
        <a href="/quote" className="primaryButton">Tell us about your event →</a>
        <a href="/services" className="secondaryButton">View services</a>
      </div>
    </section>
  </main>;
}