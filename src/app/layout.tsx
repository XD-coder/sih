import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SIH Toofani Hackathon | Smart Tourism Safety Platform",
  description: "A real-world platform for safe, smart, and connected travel. Emergency help, lost ID, health, and network solutions for tourists.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SIH Toofani Hackathon | Smart Tourism Safety Platform",
    description: "A real-world platform for safe, smart, and connected travel. Emergency help, lost ID, health, and network solutions for tourists.",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "SIH Smart Tourism Safety Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIH Toofani Hackathon | Smart Tourism Safety Platform",
    description: "A real-world platform for safe, smart, and connected travel. Emergency help, lost ID, health, and network solutions for tourists.",
    images: ["/globe.svg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
