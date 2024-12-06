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
  icons: '/favicon.ico',
  alternates: {
    canonical: 'https://apa-citation.com',
  },
  metadataBase: new URL('https://apa-citation.com'),
  openGraph: {
    title: 'Instant APA Citation Generator for 6th & 7th Editions',
    description: 'Effortlessly generate correct APA citations with our tool. Supports APA 6th & 7th editions for various source types. Start citing accurately!',
    url: 'https://apa-citation.com',
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
