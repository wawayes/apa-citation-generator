'use client';

import Link from 'next/link';

export default function MapsPage() {
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
            <Link href="/tutorials/citation-types/multimedia" className="hover:text-indigo-600">Multimedia Resources</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Maps</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Maps</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite maps, atlases, and cartographic materials in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Cartographer, C. C. (Year). <em>Title of map</em> [Map]. Publisher. URL
            </p>
            <p className="font-mono text-sm">
              Organization. (Year). <em>Title of map</em> [Type of map]. Retrieved Month Day, Year, from URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Print Map</h3>
            <p className="font-mono text-sm mb-2">
              National Geographic Society. (2020). <em>World physical map</em> [Physical map]. National Geographic Maps Division.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Online Map</h3>
            <p className="font-mono text-sm mb-2">
              Google. (2023). <em>Google Maps directions for driving from New York to Boston</em> [Online map]. Retrieved October 15, 2023, from https://www.google.com/maps
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Historical Map</h3>
            <p className="font-mono text-sm mb-2">
              Mitchell, S. A. (1860). <em>County map of New England</em> [Historical map]. Library of Congress Geography and Map Division.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cartographer's name</li>
                <li>Organization</li>
                <li>Publisher</li>
                <li>Copyright holder</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Map Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of map</li>
                <li>Type of map</li>
                <li>Scale</li>
                <li>Edition</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication date</li>
                <li>Publisher location</li>
                <li>Access date</li>
                <li>URL if online</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Map Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Physical Maps</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Topographic maps</li>
                <li>Relief maps</li>
                <li>Terrain maps</li>
                <li>Climate maps</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Thematic Maps</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Political maps</li>
                <li>Population maps</li>
                <li>Economic maps</li>
                <li>Weather maps</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Interactive maps</li>
              <li>GIS data</li>
              <li>Satellite imagery</li>
              <li>Custom maps</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the creator's name and year:</p>
              <p className="font-mono text-sm">
                According to National Geographic Society's (2020) world map...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The map (National Geographic Society, 2020) shows...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Permissions</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Map copyright</li>
              <li>Usage rights</li>
              <li>Reproduction permissions</li>
              <li>Attribution requirements</li>
              <li>Data licenses</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit scale information</li>
              <li>Don't forget map type</li>
              <li>Don't ignore access date for online maps</li>
              <li>Don't mix citation styles</li>
              <li>Don't neglect copyright information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 