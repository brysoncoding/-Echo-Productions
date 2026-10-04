const projects = [
  ["LIVE AUDIO","Church Production","FOH mixing, monitor support, and show-day operation."],
  ["FULL PRODUCTION","Special Event","Audio, video, lighting, graphics, and technical coordination."],
  ["TEAM TRAINING","Production Team","Hands-on workflow training and production-system coaching."],
  ["CREATOR SUPPORT","Content Production","Audio and AV support for creators, recordings, and live streams."],
];

export default function PortfolioPage() {
  return <main className="page">
    <header className="pageHeader"><a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a><a href="/contact" className="secondaryButton">Start a project</a></header>
    <section className="pageHero"><p className="eyebrow">SELECTED WORK</p><h1>Production that works when the room goes live.</h1><p>A growing collection of the kinds of productions Echo Productions is built to support.</p></section>
    <section className="portfolioGrid">{projects.map(([type,title,description],i)=><article className="projectCard" key={title}><div className="projectVisual"><span>EP / 0{i+1}</span></div><p className="eyebrow">{type}</p><h2>{title}</h2><p>{description}</p></article>)}</section>
  </main>;
}