"use client";

import type { FC } from 'react';

const APAGuide: FC = () => (
  <div className="space-y-8">
    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Basic Format Requirements</h3>
      <div className="prose">
        <h4 className="text-lg mb-2">Page Setup</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Margins: 1 inch (2.54 cm)</li>
          <li>Font: Times New Roman, 12pt</li>
          <li>Line Spacing: Double-spaced</li>
          <li>Paragraph Indent: First line 0.5 inch</li>
        </ul>

        <h4 className="text-lg mt-4 mb-2">Heading Format</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Level 1: Centered, Bold</li>
          <li>Level 2: Left-aligned, Bold</li>
          <li>Level 3: Left-aligned, Bold, Indented</li>
        </ul>
      </div>
    </section>

    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Citation Examples</h3>
      <div className="space-y-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h4 className="text-lg font-medium mb-2">Book Citation</h4>
          <p className="text-sm text-gray-600 mb-2">Basic Format:</p>
          <p className="font-mono bg-gray-50 p-3 rounded">Author, A. A. (Year). Title of book. Publisher.</p>
          <p className="text-sm text-gray-600 mt-2">Example:</p>
          <p className="font-mono bg-gray-50 p-3 rounded">Smith, J. (2020). The psychology of learning. Routledge.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h4 className="text-lg font-medium mb-2">Journal Article Citation</h4>
          <p className="text-sm text-gray-600 mb-2">Basic Format:</p>
          <p className="font-mono bg-gray-50 p-3 rounded">Author, A. A. (Year). Title of article. Journal Name, Volume(Issue), pages.</p>
          <p className="text-sm text-gray-600 mt-2">Example:</p>
          <p className="font-mono bg-gray-50 p-3 rounded">Johnson, M. (2021). Learning patterns in online education. Journal of Education, 15(2), 123-145.</p>
        </div>
      </div>
    </section>

    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
      <div className="space-y-4">
        <details className="group p-4 bg-white rounded-lg shadow-sm">
          <summary className="font-medium cursor-pointer hover:text-blue-600">How to handle multiple authors?</summary>
          <div className="mt-3 pl-4 text-gray-700">
            <p>- Two authors: Use "&" between names</p>
            <p>- Three or more authors: First author followed by "et al."</p>
          </div>
        </details>
        
        <details className="group p-4 bg-white rounded-lg shadow-sm">
          <summary className="font-medium cursor-pointer hover:text-blue-600">How to cite web content?</summary>
          <div className="mt-3 pl-4">
            <p className="mb-2">Include the following elements:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Author (if available)</li>
              <li>Publication date (if available)</li>
              <li>Title</li>
              <li>Website name</li>
              <li>URL</li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  </div>
);

export default APAGuide; 