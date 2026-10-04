import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Echo Productions | Live Production & AV",
    template: "%s | Echo Productions",
  },
  description:
    "Echo Productions provides live audio, video, lighting, streaming, and technical production support for churches, events, and creators.",
  keywords: [
    "Echo Productions",
    "live production",
    "AV",
    "audio engineering",
    "church production",
    "event production",
    "live audio",
    "video production",
    "lighting",
    "streaming",
  ],
  openGraph: {
    title: "Echo Productions | Live Production & AV",
    description:
      "Reliable live audio, video, lighting, streaming, and production support.",
    type: "website",
    siteName: "Echo Productions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}