'use client';

import Link from 'next/link';

export default function MultipleAuthorsBookPage() {
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
          <li className="before:content-['/'] before:mx-2">Multiple Authors</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Books with Multiple Authors</h1>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A., Author, B. B., & Author, C. C. (Year). <em>Title of book</em>. Publisher.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D., Johnson, M. R., & Wilson, K. L. (2023). <em>Collaborative research methods</em>. Academic Press.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Author Number Guidelines</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Two Authors</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D., & Johnson, M. R. (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Three to Twenty Authors</h3>
              <p className="mb-4">List all authors, using commas and an ampersand before the final author</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D., Johnson, M. R., & Wilson, K. L. (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">More Than Twenty Authors</h3>
              <p className="mb-4">List the first 19 authors, insert an ellipsis (...), and add the final author's name</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded text-sm">
                Smith, J. D., Johnson, M. R., Wilson, K. L., Brown, A. B., Davis, C. D., Miller, E. F., ... Thompson, Z. Y. (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citation Format</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Two Authors:</h4>
                  <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                    Smith and Johnson (2023) argue... <br />
                    ...(Smith & Johnson, 2023)
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Three or More Authors:</h4>
                  <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                    Smith et al. (2023) suggest... <br />
                    ...(Smith et al., 2023)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Page Numbers</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                (Smith et al., 2023, p. 45)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Issues</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Order of Authors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>List authors in the order they appear on the source</li>
                <li>Do not alphabetize unless they appear that way on the source</li>
                <li>Use the same order consistently throughout your paper</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Corporate Authors</h3>
              <p className="mb-4">When organizations are listed as authors alongside individuals</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D., Johnson, M. R., & National Research Council. (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 