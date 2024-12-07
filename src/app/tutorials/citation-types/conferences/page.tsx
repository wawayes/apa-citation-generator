'use client';

import Link from 'next/link';

export default function ConferencesPage() {
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
          <li className="before:content-['/'] before:mx-2">Conference Papers</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Conference Papers and Presentations</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite conference proceedings, presentations, posters, and other academic conference materials.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/conferences/proceedings" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Conference Proceedings</h2>
            <p className="text-gray-600">How to cite papers published in conference proceedings.</p>
          </Link>

          <Link href="/tutorials/citation-types/conferences/presentations"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Conference Presentations</h2>
            <p className="text-gray-600">Guidelines for citing oral presentations and symposium contributions.</p>
          </Link>

          <Link href="/tutorials/citation-types/conferences/posters"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Conference Posters</h2>
            <p className="text-gray-600">How to cite poster sessions and visual presentations.</p>
          </Link>

          <Link href="/tutorials/citation-types/conferences/abstracts"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Conference Abstracts</h2>
            <p className="text-gray-600">Citations for published conference abstracts and summaries.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include the conference name and location</li>
              <li>Specify the type of presentation (paper, poster, etc.)</li>
              <li>Add DOI or URL for online proceedings</li>
              <li>Include the month and year of the conference</li>
              <li>Note if the proceedings are published in a book or journal</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>List all presenters in the order shown</li>
                <li>Include affiliations if available</li>
                <li>Use full names as listed in the program</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Conference Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name of the conference</li>
                <li>Location (city, state/country)</li>
                <li>Dates of the conference</li>
                <li>Session or track information if relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publisher of proceedings if applicable</li>
                <li>Page numbers for published papers</li>
                <li>DOI or URL for online access</li>
                <li>Database information if accessed online</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Unpublished Materials</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Note if presentation was not published</li>
                <li>Include any handouts or supplementary materials</li>
                <li>Add retrieval information for online materials</li>
                <li>Specify if permission was granted to cite</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Virtual Conferences</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indicate if conference was held online</li>
                <li>Include platform information if relevant</li>
                <li>Note time zones for international conferences</li>
                <li>Add recording links if available</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 