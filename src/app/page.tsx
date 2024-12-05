"use client";

import CitationForm from '@/components/CitationForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Main Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              APA Citation Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate accurate APA citations instantly. Supporting both APA 6th and 7th editions.
            </p>
          </div>

          {/* Citation Generator */}
          <CitationForm onSave={() => {}} />
        </div>
      </div>
    </main>
  );
}