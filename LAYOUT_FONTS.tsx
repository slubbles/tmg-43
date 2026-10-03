/* LAYOUT_FONTS.tsx — copy the imports into app/layout.tsx.
   Apply display.variable + body.variable on <html>. Delete Geist. */
import { Instrument_Serif, Instrument_Sans } from "next/font/google";

const display = Instrument_Serif({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
export { display, body };
