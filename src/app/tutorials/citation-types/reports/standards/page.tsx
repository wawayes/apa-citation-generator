'use client';

import Link from 'next/link';

export default function StandardsPage() {
  return (
    <div className="container mx-auto px-4">
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials/citation-types" className="hover:text-indigo-600">Citation Types</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials/citation-types/reports" className="hover:text-indigo-600">Reports & Technical Documents</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Industry Standards</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Industry Standards</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite technical standards, specifications, and industry guidelines in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Standards Organization. (Year). <em>Standard number: Title of standard</em>. Publisher.
            </p>
            <p className="font-mono text-sm">
              Standards Organization. (Year). <em>Standard number: Title of standard</em>. DOI or URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">International Standard</h3>
            <p className="font-mono text-sm mb-2">
              International Organization for Standardization. (2015). <em>ISO 9001:2015: Quality management systems - Requirements</em>. https://www.iso.org/standard/62085.html
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">National Standard</h3>
            <p className="font-mono text-sm mb-2">
              American National Standards Institute. (2019). <em>ANSI/ASSP Z359.1-2019: Safety requirements for personal fall arrest systems</em>. American Society of Safety Professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Industry-Specific Standard</h3>
            <p className="font-mono text-sm mb-2">
              Institute of Electrical and Electronics Engineers. (2020). <em>IEEE 802.11ax-2021: Enhanced throughput for wireless LANs</em>. https://doi.org/10.1109/IEEESTD.2021.9442429
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Standard Numbers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include complete standard designation</li>
                <li>Maintain original formatting (e.g., hyphens, periods)</li>
                <li>Include version or year in standard number</li>
                <li>Add part numbers if applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Organization Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use full organization name first time</li>
                <li>Include subsidiary organizations if relevant</li>
                <li>Note joint standards development</li>
                <li>Specify national body for international standards</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use year of current version</li>
                <li>Include revision or amendment information</li>
                <li>Note superseded versions if relevant</li>
                <li>Add publication location for older standards</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For draft standards, include "Draft" designation</li>
              <li>Note withdrawn or superseded standards</li>
              <li>Include supplement or addendum information</li>
              <li>Specify language version for international standards</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full organization name:</p>
              <p className="font-mono text-sm">
                The International Organization for Standardization (ISO, 2015) specifies...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the abbreviation and standard number:</p>
              <p className="font-mono text-sm">
                According to ISO 9001:2015...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Access and Permissions</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Standard Access</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Note any purchase or subscription requirements</li>
              <li>Include membership access information</li>
              <li>Specify viewing restrictions</li>
              <li>Document permission requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't use unofficial abbreviations for standard numbers</li>
              <li>Don't omit version years or revision information</li>
              <li>Don't confuse similar standards from different organizations</li>
              <li>Don't cite withdrawn standards without noting status</li>
              <li>Don't ignore copyright and usage restrictions</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 