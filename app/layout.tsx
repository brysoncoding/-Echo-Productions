import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echo Productions | Live Production & AV",
  description:
    "Echo Productions provides live audio, video, lighting, and production support for churches, events, and creators.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}