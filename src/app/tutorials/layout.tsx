import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APA Citation Tutorials | APA Citation Generator',
  description: 'Comprehensive APA citation tutorials, including citation methods for different types of resources, format specifications, and examples.',
  keywords: 'APA tutorial, citation format, academic writing, references',
};

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {children}
    </div>
  );
} 