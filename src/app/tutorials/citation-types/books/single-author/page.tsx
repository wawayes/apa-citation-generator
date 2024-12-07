'use client';

import Link from 'next/link';

export default function SingleAuthorBookPage() {
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
            <Link href="/tutorials/citation-types/books" className="hover:text-indigo-600">Books</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Single Author Books</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Single Author Books</h1>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). <em>Title of book</em>. Publisher.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D. (2023). <em>The complete guide to academic writing</em>. Academic Press.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format Guidelines</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Name</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Last name first, followed by initials</li>
                <li>Include periods after initials</li>
                <li>Maintain consistent format for all author names</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Year</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use parentheses</li>
                <li>Include only the year</li>
                <li>Use (n.d.) if no date is available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Book Title</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Italicize the title</li>
                <li>Capitalize only the first word and proper nouns</li>
                <li>Include subtitle after a colon if present</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citation Format</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Narrative Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith (2023) argues that...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                According to Smith (2023)...
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Parenthetical Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                ...(Smith, 2023)
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith, 2023, p. 123)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">No Publication Date</h3>
              <p className="mb-4">When a book has no publication date, use "n.d." (no date)</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Johnson, R. T. (n.d.). <em>Research methodology</em>. Academic Press.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Revised Editions</h3>
              <p className="mb-4">Include the edition information after the title</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Wilson, M. K. (2023). <em>Data analysis fundamentals</em> (2nd ed.). Education Press.
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 