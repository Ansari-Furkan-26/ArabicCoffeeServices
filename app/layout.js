import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"Rukn Al Dyafa | Arabic Coffee Service | ركن الضيافة ",
    template: "%s - Rukn Al Dyafa"
  },
  description: "ركن الضيافة - Discover premium Arabic coffee service in the UAE. We specialize in luxurious beverage catering for weddings, corporate events, and private gatherings. خدمة القهوة العربية.",
  openGraph: {
    title: "Rukn Al Dyafa | Hospitality Services",
    description: "Experience the finest Arabic coffee and exceptional hospitality services for your special events in the UAE. Tailored beverage catering for weddings, corporate events, and private gatherings.",
    url: "https://www.ruknaldyafa.ae/",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",  // Add an appropriate image URL
        width: 800,
        height: 600,
        alt: "Arabic Coffee Service in the UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rukn Al Dyafa | Premium Arabic Coffee & Hospitality Services",
    description: "Luxury Arabic coffee and hospitality services in the UAE for weddings, corporate events, and private gatherings.",
    image: "/opengraph-image.png",  // Add an appropriate image URL
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* Animate.css CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* Google Analytics script */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-YWDFCK5NPF`} // Replace with your GA4 ID
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'YOUR_MEASUREMENT_ID'); // Replace with your GA4 ID
              `,
            }}
          ></script>
        <link rel="icon" href="/favicon.ico" />
        {/* You can also add other meta tags or stylesheets here */}
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
