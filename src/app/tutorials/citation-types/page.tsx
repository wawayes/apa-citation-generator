'use client';

import Link from 'next/link';

export default function CitationTypesPage() {
  return (
    <div className="container mx-auto px-4">
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Citation Types</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>APA Citation Types</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to cite different types of sources in APA format. Choose a category below to get detailed guidelines.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          <Link href="/tutorials/citation-types/books" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-xl font-semibold mb-2">Books</h2>
            <p className="text-gray-600">Learn how to cite different types of books, including single author, multiple authors, and edited books.</p>
          </Link>

          <Link href="/tutorials/citation-types/journals"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">📰</div>
            <h2 className="text-xl font-semibold mb-2">Journals</h2>
            <p className="text-gray-600">Guidelines for citing academic journal articles, both print and online versions.</p>
          </Link>

          <Link href="/tutorials/citation-types/websites"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-xl font-semibold mb-2">Websites</h2>
            <p className="text-gray-600">How to properly cite web pages, online articles, and other digital content.</p>
          </Link>

          <Link href="/tutorials/citation-types/newspapers"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">📰</div>
            <h2 className="text-xl font-semibold mb-2">Newspapers & Magazines</h2>
            <p className="text-gray-600">Guidelines for citing articles from newspapers and magazines, both print and online.</p>
          </Link>

          <Link href="/tutorials/citation-types/conferences"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold mb-2">Conference Papers</h2>
            <p className="text-gray-600">How to cite conference proceedings, presentations, and posters.</p>
          </Link>

          <Link href="/tutorials/citation-types/government"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">📜</div>
            <h2 className="text-xl font-semibold mb-2">Government Documents</h2>
            <p className="text-gray-600">Citations for government publications, reports, and legal documents.</p>
          </Link>

          <Link href="/tutorials/citation-types/reports"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-xl font-semibold mb-2">Reports & Technical Documents</h2>
            <p className="text-gray-600">How to cite technical reports, white papers, and industry standards.</p>
          </Link>

          <Link href="/tutorials/citation-types/datasets"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">💾</div>
            <h2 className="text-xl font-semibold mb-2">Datasets & Software</h2>
            <p className="text-gray-600">How to cite datasets, software, and mobile applications.</p>
          </Link>

          <Link href="/tutorials/citation-types/multimedia"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-4xl mb-4">🎬</div>
            <h2 className="text-xl font-semibold mb-2">Multimedia Resources</h2>
            <p className="text-gray-600">Guidelines for citing videos, podcasts, artwork, music, and other multimedia content.</p>
          </Link>
        </div>
      </article>
    </div>
  );
} 