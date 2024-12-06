"use client";

import type { FC } from 'react';

const HomeIntro: FC = () => (
  <div className="space-y-12">
    <section className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Tool</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A professional-grade APA citation generator designed for students, researchers, and academics. 
        Generate accurate citations in seconds while following the latest APA 7th edition guidelines.
      </p>
    </section>

    <section className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-6">
        <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
          <span className="text-2xl mr-2">🎯</span>
          Core Features
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✓</span>
            Supports multiple reference types (Books, Journals, Websites)
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✓</span>
            Real-time citation preview
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✓</span>
            Save and manage citations
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✓</span>
            Export in multiple formats (BibTeX, RIS, Plain Text)
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-6">
        <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
          <span className="text-2xl mr-2">🚀</span>
          Coming Soon
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">◯</span>
            DOI auto-fetch and validation
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">◯</span>
            Citation groups and projects
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">◯</span>
            Bibliography formatting
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">◯</span>
            Cloud sync and sharing
          </li>
        </ul>
      </div>
    </section>

    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">How to Use</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-4">1️⃣</div>
          <h4 className="font-semibold text-lg mb-2">Create Citation</h4>
          <p className="text-gray-600">
            Select your source type and fill in the required fields. Our form will guide you through the process.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-4">2️⃣</div>
          <h4 className="font-semibold text-lg mb-2">Save & Manage</h4>
          <p className="text-gray-600">
            Save your citations to build a collection. Edit or delete them anytime.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-4">3️⃣</div>
          <h4 className="font-semibold text-lg mb-2">Export</h4>
          <p className="text-gray-600">
            Export your citations in your preferred format. Choose from BibTeX, RIS, or plain text.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Pro Tips</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-indigo-500 mr-2">💡</span>
            <p className="text-gray-700">Use the preview feature to check your citation before saving</p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-500 mr-2">💡</span>
            <p className="text-gray-700">Save frequently used sources for quick access</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-indigo-500 mr-2">💡</span>
            <p className="text-gray-700">Export multiple citations at once for bibliography creation</p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-500 mr-2">💡</span>
            <p className="text-gray-700">Double-check all information for accuracy</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeIntro;