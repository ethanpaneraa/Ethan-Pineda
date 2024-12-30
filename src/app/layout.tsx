import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexxel.dev"),
  title: {
    default: "Ethan Pineda",
    template: "%s | Ethan Pineda",
  },
  description: "Software Engineer, BA/MS @ Northwestern University.",
  openGraph: {
    title: "Ethan Pineda",
    description: "Software Engineer, BA/MS @ Northwestern University.",
    url: "https://www.nexxel.dev",
    siteName: "Ethan Pineda",
    locale: "en_US",
    type: "website",
    images: ["https://www.nexxel.dev/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Ethan Pineda",
    card: "summary_large_image",
    creator: "@ethanpaneraa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased font-mono min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
