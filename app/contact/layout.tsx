import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ECHO Productions | Production Support & Questions",
  description: "Contact ECHO Productions about live production, AV support, technical questions, training, or an upcoming project.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
