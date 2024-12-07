'use client';

import Link from 'next/link';

export default function BookChaptersPage() {
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
          <li className="before:content-['/'] before:mx-2">Book Chapters</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Book Chapters</h1>

        <section className="mb-12">
          <h2>Basic Format for Book Chapters</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). Title of chapter. In E. E. Editor (Ed.), <em>Title of book</em> (pp. xxx-xxx). Publisher.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D. (2023). Research methodology in social sciences. In R. D. Williams (Ed.), <em>Handbook of research methods</em> (pp. 100-125). Academic Press.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Chapter in an Edited E-Book</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A. (Year). Title of chapter. In E. E. Editor (Ed.), <em>Title of book</em> (pp. xxx-xxx). Publisher. DOI or URL
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Johnson, M. R. (2023). Digital research methods. In K. L. Wilson (Ed.), <em>Modern research handbook</em> (pp. 45-67). Digital Press. https://doi.org/10.1234/5678
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Multiple Editors</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Two Editors</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Brown, R. T. (2023). Statistical analysis. In A. B. Smith & C. D. Johnson (Eds.), <em>Research methods</em> (pp. 78-95). Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Three or More Editors</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Davis, C. D. (2023). Qualitative research. In A. B. Smith, C. D. Johnson, & E. F. Wilson (Eds.), <em>Advanced research methods</em> (pp. 150-175). Publisher.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith (2023) discusses...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith, 2023)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Specific Page Reference</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                (Smith, 2023, p. 110)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Reprinted or Republished Chapters</h3>
              <p className="mb-4">Include both original and republication dates</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Miller, E. F. (2023). Research ethics. In A. B. Editor (Ed.), <em>Research handbook</em> (pp. 200-225). Publisher. (Original work published 2010)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Translated Chapters</h3>
              <p className="mb-4">Include translator information</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Garcia, M. (2023). Research design (T. Johnson, Trans.). In R. D. Editor (Ed.), <em>Global research methods</em> (pp. 45-60). Publisher.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include page range for the entire chapter</li>
              <li>List chapter author(s) first, then book editor(s)</li>
              <li>Chapter title is not italicized, but book title is</li>
              <li>Include DOI or URL for electronic chapters when available</li>
              <li>Use "In" before the editor's name</li>
              <li>Include (Ed.) for one editor or (Eds.) for multiple editors</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't italicize the chapter title</li>
              <li>Don't omit the page range</li>
              <li>Don't forget to include editor information</li>
              <li>Don't reverse the order of chapter author and book editor</li>
              <li>Don't include publisher location</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 