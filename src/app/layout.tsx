import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Second Brain - Your Personal Knowledge Hub | Organize, Store & Share Content",
  description: "Transform scattered information into actionable insights with Second Brain. Organize your YouTube videos, tweets, and links in one powerful dashboard. Features secure sharing, smart categorization, and dark mode support.",
  keywords: [
    "second brain",
    "knowledge management",
    "content organization",
    "personal knowledge hub",
    "information storage",
    "content management",
    "productivity tools",
    "note taking",
    "digital brain",
    "knowledge base"
  ],
  authors: [{ name: "Kishan Singh Thakur" }],
  creator: "Kishan Singh Thakur",
  publisher: "Second Brain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brainly.secondbrain.sbs'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Second Brain - Your Personal Knowledge Hub",
    description: "Organize, store and share your YouTube videos, tweets, and links in one dashboard. Transform scattered information into actionable insights.",
    url: 'https://brainly.secondbrain.sbs', // Replace with your actual domain
    siteName: 'Second Brain',
    images: [
      {
        url: '/brain.png', // Using your existing brain.png
        width: 1200,
        height: 630,
        alt: 'Second Brain - Personal Knowledge Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Second Brain - Your Personal Knowledge Hub",
    description: "Organize, store and share your content in one powerful dashboard. Transform scattered information into actionable insights.",
    images: ['/brain.png'], 
    creator: '@KishanS36200218', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://brainly.secondbrain.sbs" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Second Brain",
              "description": "Your Personal Knowledge Hub - Organize, store and share your content in one dashboard",
              "url": "https://brainly.secondbrain.sbs",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web",
              "author": {
                "@type": "Person",
                "name": "Kishan Singh Thakur"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}