'use client';

import Link from 'next/link';

export default function GovernmentPage() {
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
          <li className="before:content-['/'] before:mx-2">Government Documents</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Government Documents</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite government publications, reports, legislation, and other official documents.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/government/reports" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Government Reports</h2>
            <p className="text-gray-600">How to cite official reports and publications from government agencies.</p>
          </Link>

          <Link href="/tutorials/citation-types/government/legislation"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Laws and Legislation</h2>
            <p className="text-gray-600">Guidelines for citing laws, bills, statutes, and regulations.</p>
          </Link>

          <Link href="/tutorials/citation-types/government/court-cases"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Court Cases</h2>
            <p className="text-gray-600">How to cite court decisions and legal cases.</p>
          </Link>

          <Link href="/tutorials/citation-types/government/data"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Government Data</h2>
            <p className="text-gray-600">Citations for government statistics, datasets, and databases.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include the government agency as the author</li>
              <li>Specify the document type (report, bill, etc.)</li>
              <li>Add publication or document numbers</li>
              <li>Include retrieval information for online documents</li>
              <li>Note the government level (federal, state, local)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Agency Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name of government agency</li>
                <li>Parent department if applicable</li>
                <li>Subdivision or office if specified</li>
                <li>Geographic jurisdiction when relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Document Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Official title of document</li>
                <li>Publication or report number</li>
                <li>Series information if part of one</li>
                <li>Version or edition if applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication date or year</li>
                <li>Publisher information</li>
                <li>URL or database name</li>
                <li>Retrieval date if content may change</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">International Documents</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include country of origin</li>
                <li>Provide English translations</li>
                <li>Note original language</li>
                <li>Add international body information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Historical Documents</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include original publication date</li>
                <li>Note any reprints or collections</li>
                <li>Add archival information</li>
                <li>Specify document version used</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse agency names with department names</li>
              <li>Don't omit document or report numbers</li>
              <li>Don't forget to specify government level</li>
              <li>Don't use unofficial abbreviations</li>
              <li>Don't cite superseded versions without noting updates</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 