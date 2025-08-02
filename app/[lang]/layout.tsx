import "@radix-ui/themes/styles.css"
import "@/styles/globals.css"
import "@/styles/gui.css"
// import "react-multi-carousel/lib/styles.css";

import { ViewTransitions } from "next-view-transitions"
import { hasLocale, NextIntlClientProvider } from "next-intl"

import { Providers } from "./providers"
import { Metadata } from "next"
// import { boing_bold, graphik_regular, ambit_bold, ambit_black } from "./fonts"
// import BackgroundSVG from "./components/svg_background"
// import Header from "./components/header"
// import { Flex } from "@radix-ui/themes"
import { boing_bold, roboto_regular, avenir_bold, avenir_black } from "./fonts"
import PageHolder from "./components/pageholder"
// import { auth } from "@/auth";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Kelvin Obodai",
  description: "Kelvin Obodai",
  icons: ["favicon.ico"],
  keywords: ["Kelvin Obodai, SMS, USSD"],
};

const languages = {
  ar: require('../../messages/ar.json'),
  de: require('../../messages/de.json'),
  en: require('../../messages/en.json'),
  es: require('../../messages/es.json'),
  fr: require('../../messages/fr.json'),
  hi: require('../../messages/hi.json'),
  pt: require('../../messages/pt.json'),
  ru: require('../../messages/ru.json'),
  zh: require('../../messages/zh.json')
}

export default async function RootLayout({ children, params }:  {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // const session = await auth();
  const {locale} = await params

  return (
    <ViewTransitions>
      <html  lang={locale}  className={`${boing_bold.variable} ${roboto_regular.variable} ${avenir_bold.variable} ${avenir_black.variable}`}  style={{ height: "100%" }}>
        <head>
          <meta name="application-name" content="Kelvin Obodai" />
          <meta name="theme-color" content="#1e1e2d" />
          <link rel="icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body style={{ padding: 0, margin: 0 }}>
          <NextIntlClientProvider>
            <Providers>
              <PageHolder>
                  {children}
                </PageHolder>
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
