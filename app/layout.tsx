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
  metadataBase: new URL('https://sp-form.vercel.app'),
  title: "SP KANSARD - แบบฟอร์มรับโปรโมชัน | กันสาดรถยนต์ ส่วนลดสูงสุด 5%",
  description: "กรอกแบบฟอร์มรับโปรโมชันพิเศษ SP KANSARD กันสาดรถยนต์คุณภาพ รับฟรีแฟลซซิ่ง เพลทกันสนิม ขาแขวน และส่วนลดสูงสุด 5% สำหรับงานติดตั้ง",
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
    title: "SP KANSARD - รับโปรโมชันกันสาดรถยนต์",
    description: "กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% พร้อมของแถมฟรี 3 รายการ",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SP KANSARD - รับโปรโมชันกันสาดรถยนต์",
    description: "กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% พร้อมของแถมฟรี 3 รายการ",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
