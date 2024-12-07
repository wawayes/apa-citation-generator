'use client';

import Link from 'next/link';

export default function WebPagesPage() {
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
            <Link href="/tutorials/citation-types/websites" className="hover:text-indigo-600">Websites</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Web Pages</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Web Pages</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for individual web pages and online articles in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. (Year, Month Day). Title of page. Site Name. URL</p>
          </div>
          <p className="text-gray-600">
            Note: If the web page is likely to change over time, include a retrieval date before the URL.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Web Page with Individual Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J. (2023, June 15). Understanding APA citations. Writing Center Guide. https://example.com/apa-guide
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Author's last name followed by initials</li>
                <li>• Full date if available</li>
                <li>• Title of the specific page</li>
                <li>• Website name in italics</li>
                <li>• Direct URL to the page</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Web Page with Organization as Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                American Psychological Association. (2023). APA style guidelines. https://www.apa.org/style
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Organization name spelled out</li>
                <li>• Year of publication</li>
                <li>• No site name when same as author</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Web Page with No Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Citation guidelines for academic writing. (2023, July 1). University Writing Center. https://example.edu/guidelines
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Begin with title of the page</li>
                <li>• Include date if available</li>
                <li>• Include site name</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Web Page with No Date</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Johnson, M. (n.d.). Guide to online citations. Research Portal. https://example.org/citations
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use "n.d." when no date is available</li>
                <li>• Include all other available information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Frequently Updated Pages</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                National Weather Service. (n.d.). Current weather conditions [Weather map]. Retrieved August 8, 2023, from https://weather.gov
              </div>
              <p className="text-gray-600 mb-4">
                For pages that are frequently updated, include a retrieval date before the URL.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Pages in Another Language</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                García, A. (2023). Guía de estilo APA [APA style guide]. Universidad Nacional. https://example.es/apa
              </div>
              <p className="text-gray-600 mb-4">
                Include an English translation of the title in square brackets immediately after the original title.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include the protocol (http:// or https://) in the citation unless required for clarity</li>
              <li>Don't include retrieval dates for content that won't change</li>
              <li>Don't cite the homepage when you're referencing a specific page</li>
              <li>Don't include unnecessary navigation information in the URL</li>
              <li>Don't include URLs that require login credentials</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Tips for Online Citations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">URL Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use permanent links when available</li>
                <li>Verify URLs before submitting</li>
                <li>Break URLs before punctuation</li>
                <li>Consider using URL shorteners for very long URLs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">When to Archive</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Important sources that might disappear</li>
                <li>Frequently updated content</li>
                <li>News articles and blog posts</li>
                <li>Temporary or seasonal content</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 