import GoogleAnalytics from '@/components/GoogleAnalytics';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APA Citation Generator',
  description: 'Professional APA citation generator supporting APA 7th edition',
  keywords: 'APA, citation, generator, reference, academic, research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
