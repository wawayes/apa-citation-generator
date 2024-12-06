import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APA Citation Generator',
  description: 'Professional APA citation generator supporting APA 7th edition',
  keywords: 'APA, citation, generator, reference, academic, research',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MP8Y01G06R"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MP8Y01G06R');
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
