'use client';

import Link from 'next/link';

export default function AdvanceOnlinePage() {
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
          <li className="before:content-['/'] before:mx-2">Advance Online Publications</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Advance Online Publications</h1>

        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to cite articles that have been published online ahead of their inclusion in a journal issue.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Journal</em>. Advance online publication. https://doi.org/xxx
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D., & Johnson, M. R. (2023). New research methods in digital environments. <em>Journal of Research Methods</em>. Advance online publication. https://doi.org/10.1234/jrm.2023.789
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Format Guidelines</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Status</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include "Advance online publication" after the journal title</li>
                <li>Do not include volume, issue, or page numbers</li>
                <li>Always include DOI when available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Article Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the year of online publication</li>
                <li>Format title and journal name as usual</li>
                <li>Include any article numbers if assigned</li>
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
                Smith and Johnson (2023) found that...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                According to Smith and Johnson (2023)...
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Parenthetical Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                ...(Smith & Johnson, 2023)
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith & Johnson, 2023, para. 5)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Article with Version Number</h3>
              <p className="mb-4">Some advance online publications include version numbers</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Wilson, K. L. (2023). Digital research methods [Version 2]. <em>Online Research Journal</em>. Advance online publication. https://doi.org/10.1234/orj.v2
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Updated Version</h3>
              <p className="mb-4">When citing an updated version of an advance online publication</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Brown, R. T. (2023). Research findings [Updated from 2022 version]. <em>Digital Methods Journal</em>. Advance online publication. https://doi.org/10.1234/dmj.2023.456
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>When Article is Formally Published</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">Once the article is formally published in a journal issue:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Update the reference to include volume, issue, and page numbers</li>
              <li>Remove "Advance online publication" note</li>
              <li>Keep the original year of publication</li>
              <li>Update the DOI if it has changed</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="font-mono text-sm">
                Smith, J. D., & Johnson, M. R. (2023). New research methods in digital environments. <em>Journal of Research Methods, 15</em>(4), 234-256. https://doi.org/10.1234/jrm.2023.789
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always check if the article has been formally published before citing</li>
              <li>Include "Advance online publication" note for unpublished articles</li>
              <li>Use paragraph numbers instead of page numbers for direct quotes</li>
              <li>Keep track of articles you cite for potential updates</li>
              <li>Update references when articles are formally published</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 