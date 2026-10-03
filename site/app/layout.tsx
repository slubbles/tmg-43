import type { ReactNode } from "react";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://tmg.agency"),
  title: {
    default: "Thela Media Group - Advertising Strategy, Media & Measurement",
    template: "%s | TMG",
  },
  description:
    "Advertising systems connected by intelligence infrastructure. TMG combines strategy, creative, media buying, analytics, automation, and intelligence backbones to help brands spend smarter and grow with confidence.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        {/* Genesis build feedback widget (job 43) — posts to the status site, not UserBack */}
        <script src="https://genesis-web-woad.vercel.app/genesis-feedback.js" data-job="43" defer></script>
      </body>
    </html>
  );
}
