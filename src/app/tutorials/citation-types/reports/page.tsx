'use client';

import Link from 'next/link';

export default function ReportsPage() {
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
          <li className="before:content-['/'] before:mx-2">Reports & Technical Documents</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Reports and Technical Documents</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite technical reports, white papers, standards, and other specialized documents.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/reports/technical" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Technical Reports</h2>
            <p className="text-gray-600">How to cite research and development reports from organizations.</p>
          </Link>

          <Link href="/tutorials/citation-types/reports/white-papers"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">White Papers</h2>
            <p className="text-gray-600">Guidelines for citing authoritative reports and policy documents.</p>
          </Link>

          <Link href="/tutorials/citation-types/reports/standards"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Industry Standards</h2>
            <p className="text-gray-600">How to cite technical standards and specifications.</p>
          </Link>

          <Link href="/tutorials/citation-types/reports/manuals"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Technical Manuals</h2>
            <p className="text-gray-600">Citations for user guides, documentation, and instruction manuals.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include the issuing organization as author</li>
              <li>Specify report type and number</li>
              <li>Add DOI or URL for online access</li>
              <li>Include version or edition information</li>
              <li>Note any restricted access or confidentiality</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author/Organization Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Individual authors if specified</li>
                <li>Organization name as author</li>
                <li>Department or division details</li>
                <li>Multiple organization handling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Document Identification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Report or document number</li>
                <li>Series information</li>
                <li>Contract or grant numbers</li>
                <li>Version or revision numbers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication or release date</li>
                <li>Repository or database name</li>
                <li>DOI or permanent URL</li>
                <li>Access restrictions if any</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Unpublished Reports</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Note unpublished status</li>
                <li>Include institutional affiliation</li>
                <li>Add internal reference numbers</li>
                <li>Specify access permissions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Proprietary Documents</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Note confidentiality level</li>
                <li>Include permission statements</li>
                <li>Add copyright information</li>
                <li>Specify usage restrictions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep copies of cited documents</li>
                <li>Record all identifying numbers</li>
                <li>Note access dates for online sources</li>
                <li>Document permission requests</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Verification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify document authenticity</li>
                <li>Check for updated versions</li>
                <li>Confirm access permissions</li>
                <li>Validate technical details</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 