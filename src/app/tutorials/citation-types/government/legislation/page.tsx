'use client';

import Link from 'next/link';

export default function LegislationPage() {
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
          <li className="before:content-['/'] before:mx-2">Laws and Legislation</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Laws and Legislation</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite laws, statutes, regulations, and other legislative documents in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Name of Act, Title Source § Section Number (Year).
            </p>
            <p className="font-mono text-sm">
              Name of Act, Title Source § Section Number (Year). URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Federal Statute</h3>
            <p className="font-mono text-sm mb-2">
              Americans With Disabilities Act of 1990, 42 U.S.C. § 12101 et seq. (1990).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Federal Regulation</h3>
            <p className="font-mono text-sm mb-2">
              Protection of Human Subjects, 45 C.F.R. § 46 (2009).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">State Statute</h3>
            <p className="font-mono text-sm mb-2">
              Mental Health Systems Act, Cal. Welf. & Inst. Code § 5150 (West 2020).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Types of Legal Documents</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Statutes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include the official name of the statute</li>
                <li>Provide the source (e.g., U.S.C., state codes)</li>
                <li>Include section numbers</li>
                <li>Add the year of enactment or latest revision</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Regulations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cite the Code of Federal Regulations (C.F.R.)</li>
                <li>Include title and section numbers</li>
                <li>Add the year of the latest version</li>
                <li>Note any amendments or revisions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Bills and Resolutions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify the type (H.R. or S. for House/Senate bills)</li>
                <li>Include bill number</li>
                <li>Add congressional session information</li>
                <li>Note the status (e.g., "as introduced")</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For pending legislation, include the current status and date</li>
              <li>When citing repealed laws, indicate this fact in the citation</li>
              <li>For historical statutes, include original and current versions if relevant</li>
              <li>Use proper legal abbreviations as specified in The Bluebook</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full name of the act:</p>
              <p className="font-mono text-sm">
                The Americans With Disabilities Act of 1990 requires...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the common abbreviation:</p>
              <p className="font-mono text-sm">
                Under the ADA, employers must...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Online Sources</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Digital Access</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include URLs for online versions of laws and regulations</li>
              <li>Use official government websites when possible (e.g., congress.gov, govinfo.gov)</li>
              <li>Add retrieval dates for documents that may be updated</li>
              <li>Note any digital formatting or version information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 