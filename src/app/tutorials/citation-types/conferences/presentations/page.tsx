'use client';

import Link from 'next/link';

export default function ConferencePresentationsPage() {
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
          <li className="before:content-['/'] before:mx-2">Conference Presentations</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Conference Presentations</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for oral presentations, symposium contributions, and other conference presentations.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Presenter, A. A. (Year, Month Day). Title of presentation [Type of presentation]. Conference Name, Location.</p>
          </div>
          <p className="text-gray-600">
            Note: Include as much information as possible about the presentation and conference.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Paper Presentation</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Wilson, R. (2023, June 15). Artificial intelligence in healthcare [Paper presentation]. International Conference on Medical Technology, Boston, MA, United States.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include presenter's name</li>
                <li>• Specify exact date</li>
                <li>• Note presentation type</li>
                <li>• Add conference location</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Symposium Contribution</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, L., & Park, S. (2023, August). Machine learning applications [Symposium]. In J. Smith (Chair), <em>Advances in AI</em>. Symposium conducted at the Annual Psychology Conference, Toronto, ON, Canada.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include symposium chair</li>
                <li>• Add symposium title</li>
                <li>• Note if part of larger conference</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Virtual Presentation</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Thompson, M. (2023, July 20). Remote learning strategies [Virtual presentation]. Global Education Conference. https://conference-website.com/presentation
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Specify virtual format</li>
                <li>• Include URL if available</li>
                <li>• Omit physical location</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Keynote Address</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Johnson, A. (2023, September 5). Future of technology [Keynote address]. Tech Summit 2023, San Francisco, CA, United States.
              </div>
              <p className="text-gray-600 mb-4">
                Specify that it was a keynote address in the presentation type.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Panel Discussion</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Lee, R., & Garcia, M. (2023, October 12). Sustainability in business [Panel discussion]. Business Innovation Forum, London, United Kingdom.
              </div>
              <p className="text-gray-600 mb-4">
                Include all panelists and specify that it was a panel discussion.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Presentation Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Common Formats</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paper presentation</li>
                <li>Poster presentation</li>
                <li>Symposium contribution</li>
                <li>Workshop presentation</li>
                <li>Keynote address</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Virtual Formats</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Virtual presentation</li>
                <li>Online workshop</li>
                <li>Digital poster</li>
                <li>Webinar</li>
                <li>Live stream</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse presentation with published proceedings</li>
              <li>Don't omit presentation type</li>
              <li>Don't forget conference location for in-person events</li>
              <li>Don't include session numbers unless necessary</li>
              <li>Don't cite slides without permission</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 