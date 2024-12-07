'use client';

import Link from 'next/link';

export default function EbooksPage() {
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
          <li className="before:content-['/'] before:mx-2">E-Books</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite E-Books</h1>

        <section className="mb-12">
          <h2>Basic Format with DOI</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). <em>Title of book</em>. Publisher. https://doi.org/xx.xxx/xxxx
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D. (2023). <em>Digital research methods</em>. Academic Press. https://doi.org/10.1234/5678
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format with URL (No DOI Available)</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). <em>Title of book</em>. Publisher. URL
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Johnson, M. R. (2023). <em>Guide to online research</em>. Digital Press. https://www.example.com/ebook
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>E-Book Platforms</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Kindle Books</h3>
              <p className="mb-4">For Kindle books without page numbers, use the location number</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Brown, R. T. (2023). <em>Research essentials</em> [Kindle version]. Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Google Books</h3>
              <p className="mb-4">Include the Google Books URL if no other version is available</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Wilson, K. L. (2023). <em>Data analysis guide</em>. https://books.google.com/books?id=xxxxx
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">With Page Numbers</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith (2023, p. 45) argues...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith, 2023, p. 45)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Without Page Numbers</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith (2023, Chapter 3) discusses...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith, 2023, para. 4)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Kindle Locations</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Brown, 2023, loc. 234-235)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online-Only Books</h3>
              <p className="mb-4">For books that exist only in digital format</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Davis, C. D. (2023). <em>Digital publishing guide</em> [eBook edition]. https://doi.org/10.1234/9876
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Updated or Revised E-Books</h3>
              <p className="mb-4">Include version or edition information when available</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Miller, E. F. (2023). <em>Research handbook</em> (2nd ed., ver. 2.1). Publisher. https://doi.org/10.1234/5678
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always include DOI if available; use URL only if no DOI exists</li>
              <li>Do not include database information for academic research databases</li>
              <li>Include format information [eBook edition] only when necessary for clarity</li>
              <li>Use paragraph numbers, chapter numbers, or location numbers when page numbers are not available</li>
              <li>URLs should be live links in digital documents</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 