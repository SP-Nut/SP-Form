import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['400','500','600','700','800'],
  display: 'swap',
  variable: '--font-prompt'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sp-form-eosin.vercel.app'),
  title: "SP KANSARD | กันสาดคุณภาพ ส่วนลดสูงสุด 5% + ของแถมฟรี",
  description: "🔥 โปรโมชันพิเศษ! กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ: แฟลซซิ่ง เพลทกันสนิม ขาแขวน พร้อมส่วนลดรางน้ำอลูมิเนียม 50% จาก SP KANSARD ผู้เชี่ยวชาญติดตั้งกันสาด ทีมงานมืออาชีพ รับประกัน 5 ปี",
  keywords: [
    "กันสาด", "SP KANSARD", "โปรโมชัน", "ส่วนลด", "แฟลซซิ่ง", "เพลทกันสนิม", "ขาแขวน", "รางน้ำอลูมิเนียม",
    "ติดตั้งกันสาด", "กันสาดบ้าน", "กันสาดโรงจอดรถ", "ช่างกันสาด", "รับประกันกันสาด", "กันสาดราคาถูก",
    "กันสาดคุณภาพ", "SP", "KANSARD", "กันแสง", "กันฝน", "หลังคากันสาด", "โครงสร้างกันสาด"
  ],
  authors: [{ name: "SP KANSARD", url: "https://sp-form-eosin.vercel.app" }],
  creator: "SP KANSARD",
  publisher: "SP KANSARD",
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
  alternates: {
    canonical: 'https://sp-form-eosin.vercel.app',
    languages: {
      'th': 'https://sp-form-eosin.vercel.app',
    },
  },
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
    title: "🔥 SP KANSARD - รับโปรโมชันกันสาด",
    description: "⚡ กรอกฟอร์มตอนนี้ รับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ\n🎁 แฟลซซิ่งต่อผนัง • เพลทกันสนิม • ขาแขวน\n🔥 พิเศษ! รางน้ำอลูมิเนียม -50%",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SP KANSARD - โปรโมชันกันสาด"
      }
    ],
    type: "website",
    siteName: "SP KANSARD",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 SP KANSARD - รับโปรโมชันกันสาด",
    description: "⚡ กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 พิเศษ! รางน้ำอลูมิเนียม -50%",
    images: ["/logo.png"],
    creator: "@SP_KANSARD",
    site: "@SP_KANSARD",
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
  <html lang="th" className="overflow-x-hidden" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="canonical" href="https://sp-form-eosin.vercel.app/" />
        
        {/* Force light mode */}
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://vercel.live" />
        
        {/* Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#06b6ff" />
        
        {/* Force cache refresh with multiple meta variations */}
        <meta property="og:title" content="🔥 SP KANSARD - รับโปรโมชันกันสาด" />
        <meta property="og:description" content="⚡ กรอกฟอร์มตอนนี้ รับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 แฟลซซิ่งต่อผนัง • เพลทกันสนิม • ขาแขวน 🔥 พิเศษ! รางน้ำอลูมิเนียม -50%" />
        <meta property="og:image" content="https://sp-form-eosin.vercel.app/logo.png" />
        <meta property="og:image:secure_url" content="https://sp-form-eosin.vercel.app/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SP KANSARD โปรโมชันกันสาด" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SP KANSARD" />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:url" content="https://sp-form-eosin.vercel.app/" />
        <meta property="og:updated_time" content="2025-09-10T00:00:00Z" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🔥 SP KANSARD - รับโปรโมชันกันสาด" />
        <meta name="twitter:description" content="⚡ กรอกฟอร์มรับสิทธิ์ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ 🎁 พิเศษ! รางน้ำอลูมิเนียม -50%" />
        <meta name="twitter:image" content="https://sp-form-eosin.vercel.app/logo.png" />
        <meta name="twitter:site" content="@SP_KANSARD" />
        
        {/* Additional LINE-specific meta tags */}
        <meta name="description" content="🔥 SP KANSARD โปรโมชันพิเศษ! รับส่วนลด 5% + ของแถมฟรี 3 รายการ แฟลซซิ่ง เพลทกันสนิม ขาแขวน พร้อมรางน้ำอลูมิเนียม -50%" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Data - Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SP KANSARD",
            "description": "ผู้เชี่ยวชาญกันสาดคุณภาพ",
            "telephone": "084-909-7777",
            "url": "https://sp-form-eosin.vercel.app/",
            "logo": "https://sp-form-eosin.vercel.app/logo.png",
            "sameAs": [
              "https://www.facebook.com/spkansard/",
              "https://page.line.me/biv3563x"
            ],
            "priceRange": "฿฿",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }} />
        
        {/* Structured Data - Promotion */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "โปรโมชันกันสาดพิเศษ",
            "description": "ส่วนลดสูงสุด 5% + ของแถมฟรี 3 รายการ",
            "price": "0",
            "priceCurrency": "THB",
            "validFrom": "2025-01-01",
            "validThrough": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "offeredBy": {
              "@type": "Organization",
              "name": "SP KANSARD"
            }
          })
        }} />
      </head>
      <body
        className={`${prompt.className} ${prompt.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
