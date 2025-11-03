import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LetsGrowPro - Professional Growth Services",
  description: "Transform your business with our comprehensive digital marketing, brand strategy, and growth consulting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
