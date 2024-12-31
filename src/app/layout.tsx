import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethan-pineda.vercel.app"),
  title: {
    default: "ethan pineda",
    template: "%s | ethan pineda",
  },
  description: "Software Engineer, BA/MS @ Northwestern University.",
  openGraph: {
    title: "ethan pineda",
    description: "Software Engineer, BA/MS @ Northwestern University.",
    url: "https://ethan-pineda.vercel.app",
    siteName: "ethan pineda",
    locale: "en_US",
    type: "website",
    images: ["https://ethan-pineda.vercel.app"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "ethan pineda",
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
