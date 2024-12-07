'use client';

import Link from 'next/link';

export default function OnlineJournalPage() {
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
          <li className="before:content-['/'] before:mx-2">Online Journals</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Online Journal Articles</h1>

        <section className="mb-12">
          <h2>Basic Format with DOI</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Journal</em>, <em>Volume</em>(Issue), pp-pp. https://doi.org/xxx
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D., & Johnson, M. R. (2023). Digital research methods. <em>Journal of Online Research</em>, <em>15</em>(2), 123-145. https://doi.org/10.1234/jor.2023.123
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format with URL (No DOI Available)</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). Title of article. <em>Title of Journal</em>, <em>Volume</em>(Issue). URL
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Wilson, K. L. (2023). Web-based research tools. <em>Digital Methods Journal</em>, <em>8</em>(4). https://www.example.com/article
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format Guidelines</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">DOI Format</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Present DOI as a URL (https://doi.org/xxx)</li>
                <li>Do not add a period after the DOI</li>
                <li>Use lowercase letters for DOI</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">URL Format</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include complete URL</li>
                <li>Remove "Retrieved from" statement</li>
                <li>Do not include access date unless content may change</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Narrative Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith and Johnson (2023) demonstrated...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                According to Wilson (2023)...
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Parenthetical Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                ...(Smith & Johnson, 2023)
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Wilson, 2023, para. 4)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Articles with Article Numbers</h3>
              <p className="mb-4">Some online journals use article numbers instead of page numbers</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Brown, R. T. (2023). Digital methods. <em>Online Research Journal</em>, <em>10</em>(2), Article e12345. https://doi.org/10.1234/orj.12345
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Supplemental Material</h3>
              <p className="mb-4">Include information about supplemental material in brackets</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Davis, C. D. (2023). Research findings [Supplemental material]. <em>Digital Journal</em>, <em>12</em>(4). https://doi.org/10.1234/dj.2023.789
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always include DOI when available</li>
              <li>Use URL only when DOI is not available</li>
              <li>Format remains the same regardless of access method</li>
              <li>Include page numbers or paragraph numbers for direct quotes</li>
              <li>Do not include database information for academic databases</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 