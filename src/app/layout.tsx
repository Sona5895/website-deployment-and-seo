import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import LeftDrawer from "@/components/LeftDrawer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevTestHubKasora - Proqramçı & Tester Platforması | CV, Portfolio, İş və Mesajlar",
  description: "DevTestHubKasora: normal işləyən professional platforma. Müasir CV builder, portfolio, mesaj və zəng, bildirişlər, iş təklifləri, profil postları və xarici platforma elan axtarışı.",
  keywords: [
    "proqramçı tester platforma",
    "iş elanları Azərbaycan",
    "tester iş axtarış",
    "CV şablonları pulsuz",
    "proqramçı iş elanları",
    "freelance işlər",
    "QA engineer",
    "software testing"
  ],
  authors: [{ name: "DevTestHubKasora" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevTestHubKasora - Proqramçı & Tester Platforması",
    description: "CV builder, portfolio, iş elanları, mesaj və zəng, bildirişlər, sosial bağlantılar və kəşf bölməsi.",
    type: "website",
    locale: "az_AZ",
    siteName: "DevTestHubKasora",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "DevTestHubKasora - Proqramçı & Tester Platforması",
    description: "CV builder, portfolio, iş elanları, mesaj və zəng, bildirişlər, sosial bağlantılar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Providers>
          <LeftDrawer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
