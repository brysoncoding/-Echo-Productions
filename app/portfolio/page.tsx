const projects=[
  ["LIVE AUDIO","Church Production","FOH mixing, monitor support, stage support, and show-day operation.","/photos/IMG_1937.jpeg","Live audio console and production workspace"],
  ["FULL PRODUCTION","Special Event","Audio, video, lighting, graphics, and technical coordination.","/photos/IMG_2136.jpeg","Live event stage and production systems"],
  ["TEAM TRAINING","Production Team","Hands-on workflow training and production-system coaching.","/photos/IMG_1947.jpeg","Live video control room and production systems"],
  ["CREATOR SUPPORT","Content Production","Audio, AV, recording, and live-stream support for creators.","/photos/IMG_1955.jpeg","Live stage lighting and production systems"]
];

export default function PortfolioPage(){
  return <main className="page">
    <header className="pageHeader">
      <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
      <a href="/quote" className="secondaryButton">Start a project</a>
    </header>
    <section className="pageHero">
      <p className="eyebrow">SELECTED WORK</p>
      <h1>What Echo Productions is built to support.</h1>
      <p>Real production environments, technical systems, and the work happening behind the show.</p>
    </section>
    <section className="portfolioGrid">
      {projects.map(([type,title,description,image,alt],i)=>
        <article className="projectCard" key={title}>
          <div className="projectVisual" style={{ position: "relative", overflow: "hidden" }}>
            <img src={image} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span style={{ position: "absolute", left: 16, bottom: 12, zIndex: 1 }}>EP / 0{i+1}</span>
          </div>
          <p className="eyebrow">{type}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="/quote" className="textLink">Discuss a similar project →</a>
        </article>
      )}
    </section>
  </main>
}