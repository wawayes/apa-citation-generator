import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APA In-text Citations Guide | APA Citation Generator',
  description: 'Learn how to properly use in-text citations in APA format. Comprehensive guide for parenthetical and narrative citations, with examples for different source types.',
  keywords: 'APA in-text citations, parenthetical citations, narrative citations, citation guide, academic writing',
};

interface InTextCitationLayoutProps {
  children: React.ReactNode;
}

export default function InTextCitationLayout({
  children,
}: InTextCitationLayoutProps) {
  return <div className="in-text-citation-layout">{children}</div>;
} 