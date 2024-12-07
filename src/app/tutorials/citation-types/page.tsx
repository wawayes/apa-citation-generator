import Link from 'next/link';

export default function CitationTypesPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-50 py-2 px-4 rounded-lg mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Citation Types</li>
        </ol>
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">APA Citation Types</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to citing different types of sources in APA format
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link 
            href="/tutorials/citation-types/books"
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <span className="text-3xl">📚</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Books</h2>
                <p className="text-gray-600">Learn how to cite different types of books, including single author, multiple authors, and edited books.</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/tutorials/citation-types/journals"
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <span className="text-3xl">📰</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Journals</h2>
                <p className="text-gray-600">Guidelines for citing academic journal articles, both print and online versions.</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/tutorials/citation-types/websites"
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <span className="text-3xl">🌐</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Websites</h2>
                <p className="text-gray-600">How to properly cite web pages, online articles, and other digital content.</p>
              </div>
            </div>
          </Link>
        </div>

        <section className="bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Basic Structure</h3>
              <p className="text-gray-600">
                Author, A. A. (Year). Title. Source.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">DOI vs. URL</h3>
              <p className="text-gray-600">
                Use DOI when available, URL only if no DOI exists
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Multiple Authors</h3>
              <p className="text-gray-600">
                List up to 20 authors in references
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 