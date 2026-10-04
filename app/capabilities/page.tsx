import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Productions Capabilities | Audio, Video, Lighting & Operations",
  description: "Explore ECHO Productions capabilities across live audio, video, lighting, production operations, and technical support.",
  alternates: { canonical: "/capabilities" },
};

const capabilities = [
  ["AUDIO","FOH mixing","Monitor mixing","Wireless & stage support","System troubleshooting"],
  ["VIDEO","ProPresenter","Playback systems","Displays & screens","Graphics operation"],
  ["LIGHTING","Live operation","Show support","Programming assistance","Event execution"],
  ["OPERATIONS","Run of show","Scheduling","Team coordination","Technical troubleshooting"],
];

export default function CapabilitiesPage() {
  return <main className="page">
    <header className="pageHeader"><a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a><a href="/contact" className="secondaryButton">Request support</a></header>
    <section className="pageHero"><p className="eyebrow">CAPABILITIES</p><h1>One production partner. Multiple technical disciplines.</h1><p>Our services can be booked individually or combined into a complete production package.</p></section>
    <section className="capabilityGrid">{capabilities.map(([title,...items])=><article className="capabilityCard" key={title}><p className="eyebrow">{title}</p><ul>{items.map(item=><li key={item}>{item}<span>+</span></li>)}</ul></article>)}</section>
  </main>;
}