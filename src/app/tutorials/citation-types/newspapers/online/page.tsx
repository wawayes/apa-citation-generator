'use client';

import Link from 'next/link';

export default function OnlineNewspapersPage() {
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
            <Link href="/tutorials/citation-types/newspapers" className="hover:text-indigo-600">Newspapers & Magazines</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Online Articles</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Online News Articles</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for articles from online news websites and digital magazines.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. (Year, Month Day). Title of article. Name of News Site. URL</p>
          </div>
          <p className="text-gray-600">
            Note: For articles with DOIs, include the DOI instead of the URL.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Standard Online News Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Thompson, J. (2023, September 1). Global markets show signs of recovery. Reuters. https://www.reuters.com/markets/recovery
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include author's name if available</li>
                <li>• Use complete date</li>
                <li>• Include direct URL to the article</li>
                <li>• Omit period after URL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Magazine Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Lee, S., & Park, J. (2023, August). The rise of artificial intelligence. Digital Tech Magazine. https://www.digitaltechmag.com/ai-rise
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include all authors listed</li>
                <li>• Use only month and year for magazines</li>
                <li>• Include publication name</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">News Website without Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Tech industry faces new regulations. (2023, July 15). Tech News Daily. https://www.technewsdaily.com/regulations
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Begin with article title</li>
                <li>• Include full date</li>
                <li>• Maintain standard format for other elements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Editorial</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                The need for climate action [Editorial]. (2023, August 20). The Guardian. https://www.theguardian.com/climate-editorial
              </div>
              <p className="text-gray-600 mb-4">
                Include [Editorial] after the title for opinion pieces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Breaking News Updates</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, R. (2023, September 2, 14:30 EDT). Hurricane approaches coast [Live updates]. Weather News. https://www.weathernews.com/hurricane-live
              </div>
              <p className="text-gray-600 mb-4">
                Include time zone for live updates or breaking news when relevant.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Important Notes</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include retrieval date only for content that may change</li>
              <li>Use permanent or archived links when possible</li>
              <li>Remove tracking parameters from URLs</li>
              <li>Check if article is available in multiple formats</li>
              <li>Verify URL accessibility</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include database information for publicly available articles</li>
              <li>Don't use shortened URLs</li>
              <li>Don't include unnecessary website navigation details</li>
              <li>Don't forget to check for updated versions</li>
              <li>Don't include login-required URLs</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 