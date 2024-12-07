'use client';

import Link from 'next/link';

export default function JournalsPage() {
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
          <li className="before:content-['/'] before:mx-2">Journals</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Journal Articles</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite different types of journal articles in APA format. Choose a specific article type below for detailed guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/journals/print" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Print Journal Articles</h2>
            <p className="text-gray-600">Guidelines for citing articles from traditional print journals.</p>
          </Link>

          <Link href="/tutorials/citation-types/journals/online"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Online Journal Articles</h2>
            <p className="text-gray-600">How to cite articles from online journals, including DOI and URL information.</p>
          </Link>

          <Link href="/tutorials/citation-types/journals/advance-online"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Advance Online Publications</h2>
            <p className="text-gray-600">Citing articles that are published online ahead of print.</p>
          </Link>

          <Link href="/tutorials/citation-types/journals/preprints"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Preprints</h2>
            <p className="text-gray-600">How to cite preprint articles from repositories like arXiv or bioRxiv.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Journal Citation Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Italicize the journal name and volume number</li>
              <li>Include DOI when available</li>
              <li>Use sentence case for article titles</li>
              <li>Include issue number in parentheses</li>
              <li>Provide page range for print articles</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't italicize article titles</li>
              <li>Don't omit the DOI if available</li>
              <li>Don't include database information for academic databases</li>
              <li>Don't capitalize all words in article titles</li>
              <li>Don't forget to include the issue number when available</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 