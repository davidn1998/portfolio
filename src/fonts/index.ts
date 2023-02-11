import { NextFontWithVariable } from "@next/font";
import { JetBrains_Mono, Source_Sans_Pro, Yellowtail } from "@next/font/google";

export const sourceSansPro: NextFontWithVariable = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  display: "swap",
});

export const jetbrainsMono: NextFontWithVariable = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const yellowtail: NextFontWithVariable = Yellowtail({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-yellowtail",
  display: "swap",
});
