'use client';

import Link from 'next/link';

export default function NewspapersPage() {
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
          <li className="before:content-['/'] before:mx-2">Newspapers & Magazines</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Newspaper and Magazine Articles</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite articles from newspapers and magazines, both print and online versions.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/newspapers/print" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Print Articles</h2>
            <p className="text-gray-600">How to cite articles from printed newspapers and magazines.</p>
          </Link>

          <Link href="/tutorials/citation-types/newspapers/online"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Online Articles</h2>
            <p className="text-gray-600">Guidelines for citing articles from online news websites and digital magazines.</p>
          </Link>

          <Link href="/tutorials/citation-types/newspapers/database"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Database Articles</h2>
            <p className="text-gray-600">How to cite articles accessed through news databases.</p>
          </Link>

          <Link href="/tutorials/citation-types/newspapers/wire-services"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Wire Services</h2>
            <p className="text-gray-600">Citations for articles from news wire services and press releases.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include the specific date (year, month, and day) for newspaper articles</li>
              <li>Use the section name or letter for print articles when available</li>
              <li>Include page numbers for print sources</li>
              <li>Add retrieval information for online sources</li>
              <li>Specify the type of article (e.g., Editorial, Letter to the editor) when relevant</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use author's full name when available</li>
                <li>For no author, start with article title</li>
                <li>Include multiple authors in the order listed</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include newspaper or magazine name in italics</li>
                <li>Add specific date for newspapers</li>
                <li>Use month and year for magazines</li>
                <li>Include section and page numbers for print sources</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include DOI if available</li>
                <li>Add URL for online articles</li>
                <li>Note database name for database articles</li>
                <li>Include retrieval date for content that may change</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Editorial Content</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify type (Editorial, Opinion, etc.)</li>
                <li>Include section name if relevant</li>
                <li>Note anonymous editorials appropriately</li>
                <li>Add columnist name for regular columns</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Supplementary Content</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cite letters to the editor properly</li>
                <li>Include book or movie reviews format</li>
                <li>Note special issues or supplements</li>
                <li>Reference corrections or updates</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 