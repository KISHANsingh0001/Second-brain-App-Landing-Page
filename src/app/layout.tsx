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
  metadataBase: new URL('https://brain.secondbrain.sbs'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Second Brain - Your Personal Knowledge Hub",
    description: "Organize, store and share your YouTube videos, tweets, and links in one dashboard. Transform scattered information into actionable insights.",
    url: 'https://brain.secondbrain.sbs',
    siteName: 'Second Brain',
    images: [
      {
        url: '/android-chrome-512x512.png', // Using the generated icon
        width: 512,
        height: 512,
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
    images: ['/android-chrome-512x512.png'], 
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
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        {/* Favicon links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://brain.secondbrain.sbs" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Second Brain",
              "description": "Your Personal Knowledge Hub - Organize, store and share your content in one dashboard",
              "url": "https://brain.secondbrain.sbs",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    }, function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
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