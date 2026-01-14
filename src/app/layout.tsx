import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const articulat = localFont({
  src: [
    {
      path: "./fonts/articulat/ArticulatCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/articulat/ArticulatCF-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/articulat/ArticulatCF-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-articulat",
  display: "swap",
});

const arial = localFont({
  src: [
    {
      path: "./fonts/arial.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-arial",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabon FinTech Hub",
    template: "%s | Gabon FinTech Hub",
  },

  description:
    "Gabon FinTech Hub est une association dédiée au développement de l’écosystème FinTech au Gabon. Nous accompagnons startups, entrepreneurs et institutions dans l’innovation financière, la transformation digitale et le développement économique en Afrique Centrale.",

  applicationName: "Gabon FinTech Hub",

  authors: [
    {
      name: "Gabon FinTech Hub",
      url: "https://gabonfintechhub.org",
    },
  ],

  generator: "Next.js",
  keywords: [
    "Gabon FinTech",
    "FinTech Gabon",
    "Innovation financière",
    "Transformation digitale",
    "Afrique Centrale",
    "Startups Gabon",
    "Technologie financière",
    "Cryptomonnaies réglementées",
    "Stablecoins",
    "Éducation financière",
  ],

  metadataBase: new URL("https://gabonfintechhub.org"),

  openGraph: {
    title: "Gabon FinTech Hub",
    description:
      "Association dédiée à la structuration et au développement de l’écosystème FinTech au Gabon et en Afrique Centrale.",
    url: "https://gabonfintechhub.org",
    siteName: "Gabon FinTech Hub",
    locale: "fr_GA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabon FinTech Hub – Innovation financière au Gabon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gabon FinTech Hub",
    description:
      "Construire un hub régional d'innovation FinTech en Afrique Centrale.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${articulat.variable} ${roboto.variable} ${arial.variable}antialiased leading-7`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
