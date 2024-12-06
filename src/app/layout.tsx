import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Instant APA Citation Generator for 6th & 7th Editions',
  description: 'Effortlessly generate correct APA citations with our tool. Supports APA 6th & 7th editions for various source types. Start citing accurately!',
  keywords: 'APA, citation, generator, reference, academic, research',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://apa.citation.com',
  },
  metadataBase: new URL('https://apa.citation.com'),
  openGraph: {
    title: 'Instant APA Citation Generator for 6th & 7th Editions',
    description: 'Effortlessly generate correct APA citations with our tool. Supports APA 6th & 7th editions for various source types. Start citing accurately!',
    url: 'https://apa.citation.com',
    siteName: 'APA Citation Generator',
    locale: 'en_US',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MP8Y01G06R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MP8Y01G06R');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
