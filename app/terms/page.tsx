import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Productions Terms & Privacy | Site Information",
  description: "Review ECHO Productions website use, technical-assistance information, and privacy-policy placeholder.",
  alternates: { canonical: "/terms" },
};

export default function Terms(){return <main className="page"><header className="pageHeader"><a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a><a href="/contact" className="secondaryButton">Contact</a></header><section className="pageHero"><p className="eyebrow">SITE INFORMATION</p><h1>Terms & privacy basics.</h1><p>This starter page provides a place for the final business terms and privacy policy before public launch.</p></section><section className="legalText"><h2>Website use</h2><p>Information on this site is provided for general production and technical purposes. Service scope, availability, pricing, and event details should be confirmed directly with Echo Productions.</p><h2>Technical assistance</h2><p>Echo Tech Assist is an informational troubleshooting feature. Technical advice should be checked against the manuals, documentation, safety procedures, and requirements for the equipment or environment involved.</p><h2>Privacy</h2><p>Before launch, this section should be replaced with the final privacy policy describing how quote requests, contact messages, analytics, and any assistant conversations are handled.</p></section></main>}