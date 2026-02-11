import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Manthan Mittal | AI & Robotics Engineer",
  description:
    "Portfolio of Manthan Mittal — AI & Robotics Engineer focused on scalable ML systems, robotics simulation, and full-stack execution.",
  openGraph: {
    title: "Manthan Mittal | AI & Robotics Engineer",
    description:
      "Building intelligent machines and immersive digital experiences.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Mittal | AI & Robotics Engineer",
    description:
      "Building intelligent machines and immersive digital experiences."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#home">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
