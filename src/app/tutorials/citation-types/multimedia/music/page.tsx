'use client';

import Link from 'next/link';

export default function MusicPage() {
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
          <li className="before:content-['/'] before:mx-2">Music</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Music</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite musical works, recordings, scores, and live performances in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Songwriter, A. A. (Copyright Year). <em>Title of song</em> [Song]. On <em>Album title</em>. Record Label.
            </p>
            <p className="font-mono text-sm">
              Composer, A. A. (Year of composition). <em>Title of work</em> [Musical score]. Publisher.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Recorded Song</h3>
            <p className="font-mono text-sm mb-2">
              Swift, T. (2020). <em>Cardigan</em> [Song]. On <em>Folklore</em>. Republic Records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Classical Composition</h3>
            <p className="font-mono text-sm mb-2">
              Beethoven, L. van. (1808). <em>Symphony No. 5 in C minor, Op. 67</em> [Musical score]. Dover Publications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Live Performance</h3>
            <p className="font-mono text-sm mb-2">
              Berlin Philharmonic Orchestra. (2023, June 15). <em>Symphony No. 9 in D minor, Op. 125</em> [Live performance]. Philharmonie, Berlin, Germany.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Songwriter or composer name</li>
                <li>Multiple contributors</li>
                <li>Band or ensemble name</li>
                <li>Featured artists</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Work Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of song or composition</li>
                <li>Album information</li>
                <li>Version or arrangement</li>
                <li>Recording format</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Record label or publisher</li>
                <li>Release date</li>
                <li>Copyright information</li>
                <li>Catalog number</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Music Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Recorded Music</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Singles</li>
                <li>Album tracks</li>
                <li>Digital releases</li>
                <li>Streaming content</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Sheet Music</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full scores</li>
                <li>Piano reductions</li>
                <li>Parts</li>
                <li>Arrangements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Citing remixes and covers</li>
              <li>Traditional or folk music</li>
              <li>Unpublished recordings</li>
              <li>Live performances</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the composer/artist name and year:</p>
              <p className="font-mono text-sm">
                In Swift's (2020) "Cardigan"...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The song (Swift, 2020) explores...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Licensing</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Music copyright information</li>
              <li>Performance rights</li>
              <li>Mechanical licenses</li>
              <li>Streaming rights</li>
              <li>Fair use guidelines</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse songwriter with performer</li>
              <li>Don't omit album information</li>
              <li>Don't forget format specification</li>
              <li>Don't mix citation styles</li>
              <li>Don't ignore copyright requirements</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 