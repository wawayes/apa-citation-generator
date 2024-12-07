'use client';

import Link from 'next/link';

export default function EditedBooksPage() {
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
          <li className="before:content-['/'] before:mx-2">Edited Books</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Edited Books</h1>

        <section className="mb-12">
          <h2>Basic Format for Entire Edited Book</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Editor, E. E. (Ed.). (Year). <em>Title of book</em>. Publisher.
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Williams, R. D. (Ed.). (2023). <em>Advances in research methodology</em>. Academic Press.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Multiple Editors</h2>
          <div className="not-prose space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Two Editors</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D., & Johnson, M. R. (Eds.). (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Three or More Editors</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D., Johnson, M. R., & Wilson, K. L. (Eds.). (2023). <em>Title of book</em>. Publisher.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Narrative Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Williams (2023) compiled research showing...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                In the volume edited by Smith and Johnson (2023)...
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Parenthetical Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                ...(Williams, 2023)
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Smith & Johnson, 2023)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Revised or Subsequent Editions</h3>
              <p className="mb-4">Include the edition number after the title</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Smith, J. D. (Ed.). (2023). <em>Research methods</em> (3rd ed.). Publisher.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Translated Works</h3>
              <p className="mb-4">Include the translator's name after the title</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Garcia, M. (Ed.). (2023). <em>Advanced research</em> (R. Johnson, Trans.). Publisher.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Use "(Ed.)" for one editor and "(Eds.)" for multiple editors</li>
              <li>Place the editor's name in the author position</li>
              <li>Include edition information after the title if applicable</li>
              <li>For translated works, include the translator's name after the title</li>
              <li>Follow the same italicization rules as regular books</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 