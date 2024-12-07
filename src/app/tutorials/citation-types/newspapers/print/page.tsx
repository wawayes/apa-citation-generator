'use client';

import Link from 'next/link';

export default function PrintNewspapersPage() {
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
          <li className="before:content-['/'] before:mx-2">Print Articles</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Print Newspaper and Magazine Articles</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for articles from printed newspapers and magazines in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Newspaper Article:</p>
            <p className="ml-4">Author, A. A. (Year, Month Day). Title of article. Name of Newspaper, pp. xx-xx.</p>
            <p className="mt-4">Magazine Article:</p>
            <p className="ml-4">Author, A. A. (Year, Month). Title of article. Name of Magazine, Volume(Issue), pp-pp.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Newspaper Article with Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J. (2023, August 15). Climate change affects local agriculture. The Daily News, pp. A1, A4.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include author's full name if available</li>
                <li>• Use complete date: year, month, and day</li>
                <li>• Include page numbers with "pp." for multiple pages</li>
                <li>• Use "p." for single page references</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Magazine Article with Multiple Authors</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Johnson, M., & Chen, R. (2023, July). Advances in renewable energy. Science Monthly, 45(7), 23-29.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• List all authors using the ampersand (&)</li>
                <li>• Include volume and issue numbers if available</li>
                <li>• Use month for magazines (no specific day needed)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Article without Author</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                New tax policies announced. (2023, June 12). Business Weekly, pp. 12-13.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Start with article title when no author is listed</li>
                <li>• Maintain all other formatting requirements</li>
                <li>• Include page numbers if available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Editorial</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                The future of public transportation [Editorial]. (2023, August 1). Metro Times, p. B2.
              </div>
              <p className="text-gray-600 mb-4">
                Include [Editorial] after the title for editorial pieces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Letter to the Editor</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Wilson, K. (2023, July 15). Responding to climate article [Letter to the editor]. The Daily News, p. A6.
              </div>
              <p className="text-gray-600 mb-4">
                Specify [Letter to the editor] after the title.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Important Notes</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Italicize the newspaper or magazine name</li>
              <li>Include section letter if available (e.g., p. B2)</li>
              <li>Use sentence case for article titles</li>
              <li>Omit "The" from newspaper names unless it's part of a foreign newspaper title</li>
              <li>Include all page numbers if article is not continuous (e.g., pp. A1, A4)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't italicize article titles</li>
              <li>Don't capitalize article titles (except first word and proper nouns)</li>
              <li>Don't omit the year or full date</li>
              <li>Don't forget to include page numbers</li>
              <li>Don't use URL for print articles</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 