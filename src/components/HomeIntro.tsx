"use client";

import type { FC } from 'react';

const HomeIntro: FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">About This Tool</h2>
    
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">About APA Format</h3>
      <div className="prose">
        <p>APA (American Psychological Association) format is widely used in social sciences. The 7th edition, released in 2020, includes the following key features:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Emphasis on clarity and accuracy in writing</li>
          <li>Detailed citation and reference guidelines</li>
          <li>Citation formats for various resources (books, journals, websites, etc.)</li>
          <li>Paper formatting requirements (margins, fonts, spacing)</li>
        </ul>
      </div>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <h4 className="text-lg font-medium mb-2">Citation Generation</h4>
          <ul className="space-y-2">
            <li>✓ Multiple reference types</li>
            <li>✓ Automatic formatting</li>
            <li>✓ Real-time preview</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="text-lg font-medium mb-2">Bulk Import</h4>
          <ul className="space-y-2">
            <li>✓ BibTeX format support</li>
            <li>✓ RIS format support</li>
            <li>✓ EndNote XML support</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-4">Supported Reference Types</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-2">Books</h4>
          <ul className="text-sm space-y-1">
            <li>• Books</li>
            <li>• E-books</li>
            <li>• Edited Books</li>
            <li>• Translations</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-2">Journals</h4>
          <ul className="text-sm space-y-1">
            <li>• Journal Articles</li>
            <li>• E-journals</li>
            <li>• Conference Papers</li>
            <li>• Preprints</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-2">Other Types</h4>
          <ul className="text-sm space-y-1">
            <li>• Dissertations</li>
            <li>• Websites</li>
            <li>• Newspapers</li>
            <li>• Datasets</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default HomeIntro; 