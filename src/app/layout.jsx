import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { seoConfig, getCanonicalUrl } from "@/data/seoConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: seoConfig.home.title,
    template: "%s | Indo Global Group of Colleges",
  },
  description: seoConfig.home.description,
  keywords: [
    "engineering college",
    "architecture college",
    "MBA college",
    "technical education",
    "Chandigarh",
    "Punjab",
    "Indo Global",
    "IGEF",
  ],
  authors: [{ name: "Indo Global Group of Colleges" }],
  creator: "Indo Global Group of Colleges",
  publisher: "Indo Global Group of Colleges",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.igef.net"),
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getCanonicalUrl("/"),
    siteName: "Indo Global Group of Colleges",
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indo Global Group of Colleges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    images: ["/assets/og-image.jpg"],
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
