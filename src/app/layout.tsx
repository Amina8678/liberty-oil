import type { Metadata } from "next";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liberty Health Ltd — Event Extra Virgin Olive Oil",
  description:
    "Liberty Health Ltd, trading as Event, produces premium cold-pressed Extra Virgin Olive Oil from the Aegean coast of Turkey. UK-based, family-founded, solar-powered production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
