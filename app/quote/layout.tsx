import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | ECHO Productions Live Production & AV",
  description: "Tell ECHO Productions about your event, technical needs, date, and location to request a production quote.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
