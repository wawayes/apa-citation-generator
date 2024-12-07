import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APA Reference List Guide | APA Citation Generator',
  description: 'Learn how to create and format your reference list in APA style. Comprehensive guide for organizing references, with examples and formatting guidelines.',
  keywords: 'APA reference list, bibliography, reference page, citation format, academic writing, DOI format',
};

interface ReferenceListLayoutProps {
  children: React.ReactNode;
}

export default function ReferenceListLayout({
  children,
}: ReferenceListLayoutProps) {
  return <div className="reference-list-layout">{children}</div>;
} 