import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Productions FAQ | Live Production & Technical Support",
  description: "Answers to common questions about ECHO Productions services, church production, training, event support, and Echo Tech.",
  alternates: { canonical: "/faq" },
};

const faqs=[["What does Echo Productions do?","Echo Productions provides live audio, video, lighting, streaming, technical operations, and production support."],["Can I hire Echo for only audio?","Yes. Services can be booked individually or combined into a larger production package."],["Do you work with churches?","Yes. Church services, student events, special services, and production-team support are core use cases."],["Can Echo help train our production team?","Yes. Training can focus on audio, video, lighting, workflows, troubleshooting, and team operations."],["What is Echo Tech Assist?","It is a built-in technical-help feature for production and IT questions. It is one feature of the Echo Productions site, not the entire site."],["Can I request a custom production package?","Absolutely. Use the quote form and describe the event, date, location, and technical needs."]];

export default function FAQ(){return <main className="page"><header className="pageHeader"><a href="/" className="brand">ECHO<span>PRODUCTIONS</span></a><a href="/quote" className="secondaryButton">Request a quote</a></header><section className="pageHero"><p className="eyebrow">FAQ</p><h1>Questions before the production starts?</h1><p>Here are some of the common questions about working with Echo Productions.</p></section><section className="faqList">{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></main>}