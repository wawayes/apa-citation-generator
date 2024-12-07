'use client';

import Link from 'next/link';

export default function PrintJournalPage() {
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
            <Link href="/tutorials/citation-types/journals" className="hover:text-indigo-600">Journals</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Print Journals</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Print Journal Articles</h1>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Journal</em>, <em>Volume</em>(Issue), pp-pp.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D., & Johnson, M. R. (2023). Research methods in social sciences. <em>Journal of Research Methods</em>, <em>15</em>(2), 123-145.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format Guidelines</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Article Title</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use sentence case (capitalize only the first word and proper nouns)</li>
                <li>Do not italicize or use quotation marks</li>
                <li>Include subtitle if present, separated by a colon</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Journal Title</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Italicize the journal title</li>
                <li>Use title case (capitalize all major words)</li>
                <li>Write out the full journal name</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Volume and Issue</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Italicize the volume number</li>
                <li>Place issue number in parentheses</li>
                <li>Do not use "Vol." or "Issue"</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith and Johnson (2023) found that...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith & Johnson, 2023)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Page Numbers</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                (Smith & Johnson, 2023, p. 125)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Special Issue</h3>
              <p className="mb-4">Include the special issue information after the title</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Wilson, K. L. (2023). New research methods [Special issue]. <em>Journal of Research</em>, <em>20</em>(S1), 1-15.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Supplemental Material</h3>
              <p className="mb-4">Include information about supplemental material in brackets</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Davis, C. D. (2023). Research findings [Supplemental material]. <em>Research Quarterly</em>, <em>12</em>(4), 45-60.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include all authors' names up to 20 authors</li>
              <li>Provide complete page range</li>
              <li>Use standard abbreviations for journal names only if widely recognized</li>
              <li>Include both volume and issue numbers when available</li>
              <li>Double-check journal title capitalization</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 