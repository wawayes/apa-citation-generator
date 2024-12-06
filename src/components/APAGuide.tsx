"use client";

import type { FC } from 'react';

const APAGuide: FC = () => (
  <div className="space-y-8">
    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">APA Citation Essentials</h3>
      <div className="prose max-w-none">
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Key Principles</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accuracy: All citation information must be accurate and verifiable</li>
            <li>Completeness: Include all necessary elements for each source type</li>
            <li>Consistency: Follow the same format throughout your document</li>
            <li>Currency: Use the latest APA style guide (7th edition)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Common Mistakes to Avoid</h4>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-700 font-medium mb-2">❌ Incorrect Format:</p>
              <p className="text-red-600">Smith, John. The Psychology of Learning. Routledge, 2020.</p>
              <p className="text-green-700 font-medium mt-3 mb-2">✓ Correct Format:</p>
              <p className="text-green-600">Smith, J. (2020). The psychology of learning. Routledge.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-700 font-medium mb-2">❌ Incorrect Author Format:</p>
              <p className="text-red-600">Dr. John Smith & Professor Mary Johnson</p>
              <p className="text-green-700 font-medium mt-3 mb-2">✓ Correct Author Format:</p>
              <p className="text-green-600">Smith, J., & Johnson, M.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Source-Specific Guidelines</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Journal Articles</h4>
          <div className="space-y-3 text-gray-600">
            <p className="font-medium">Required Elements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Author(s) last name and initials</li>
              <li>Publication year in parentheses</li>
              <li>Article title (sentence case)</li>
              <li>Journal name (title case)</li>
              <li>Volume number (italicized)</li>
              <li>Issue number in parentheses</li>
              <li>Page range</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-mono text-sm">Example:</p>
              <p className="font-mono text-sm mt-1">Smith, J. D., & Johnson, M. R. (2024). Modern citation practices. Journal of Academic Writing, 15(2), 123-145.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Books</h4>
          <div className="space-y-3 text-gray-600">
            <p className="font-medium">Required Elements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Author(s) last name and initials</li>
              <li>Publication year in parentheses</li>
              <li>Book title (sentence case, italicized)</li>
              <li>Publisher name</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-mono text-sm">Example:</p>
              <p className="font-mono text-sm mt-1">Smith, J. D. (2024). The complete guide to citations. Publisher Name.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Websites</h4>
          <div className="space-y-3 text-gray-600">
            <p className="font-medium">Required Elements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Author(s) last name and initials</li>
              <li>Publication date in parentheses</li>
              <li>Page title (sentence case)</li>
              <li>Website name</li>
              <li>URL</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-mono text-sm">Example:</p>
              <p className="font-mono text-sm mt-1">Brown, A. M. (2024). Citation guidelines. Website Name. https://example.com/guidelines</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-medium text-gray-700 mb-3">Multiple Authors</h4>
          <div className="space-y-3 text-gray-600">
            <p className="font-medium">Formatting Rules:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Two authors: Use "&" between names</li>
              <li>Three or more: First author followed by "et al."</li>
              <li>Up to 20 authors: List all in references</li>
              <li>More than 20: First 19 + "..." + last author</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-mono text-sm">Example (in-text):</p>
              <p className="font-mono text-sm mt-1">Smith et al. (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hover-lift p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Advanced Tips</h3>
      <div className="space-y-4">
        <details className="group p-4 bg-white rounded-lg shadow-sm">
          <summary className="font-medium cursor-pointer hover:text-blue-600 flex items-center">
            <span className="mr-2">📌</span>
            DOI and URL Guidelines
          </summary>
          <div className="mt-3 pl-4 text-gray-600">
            <ul className="list-disc space-y-2">
              <li>Include DOI when available (preferred over URL)</li>
              <li>Format: https://doi.org/xx.xxxx/xxxxx</li>
              <li>For websites, include retrieval date if content may change</li>
            </ul>
          </div>
        </details>
        
        <details className="group p-4 bg-white rounded-lg shadow-sm">
          <summary className="font-medium cursor-pointer hover:text-blue-600 flex items-center">
            <span className="mr-2">🔍</span>
            Missing Information
          </summary>
          <div className="mt-3 pl-4 text-gray-600">
            <ul className="list-disc space-y-2">
              <li>No date: Use (n.d.)</li>
              <li>No author: Use title in author position</li>
              <li>No page numbers: Use paragraph numbers or section headings</li>
            </ul>
          </div>
        </details>

        <details className="group p-4 bg-white rounded-lg shadow-sm">
          <summary className="font-medium cursor-pointer hover:text-blue-600 flex items-center">
            <span className="mr-2">💡</span>
            Special Cases
          </summary>
          <div className="mt-3 pl-4 text-gray-600">
            <ul className="list-disc space-y-2">
              <li>Translated works: Include original author and translator</li>
              <li>Reprinted works: Include both dates</li>
              <li>Secondary sources: Cite both original and secondary source</li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  </div>
);

export default APAGuide; 