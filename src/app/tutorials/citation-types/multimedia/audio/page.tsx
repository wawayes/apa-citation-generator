'use client';

import Link from 'next/link';

export default function AudioPage() {
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
          <li className="before:content-['/'] before:mx-2">Audio</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Audio</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite audio recordings, sound effects, and other audio materials in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Artist, A. A. (Year). <em>Title of song</em> [Song]. On <em>Album title</em>. Label.
            </p>
            <p className="font-mono text-sm">
              Host, H. H. (Host). (Year, Month Day). <em>Title of episode</em> [Audio podcast episode]. In <em>Podcast name</em>. Publisher. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Music Recording</h3>
            <p className="font-mono text-sm mb-2">
              Beatles, The. (1967). <em>Lucy in the Sky with Diamonds</em> [Song]. On <em>Sgt. Pepper's Lonely Hearts Club Band</em>. Capitol Records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Audio Interview</h3>
            <p className="font-mono text-sm mb-2">
              Fresh Air. (2023, October 1). <em>Interview with renowned scientist</em> [Audio interview]. NPR. https://www.npr.org/programs/fresh-air
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Sound Effect</h3>
            <p className="font-mono text-sm mb-2">
              Sound Library. (2023). <em>Thunder and rain ambience</em> [Audio file]. Retrieved October 15, 2023, from https://www.soundlibrary.com/effects
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Artist/Performer name</li>
                <li>Producer</li>
                <li>Composer</li>
                <li>Recording engineer</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Audio Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of work</li>
                <li>Type of recording</li>
                <li>Format</li>
                <li>Duration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Source Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Label/Publisher</li>
                <li>Release date</li>
                <li>Platform</li>
                <li>Access information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Audio Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Music</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Songs</li>
                <li>Albums</li>
                <li>Live recordings</li>
                <li>Soundtracks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Spoken Word</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interviews</li>
                <li>Speeches</li>
                <li>Lectures</li>
                <li>Oral histories</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Archival recordings</li>
              <li>Field recordings</li>
              <li>Sound effects</li>
              <li>Audio samples</li>
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
                The Beatles (1967) explored psychedelic themes...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The song (The Beatles, 1967) demonstrates...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Licensing</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Music rights</li>
              <li>Performance rights</li>
              <li>Mechanical licenses</li>
              <li>Sampling permissions</li>
              <li>Fair use guidelines</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit performer credits</li>
              <li>Don't forget format specification</li>
              <li>Don't ignore release information</li>
              <li>Don't mix citation styles</li>
              <li>Don't neglect copyright details</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 