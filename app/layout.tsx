import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL('https://sp-form-eosin.vercel.app'),
  title: "SP KANSARD - แบบฟอร์มรับโปรโมชัน | กันสาดรถยนต์ ส่วนลดสูงสุด 5%",
  description: "🔥 โปรโมชันพิเศษ! กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ: แฟลซซิ่ง, เพลทกันสนิม, ขาแขวน พร้อมส่วนลดรางน้ำอลูมิเนียม 50% จาก SP KANSARD ผู้เชี่ยวชาญกันสาดรถยนต์",
  keywords: ["กันสาดรถยนต์", "SP KANSARD", "โปรโมชัน", "ส่วนลด", "แฟลซซิ่ง", "เพลทกันสนิม", "ขาแขวน", "รางน้ำอลูมิเนียม"],
  authors: [{ name: "SP KANSARD" }],
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png', 
        sizes: '32x32',
        url: '/icon-32x32.png',
      }
    ]
  },
  openGraph: {
    title: "🔥 SP KANSARD - รับโปรโมชันกันสาดรถยนต์",
    description: "⚡ กรอกฟอร์มตอนนี้ รับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ\n🎁 แฟลซซิ่งต่อผนัง • เพลทกันสนิม • ขาแขวน\n🔥 พิเศษ! รางน้ำอลูมิเนียม -50%",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SP KANSARD - โปรโมชันกันสาดรถยนต์"
      }
    ],
    type: "website",
    siteName: "SP KANSARD",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 SP KANSARD - รับโปรโมชันกันสาดรถยนต์",
    description: "⚡ กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 พิเศษ! รางน้ำอลูมิเนียม -50%",
    images: ["/logo.png"],
    creator: "@SP_KANSARD",
    site: "@SP_KANSARD",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'fb:app_id': 'SP-KANSARD-FORM',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6ff" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="🔥 SP KANSARD - รับโปรโมชันกันสาดรถยนต์" />
        <meta property="og:description" content="⚡ กรอกฟอร์มตอนนี้ รับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 แฟลซซิ่งต่อผนัง • เพลทกันสนิม • ขาแขวน 🔥 พิเศษ! รางน้ำอลูมิเนียม -50%" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SP KANSARD" />
        <meta property="og:locale" content="th_TH" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🔥 SP KANSARD - รับโปรโมชันกันสาดรถยนต์" />
        <meta name="twitter:description" content="⚡ กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 พิเศษ! รางน้ำอลูมิเนียม -50%" />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
