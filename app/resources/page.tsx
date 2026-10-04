import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Productions Resources | Live Production & AV Guides",
  description: "Practical resources for audio, video, lighting, networking, IT, and show-day operations.",
  alternates: { canonical: "/resources" },
};

const categories = [
  {
    type: "AUDIO",
    title: "Audio Engineering",
    description: "Practical guides for building, mixing, and troubleshooting live sound systems.",
    topics: ["Gain staging", "Signal flow", "EQ basics", "Compression", "Monitors", "RF microphones"],
  },
  {
    type: "VIDEO",
    title: "Video & Streaming",
    description: "Resources for cameras, switching, presentation systems, recording, and livestreams.",
    topics: ["Signal formats", "Switcher basics", "ProPresenter", "Streaming basics", "Camera setup", "Recording"],
  },
  {
    type: "LIGHTING",
    title: "Lighting",
    description: "Core concepts for programming and operating lighting systems for live events.",
    topics: ["DMX basics", "Fixtures", "Addressing", "Color", "Looks", "Show operation"],
  },
  {
    type: "NETWORKING",
    title: "Production Networking",
    description: "Understand the network concepts that keep modern production systems connected.",
    topics: ["IP addresses", "DHCP", "Static IPs", "Switches", "Dante", "Network troubleshooting"],
  },
  {
    type: "IT",
    title: "IT & Computers",
    description: "Troubleshooting help for computers, software, peripherals, storage, and production workstations.",
    topics: ["Windows", "Drivers", "USB devices", "Storage", "Performance", "Troubleshooting"],
  },
  {
    type: "SHOW DAY",
    title: "Show-Day Operations",
    description: "Simple checklists to help teams move from setup to soundcheck to showtime.",
    topics: ["Power", "Signal check", "Line check", "Soundcheck", "Playback", "Shutdown"],
  },
];

const quickGuides = [
  ["01", "Before Power-On", "Verify power, cable paths, equipment connections, and system order before turning everything on."],
  ["02", "No Signal?", "Start at the source and follow the signal path one connection at a time instead of changing everything at once."],
  ["03", "Bad Audio?", "Check gain, routing, EQ, dynamics, speakers, and physical connections in that order."],
  ["04", "Network Issue?", "Check link lights, cable connections, IP configuration, switch ports, and device status."],
];

export default function ResourcesPage() {
  return (
    <main className="page">
      <header className="pageHeader">
        <a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a>
        <a href="/help" className="secondaryButton">Open Echo Tech</a>
      </header>

      <section className="pageHero">
        <p className="eyebrow">PRODUCTION RESOURCES</p>
        <h1>Learn it. Build it. Run it.</h1>
        <p>
          A growing technical resource hub for production teams, churches,
          events, creators, and anyone learning live production or IT.
        </p>
      </section>

      <section className="section productionGallery">
        <div className="sectionTop">
          <div>
            <p className="eyebrow">PRODUCTION IN ACTION</p>
            <h2>Real systems. Real shows. Real-world production.</h2>
            <p className="heroText">
              A look at the kind of audio, video, lighting, and show-control
              environments these resources are built around.
            </p>
          </div>
        </div>

        <figure className="productionPhoto">
          <img
            src="/photos/IMG_2050.jpeg"
            alt="Echo Productions production environment showing an audio console and live production control setup"
          />
          <figcaption>
            Audio engineering, video control, live production, and lighting — all working together on show day.
          </figcaption>
        </figure>
      </section>

      <section className="section" style={{ paddingTop: 70 }}>
        <div className="sectionTop">
          <div>
            <p className="eyebrow">RESOURCE LIBRARY</p>
            <h2>Find what you need.</h2>
          </div>
        </div>

        <div className="resourceGrid">
          {categories.map((category) => (
            <article className="resourceCard" key={category.title}>
              <p className="eyebrow">{category.type}</p>
              <div className="resourceNumber">RESOURCE</div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <ul className="resourceTopics">
                {category.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
              <span className="resourceStatus">GUIDES EXPANDING →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">QUICK REFERENCES</p>
        <h2>Useful when you're already in the middle of a show.</h2>
        <div className="quickGuideGrid">
          {quickGuides.map(([number, title, text]) => (
            <article className="quickGuide" key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section resourceFeature">
        <div>
          <p className="eyebrow">TECHNICAL ASSISTANCE</p>
          <h2>Stuck on a production or IT problem?</h2>
          <p className="heroText">
            Echo Tech can walk through troubleshooting, setup, configuration,
            software, hardware, networking, and programming questions.
          </p>
          <div className="actions">
            <a href="/help" className="primaryButton">Ask Echo Tech →</a>
          </div>
        </div>

        <div className="featurePanel">
          <div className="featurePanelTop">
            <span>ECHO TECH</span>
            <span>PRODUCTION + IT</span>
          </div>
          <div className="featurePrompt">How do I troubleshoot a dead audio channel?</div>
          <div className="featureReply">
            Start at the source and work forward through the signal path.
            Check the source, cable, input, preamp, routing, processing,
            output, and destination one step at a time.
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">RESOURCE ROADMAP</p>
        <h2>More guides are coming.</h2>
        <p className="heroText">
          The library will continue growing with step-by-step setup guides,
          troubleshooting workflows, system diagrams, checklists, and
          production references.
        </p>
      </section>
    </main>
  );
}
