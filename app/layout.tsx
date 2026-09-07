import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";

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
    default: "Pixelplast | Plastic Injection Moulding Company in India",
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
    "Plastic Injection Moulding Manufacturer in India — heavy duty plastic tote bins, injection moulded plastic crates, industrial plastic pallets, precision plastic spools, and custom OEM plastic components from Pixel Technoplast Private Limited.",
  verification: {
    google: "i7r6zZojqoOWZU-tUKU9CTTTWq-PllTikFnORIzKoSc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <GoogleTagManager gtmId="GTM-M3MSSKQQ" />
      </head>
      <body className="antialiased font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3MSSKQQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleAnalytics gaId="G-07TED1H9BW" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
