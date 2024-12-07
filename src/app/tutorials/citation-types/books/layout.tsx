import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Citations | APA Citation Guide',
  description: 'Learn how to cite different types of books in APA format.',
};

interface BooksLayoutProps {
  children: React.ReactNode;
}

export default function BooksLayout({ children }: BooksLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        {children}
      </div>
    </main>
  );
} 