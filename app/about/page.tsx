import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ECHO Productions | Live Production & AV",
  description: "Learn how ECHO Productions approaches live audio, video, lighting, technical operations, training, and event production support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage(){return <main className="page"><header className="pageHeader"><a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a><a href="/quote" className="secondaryButton">Start a project</a></header>
<section className="pageHero"><p className="eyebrow">ABOUT ECHO PRODUCTIONS</p><h1>Technical production without the unnecessary complexity.</h1><p>Echo Productions is built around dependable execution, clear communication, and practical technical support for churches, events, creators, and production teams.</p></section>
<section className="aboutGrid"><div className="aboutCard"><strong>01</strong><h2>Reliable</h2><p>Preparation, communication, and troubleshooting are treated as part of the production from the beginning.</p></div><div className="aboutCard"><strong>02</strong><h2>Technical</h2><p>Audio, video, lighting, presentation, networking, and show workflows all have to work together.</p></div><div className="aboutCard"><strong>03</strong><h2>Practical</h2><p>We focus on solutions that fit the actual team, venue, equipment, budget, and goals—not unnecessary complexity.</p></div></section>
<section className="section"><p className="eyebrow">WHAT WE DO</p><h2>From one technical problem to an entire show.</h2><p className="heroText">Echo Productions can support individual production needs, show-day operation, technical planning, team training, troubleshooting, and broader event production.</p><div className="actions"><a href="/services" className="primaryButton">Explore services →</a><a href="/portfolio" className="secondaryButton">See selected work</a></div></section>
<section className="section"><p className="eyebrow">OUR APPROACH</p><h2>Understand the goal. Build the workflow. Support the show.</h2><p className="heroText">Every project starts with the outcome and works backward through the technical requirements, preparation, execution, and follow-up. The goal is simple: technology should help the moment happen, not become the moment.</p></section>
<section className="section"><p className="eyebrow">NEED TECHNICAL HELP?</p><h2>Let&apos;s figure out what you need.</h2><p className="heroText">Start with a project request or use Echo Tech for production and IT questions.</p><div className="actions"><a href="/quote" className="primaryButton">Start a project →</a><a href="/help" className="secondaryButton">Ask Echo Tech</a></div></section>
</main>}