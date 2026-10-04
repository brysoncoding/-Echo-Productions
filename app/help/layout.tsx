import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echo Tech Assist | ECHO Productions Production & IT Help",
  description: "Get step-by-step help with live audio, AV, video, lighting, streaming, networking, computers, and production IT.",
  alternates: { canonical: "/help" },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
