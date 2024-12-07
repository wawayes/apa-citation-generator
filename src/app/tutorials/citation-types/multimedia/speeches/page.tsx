'use client';

import Link from 'next/link';

export default function SpeechesPage() {
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
          <li className="before:content-['/'] before:mx-2">Speeches</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Speeches</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite speeches, addresses, and oral presentations in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Speaker, S. S. (Year, Month Day). <em>Title of speech</em> [Speech]. Event Name. Location.
            </p>
            <p className="font-mono text-sm">
              Speaker, S. S. (Year, Month Day). <em>Title of speech</em> [Video]. Platform/Publisher. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Live Speech</h3>
            <p className="font-mono text-sm mb-2">
              King, M. L., Jr. (1963, August 28). <em>I have a dream</em> [Speech]. March on Washington for Jobs and Freedom. Lincoln Memorial, Washington, DC.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Recorded Speech</h3>
            <p className="font-mono text-sm mb-2">
              Obama, B. (2004, July 27). <em>The audacity of hope</em> [Video]. Democratic National Convention. C-SPAN. https://www.c-span.org/video/?182478-1/illinois-senate-candidate-speech
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Online Speech</h3>
            <p className="font-mono text-sm mb-2">
              Gates, B. (2015, March). <em>The next outbreak? We're not ready</em> [Video]. TED Conferences. https://www.ted.com/talks/bill_gates_the_next_outbreak_we_re_not_ready
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Speaker Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Speaker's name</li>
                <li>Professional title</li>
                <li>Organizational affiliation</li>
                <li>Credentials</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Speech Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of speech</li>
                <li>Date delivered</li>
                <li>Event context</li>
                <li>Location</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Recording Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Format type</li>
                <li>Platform/Publisher</li>
                <li>Access information</li>
                <li>URL if online</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Speech Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Public Speeches</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Political addresses</li>
                <li>Commencement speeches</li>
                <li>Keynote presentations</li>
                <li>Public lectures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Academic Speeches</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conference presentations</li>
                <li>Guest lectures</li>
                <li>Research talks</li>
                <li>Panel discussions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Unpublished speeches</li>
              <li>Historical speeches</li>
              <li>Translated speeches</li>
              <li>Multiple versions</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the speaker's name and year:</p>
              <p className="font-mono text-sm">
                In King's (1963) "I Have a Dream" speech...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The speech (King, 1963) emphasizes...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Permissions</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Speech copyright</li>
              <li>Recording rights</li>
              <li>Usage permissions</li>
              <li>Fair use guidelines</li>
              <li>Attribution requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit speech title</li>
              <li>Don't forget event context</li>
              <li>Don't mix date formats</li>
              <li>Don't ignore medium type</li>
              <li>Don't confuse versions</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 