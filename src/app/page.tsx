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

          {/* Features Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Citation Support</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>APA 7th Edition (Latest 2024 Update)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Multiple Export Formats (BibTeX, RIS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Save & Manage Citations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Source Types</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">📚</span>
                    <span>Books & E-books</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📰</span>
                    <span>Journal Articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🌐</span>
                    <span>Websites & Online Resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* About APA Format */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About APA Format</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                The American Psychological Association (APA) citation style is widely used in social sciences, 
                education, and other fields. Our generator helps you create accurate citations following the 
                latest APA guidelines.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Why Choose APA Style?</h3>
              <ul className="space-y-3">
                <li>Widely accepted in academic institutions</li>
                <li>Clear and consistent citation format</li>
                <li>Updated regularly to handle new media types</li>
                <li>Supports academic integrity</li>
              </ul>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-4">1️⃣</div>
                <h3 className="font-semibold mb-2">Select Source Type</h3>
                <p className="text-gray-600">Choose from various source types</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-4">2️⃣</div>
                <h3 className="font-semibold mb-2">Enter Details</h3>
                <p className="text-gray-600">Fill in the source information</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-4">3️⃣</div>
                <h3 className="font-semibold mb-2">Get Citation</h3>
                <p className="text-gray-600">Copy or save your citation</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}