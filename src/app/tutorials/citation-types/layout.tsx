import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APA Citation Types | APA Citation Generator',
  description: 'Learn how to cite different types of sources in APA format, including books, journals, websites, and more.',
  keywords: 'APA citation types, book citation, journal citation, website citation',
};

interface CitationTypesLayoutProps {
  children: React.ReactNode;
}

export default function CitationTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="citation-types-layout">{children}</div>;
} 