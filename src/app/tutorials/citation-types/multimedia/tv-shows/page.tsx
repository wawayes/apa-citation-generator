'use client';

import Link from 'next/link';

export default function TVShowsPage() {
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
          <li className="before:content-['/'] before:mx-2">TV Shows</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite TV Shows</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite television series, episodes, and broadcasts in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Writer, W. W. (Writer), & Director, D. D. (Director). (Year). <em>Episode title</em> [TV series episode]. In P. Producer (Executive Producer), <em>Series title</em>. Production Company.
            </p>
            <p className="font-mono text-sm">
              Producer, P. P. (Executive Producer). (Years). <em>Series title</em> [TV series]. Production Company.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Single Episode</h3>
            <p className="font-mono text-sm mb-2">
              Favreau, J. (Writer & Director). (2019). <em>Chapter 1: The Mandalorian</em> [TV series episode]. In J. Favreau (Executive Producer), <em>The Mandalorian</em>. Lucasfilm.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Complete Series</h3>
            <p className="font-mono text-sm mb-2">
              Simon, D. (Executive Producer). (2002-2008). <em>The Wire</em> [TV series]. HBO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">News Broadcast</h3>
            <p className="font-mono text-sm mb-2">
              Cooper, A. (Host). (2023, September 15). <em>Anderson Cooper 360°</em> [TV news program]. CNN.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Writer's name</li>
                <li>Director's name</li>
                <li>Producer's name</li>
                <li>Host information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Show Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Episode title</li>
                <li>Series title</li>
                <li>Season number</li>
                <li>Episode number</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Broadcast Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Network name</li>
                <li>Air date</li>
                <li>Production company</li>
                <li>Distribution platform</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>TV Show Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Scripted Shows</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Drama series</li>
                <li>Comedy series</li>
                <li>Limited series</li>
                <li>Anthology series</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Non-scripted Shows</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>News programs</li>
                <li>Reality shows</li>
                <li>Talk shows</li>
                <li>Documentary series</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Web series</li>
              <li>Streaming exclusives</li>
              <li>International shows</li>
              <li>Cancelled series</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the writer/director and year:</p>
              <p className="font-mono text-sm">
                In Favreau's (2019) episode...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The episode (Favreau, 2019) demonstrates...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Fair Use</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Broadcast rights</li>
              <li>Fair use guidelines</li>
              <li>Clip usage</li>
              <li>Educational use</li>
              <li>Streaming rights</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse episode with series title</li>
              <li>Don't omit production roles</li>
              <li>Don't forget air date</li>
              <li>Don't mix citation styles</li>
              <li>Don't ignore series format</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 