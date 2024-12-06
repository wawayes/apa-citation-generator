"use client";

import APAGuide from '@/components/APAGuide';
import CitationForm from '@/components/CitationForm';
import HomeIntro from '@/components/HomeIntro';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header area */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            APA Citation Generator
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Generate accurate APA citations instantly. Supporting both APA 6th and 7th editions.
          </p>
        </header>

        {isClient && (
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Citation Generator Section */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <CitationForm onSave={(citation) => {
                console.log('Citation saved:', citation);
              }} />
            </section>

            {/* APA Guide Section */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8">APA Style Guide</h2>
              <div className="prose max-w-none">
                <APAGuide />
              </div>
            </section>

            {/* About Section */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="prose max-w-none">
                <HomeIntro />
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}