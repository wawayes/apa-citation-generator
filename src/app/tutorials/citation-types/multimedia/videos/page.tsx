'use client';

import Link from 'next/link';

export default function VideosPage() {
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
          <li className="before:content-['/'] before:mx-2">Videos</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Videos</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite YouTube videos, TED talks, and other online video content in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author, A. A. [Screen name]. (Year, Month Day). <em>Title of video</em> [Video]. Platform. URL
            </p>
            <p className="font-mono text-sm">
              Channel Name. (Year, Month Day). <em>Title of video</em> [Video]. Platform. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">YouTube Video</h3>
            <p className="font-mono text-sm mb-2">
              Vsauce. (2023, June 15). <em>Why Are Things Creepy?</em> [Video]. YouTube. https://www.youtube.com/watch?v=example
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">TED Talk</h3>
            <p className="font-mono text-sm mb-2">
              Brown, B. (2012, March). <em>The power of vulnerability</em> [Video]. TED Conferences. https://www.ted.com/talks/brene_brown_the_power_of_vulnerability
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Educational Video</h3>
            <p className="font-mono text-sm mb-2">
              Khan Academy. (2021, September 10). <em>Introduction to quantum mechanics</em> [Video]. Khan Academy. https://www.khanacademy.org/science/physics/quantum-mechanics
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include personal name if known</li>
                <li>Add screen name in brackets</li>
                <li>Use channel name if no personal name</li>
                <li>Note multiple contributors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Video Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide exact upload date</li>
                <li>Include video duration</li>
                <li>Note series information</li>
                <li>Add part numbers if applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Platform Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify video platform</li>
                <li>Include direct video URL</li>
                <li>Note access restrictions</li>
                <li>Add channel URL if relevant</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For livestreams, note original broadcast date</li>
              <li>Include timestamp for specific sections</li>
              <li>Note if video has been edited</li>
              <li>Specify language or subtitles</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the creator name and year:</p>
              <p className="font-mono text-sm">
                According to Vsauce (2023), the psychology of creepiness...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The research demonstrated several key findings (Vsauce, 2023)...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Video Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Lectures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include course information</li>
                <li>Note institution name</li>
                <li>Add instructor details</li>
                <li>Specify lecture number/topic</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Conference Presentations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include conference name</li>
                <li>Add presentation session</li>
                <li>Note presentation format</li>
                <li>Specify recording details</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Timestamps and Segments</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Use time format (HH:MM:SS)</li>
              <li>Include range for segments</li>
              <li>Note chapter markers</li>
              <li>Add relevant descriptions</li>
              <li>Specify time zone if relevant</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit upload dates</li>
              <li>Don't forget [Video] designation</li>
              <li>Don't use unstable or shortened URLs</li>
              <li>Don't ignore screen names</li>
              <li>Don't mix platform information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 