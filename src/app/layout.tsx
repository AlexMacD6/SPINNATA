import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPIN-ÑATA — Make your party unforgettable",
  description:
    "A new twist on the classic piñata. Spin it. Unwrap it. Candy everywhere. Join the waitlist.",
  keywords: ["piñata", "party", "candy", "spin", "Houston", "celebration"],
  authors: [{ name: "SPIN-ÑATA" }],
  creator: "SPIN-ÑATA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spinnata.com",
    title: "SPIN-ÑATA — Make your party unforgettable",
    description:
      "A new twist on the classic piñata. Spin it. Unwrap it. Candy everywhere. Join the waitlist.",
    siteName: "SPIN-ÑATA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPIN-ÑATA - The next generation piñata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPIN-ÑATA — Make your party unforgettable",
    description:
      "A new twist on the classic piñata. Spin it. Unwrap it. Candy everywhere.",
    images: ["/og-image.jpg"],
    creator: "@spinnata",
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
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎃</text></svg>",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
