import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Files Le Coach",
  description: "Coach sportif IA 24/7",
  themeColor: "#16a34a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
