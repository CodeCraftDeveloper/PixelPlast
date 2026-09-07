import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import { MotionProvider } from "@/components/motion/MotionProvider";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1740",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pixelplast | Plastic Injection Moulding, Tote Bins & Spools",
    template: "%s | Pixelplast",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: {
      url: "/assets/pixelplast.png?v=20260827",
      type: "image/png",
    },
    shortcut: "/assets/pixelplast.png?v=20260827",
  },
  description:
    "Plastic injection-moulded tote bins, plastic spools, and custom OEM parts from Pixel Technoplast Private Limited.",
  verification: {
    google: "i7r6zZojqoOWZU-tUKU9CTTTWq-PllTikFnORIzKoSc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-07TED1H9BW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07TED1H9BW');
          `}
        </Script>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
