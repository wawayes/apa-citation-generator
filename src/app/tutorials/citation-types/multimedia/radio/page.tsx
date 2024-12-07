'use client';

import Link from 'next/link';

export default function RadioPage() {
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
          <li className="before:content-['/'] before:mx-2">Radio</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Radio Programs</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite radio broadcasts, shows, and segments in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Host, H. H. (Host). (Year, Month Day). <em>Episode title</em> [Radio broadcast]. In <em>Program title</em>. Station/Network.
            </p>
            <p className="font-mono text-sm">
              Producer, P. P. (Executive Producer). (Year, Month Day). <em>Program title</em> [Radio series]. Station/Network.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Single Episode</h3>
            <p className="font-mono text-sm mb-2">
              Glass, I. (Host). (2023, October 1). <em>The Giant Pool of Money</em> [Radio broadcast]. In <em>This American Life</em>. WBEZ Chicago.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Radio Series</h3>
            <p className="font-mono text-sm mb-2">
              Gross, T. (Host). (1975-present). <em>Fresh Air</em> [Radio series]. National Public Radio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">News Segment</h3>
            <p className="font-mono text-sm mb-2">
              Siegel, R. (Host). (2023, September 30). <em>Climate change impact on agriculture</em> [Radio news segment]. In <em>All Things Considered</em>. NPR.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Host's name</li>
                <li>Producer's name</li>
                <li>Contributors</li>
                <li>Guest speakers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Program Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Episode title</li>
                <li>Program title</li>
                <li>Broadcast date</li>
                <li>Series information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Broadcast Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Station name</li>
                <li>Network</li>
                <li>Location</li>
                <li>Access information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Radio Program Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">News Programs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>News broadcasts</li>
                <li>Current affairs</li>
                <li>Weather reports</li>
                <li>Traffic updates</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Entertainment Programs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Talk shows</li>
                <li>Music programs</li>
                <li>Comedy shows</li>
                <li>Drama series</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Live broadcasts</li>
              <li>Archived programs</li>
              <li>International broadcasts</li>
              <li>Multiple stations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the host's name and year:</p>
              <p className="font-mono text-sm">
                In Glass's (2023) radio broadcast...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The program (Glass, 2023) explores...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Permissions</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Broadcast rights</li>
              <li>Recording permissions</li>
              <li>Usage guidelines</li>
              <li>Fair use policies</li>
              <li>Attribution requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse episode with series title</li>
              <li>Don't omit broadcast date</li>
              <li>Don't forget station information</li>
              <li>Don't mix citation styles</li>
              <li>Don't ignore format type</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 