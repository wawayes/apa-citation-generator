import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'APA Citation Generator',
  description: 'Generate accurate APA citations easily',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  keywords: 'APA, citation, generator, reference, academic, research',
  openGraph: {
    title: 'APA Citation Generator',
    description: 'Generate accurate APA citations easily',
    url: 'https://apa-citation.com',
    siteName: 'APA Citation Generator',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
