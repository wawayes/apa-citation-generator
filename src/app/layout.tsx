import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APA Citation Generator | Free Academic Citation Tool',
  description: 'Free APA citation generator for academic papers. Support APA 6th & 7th editions, multiple citation formats including books, journals, websites and more.',
  keywords: 'citation generator, APA format, academic writing, reference management, bibliography tool, APA 7th edition, APA 6th edition',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'APA Citation Generator | Free Academic Citation Tool',
    description: 'Generate accurate APA citations instantly. Support for books, journals, websites and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APA Citation Generator',
    description: 'Free APA citation generator for academic papers',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
