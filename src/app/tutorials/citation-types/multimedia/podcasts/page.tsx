'use client';

import Link from 'next/link';

export default function PodcastsPage() {
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
          <li className="before:content-['/'] before:mx-2">Podcasts</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Podcasts</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite podcast episodes, series, and audio content in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Host, A. A. (Host). (Year, Month Day). <em>Episode title</em> (No. 123) [Audio podcast episode]. In <em>Podcast name</em>. Publisher. URL
            </p>
            <p className="font-mono text-sm">
              Producer, A. A. (Producer). (Year). <em>Podcast name</em> [Audio podcast]. Publisher. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Single Episode</h3>
            <p className="font-mono text-sm mb-2">
              Glass, I. (Host). (2023, October 15). <em>The Giant Pool of Money</em> (No. 355) [Audio podcast episode]. In <em>This American Life</em>. WBEZ Chicago. https://www.thisamericanlife.org/355/the-giant-pool-of-money
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Podcast Series</h3>
            <p className="font-mono text-sm mb-2">
              Koenig, S. (Host). (2014-present). <em>Serial</em> [Audio podcast]. WBEZ Chicago. https://serialpodcast.org/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Guest Episode</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. (Host), & Johnson, A. (Guest). (2023, September 1). <em>The future of AI</em> (No. 42) [Audio podcast episode]. In <em>Tech Talk Weekly</em>. Spotify. https://open.spotify.com/episode/...
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Host Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include host name and role</li>
                <li>Add guest names if applicable</li>
                <li>Note multiple hosts</li>
                <li>Specify producer credits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Episode Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide episode number</li>
                <li>Include exact release date</li>
                <li>Note series information</li>
                <li>Add season number if relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Platform Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify hosting platform</li>
                <li>Include direct episode URL</li>
                <li>Note streaming service</li>
                <li>Add publisher details</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For limited series, include date range</li>
              <li>Note if episode has been edited or updated</li>
              <li>Include transcript information if available</li>
              <li>Specify bonus or special episodes</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the host name and year:</p>
              <p className="font-mono text-sm">
                Glass (2023) discussed the financial crisis...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The investigation revealed several key findings (Glass, 2023)...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Audio Formats</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Streaming Audio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Note streaming platform</li>
                <li>Include audio quality</li>
                <li>Specify download options</li>
                <li>Add format information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Downloaded Content</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include file format</li>
                <li>Note download date</li>
                <li>Specify storage location</li>
                <li>Add access information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Accessibility</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Note transcript availability</li>
              <li>Include closed captioning</li>
              <li>Specify language versions</li>
              <li>Add alternative formats</li>
              <li>Note accessibility features</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit episode numbers</li>
              <li>Don't forget to specify [Audio podcast episode]</li>
              <li>Don't use unofficial episode titles</li>
              <li>Don't mix up host and guest roles</li>
              <li>Don't ignore series information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 