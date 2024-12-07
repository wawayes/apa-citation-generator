'use client';

import Link from 'next/link';

export default function GovernmentReportsPage() {
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
            <Link href="/tutorials/citation-types/government" className="hover:text-indigo-600">Government Documents</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Government Reports</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Government Reports</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite government reports and official publications in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author. (Year). <em>Title of report</em> (Report No. xxx). Publisher.
            </p>
            <p className="font-mono text-sm">
              Author. (Year). <em>Title of report</em> (Report No. xxx). URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Print Government Report</h3>
            <p className="font-mono text-sm mb-2">
              National Cancer Institute. (2019). <em>Annual report to the nation on the status of cancer</em> (NIH Publication No. 19-2789). U.S. Department of Health and Human Services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Online Government Report</h3>
            <p className="font-mono text-sm mb-2">
              Centers for Disease Control and Prevention. (2021). <em>COVID-19 vaccination program interim operational guidance</em>. https://www.cdc.gov/vaccines/covid-19/covid19-vaccination-guidance.html
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Government Agency Report with Department</h3>
            <p className="font-mono text-sm mb-2">
              U.S. Department of Education, Office of Educational Technology. (2020). <em>Reimagining the role of technology in education</em>. https://tech.ed.gov/netp/
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the full name of the government agency</li>
                <li>Include parent department if applicable</li>
                <li>For multiple agencies, list them in hierarchical order</li>
                <li>Use commas to separate different levels of government organizations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Report Numbers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include report numbers in parentheses after the title</li>
                <li>Use the exact format given in the document</li>
                <li>Common formats include "Report No.", "Publication No.", or agency-specific numbering systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Access</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include direct URLs for online reports</li>
                <li>DOIs are preferred when available</li>
                <li>No retrieval date needed unless content may change</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Considerations</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For reports without individual authors, use the agency name as author</li>
              <li>If a report is part of a series, include the series title in brackets after the report title</li>
              <li>For translated reports, include the translator's name in parentheses after the title</li>
              <li>When citing draft or preliminary reports, indicate this in brackets after the title</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full name of the agency:</p>
              <p className="font-mono text-sm">
                According to the National Cancer Institute (NCI, 2019)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the abbreviation:</p>
              <p className="font-mono text-sm">
                The study showed significant progress (NCI, 2019)...
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 