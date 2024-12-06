import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'APA Citation Generator',
  description: 'Generate accurate APA citations instantly. Supporting both APA 6th and 7th editions.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'APA, citation, generator, reference, academic, research',
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
