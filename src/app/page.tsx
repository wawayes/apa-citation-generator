"use client";

import APAGuide from '@/components/APAGuide';
import CitationForm from '@/components/CitationForm';
import HomeIntro from '@/components/HomeIntro';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header area with enhanced styling */}
        <header className="text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient">
            APA Citation Generator
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Generate accurate APA citations instantly. Supporting both APA 6th and 7th editions.
          </p>
          {/* Add Tutorial Link */}
          <Link 
            href="/tutorials"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <span className="mr-2">📚</span>
            View APA Tutorials
          </Link>
        </header>

        {isClient && (
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Citation Generator Section */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-indigo-100/50">
              <CitationForm onSave={(citation) => {
                console.log('Citation saved:', citation);
              }} />
            </section>

            {/* Quick Links to Tutorials */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-indigo-100/50">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8">Learn APA Format</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/tutorials/apa-basics"
                  className="block p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">APA Format Basics →</h3>
                  <p className="text-gray-600">Learn the fundamental rules and principles</p>
                </Link>
                <Link 
                  href="/tutorials/citation-types"
                  className="block p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">Citation Types →</h3>
                  <p className="text-gray-600">How to cite different source types</p>
                </Link>
              </div>
            </section>

            {/* APA Guide Section */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-indigo-100/50">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-4 border-indigo-100">APA Style Guide</h2>
              <div className="prose max-w-none prose-indigo">
                <APAGuide />
              </div>
            </section>

            {/* About Section */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-indigo-100/50 mb-16">
              <div className="prose max-w-none prose-indigo">
                <HomeIntro />
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}