import type { Metadata } from "next";
import "./globals.css";
import "../../public/fonts/Morabba_Eco/webfont/fontiran.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Make a Wish",
  description: "Omens",
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    "images": "https://omen-seven.vercel.app/thumbnail.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
