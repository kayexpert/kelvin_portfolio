import { Inter, Roboto_Mono } from "next/font/google"
import localFont from "next/font/local"

export const boing_bold = localFont({
  src: "../../public/fonts/boing_bold.ttf",
  variable: "--boing_bold",
});
export const roboto_regular = localFont({
  src: "../../public/fonts/roboto_regular.ttf",
  variable: "--roboto_regular",
});
export const avenir_black = localFont({
  src: "../../public/fonts/avenir_black.otf",
  variable: "--avenir_black",
});

export const avenir_bold = localFont({
  src: "../../public/fonts/avenir_bold.otf",
  variable: "--avenir_bold",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
