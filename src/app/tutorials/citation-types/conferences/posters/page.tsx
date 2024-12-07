'use client';

import Link from 'next/link';

export default function ConferencePostersPage() {
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
            <Link href="/tutorials/citation-types/conferences" className="hover:text-indigo-600">Conference Papers</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Conference Posters</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Conference Posters</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for poster presentations at academic conferences and professional meetings.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A., & Author, B. B. (Year, Month Day). Title of poster [Poster presentation]. Conference Name, Location.</p>
          </div>
          <p className="text-gray-600">
            Note: For digital posters or online conferences, include the URL or DOI if available.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Traditional Poster Presentation</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, A., & Lee, S. (2023, July 15). Effects of climate change on marine ecosystems [Poster presentation]. International Marine Biology Conference, Sydney, Australia.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• List all authors in order</li>
                <li>• Include exact presentation date</li>
                <li>• Specify [Poster presentation]</li>
                <li>• Add conference location</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Poster</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Wilson, R. (2023, August). Machine learning in healthcare [Digital poster]. Virtual Medical Conference. https://conference.org/posters/123
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Specify digital format</li>
                <li>• Include URL if available</li>
                <li>• Omit physical location for virtual events</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Archived Poster</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, K., & Park, J. (2023, September). Neural networks in robotics [Poster presentation]. Robotics Symposium 2023. https://doi.org/10.xxxx/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include DOI for archived posters</li>
                <li>• Add repository information if relevant</li>
                <li>• Maintain standard citation format</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Poster with Supplementary Materials</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Thompson, M. (2023, October). Data visualization techniques [Poster and supplementary materials]. Data Science Conference. https://repository.org/posters/456
              </div>
              <p className="text-gray-600 mb-4">
                Note the inclusion of supplementary materials in the description.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Interactive Poster</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Johnson, B. (2023, November). Virtual reality in education [Interactive poster]. EdTech Summit. https://edtech.org/posters/789
              </div>
              <p className="text-gray-600 mb-4">
                Specify the interactive nature of the poster presentation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format Variations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Physical Formats</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traditional poster</li>
                <li>Large format print</li>
                <li>Multi-panel display</li>
                <li>Poster with handouts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Formats</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital poster</li>
                <li>Interactive display</li>
                <li>Virtual reality poster</li>
                <li>Multimedia presentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit [Poster presentation] or similar descriptor</li>
              <li>Don't confuse poster sessions with paper presentations</li>
              <li>Don't forget conference details</li>
              <li>Don't include poster dimensions or technical specifications</li>
              <li>Don't cite unpublished posters without permission</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Archive digital posters when possible</li>
              <li>Include DOI or permanent URL if available</li>
              <li>Specify any interactive or multimedia elements</li>
              <li>Note if poster is part of a series or session</li>
              <li>Include conference website for virtual events</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 