'use client';

import Link from 'next/link';

export default function TechnicalReportsPage() {
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
            <Link href="/tutorials/citation-types/reports" className="hover:text-indigo-600">Reports & Technical Documents</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Technical Reports</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Technical Reports</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite technical reports and research documents in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author(s). (Year). <em>Title of report</em> (Report No. xxx). Publisher/Organization.
            </p>
            <p className="font-mono text-sm">
              Author(s). (Year). <em>Title of report</em> (Report No. xxx). URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Organization as Author</h3>
            <p className="font-mono text-sm mb-2">
              National Institute of Mental Health. (2018). <em>Research priorities for strategic objective 2</em> (NIMH Publication No. 18-6368). U.S. Department of Health and Human Services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Individual Authors with Organization</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. D., & Johnson, K. L. (2021). <em>Analysis of renewable energy implementation</em> (Technical Report No. NREL/TP-6A20-71714). National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy21osti/71714.pdf
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Report from University</h3>
            <p className="font-mono text-sm mb-2">
              Wilson, M. R., & Thompson, S. K. (2020). <em>Climate change impact on urban infrastructure</em> (Research Report No. CEE-2020-01). Stanford University, Department of Civil and Environmental Engineering.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>List individual authors if available</li>
                <li>Use organization name if no individual authors</li>
                <li>Include both authors and organization when applicable</li>
                <li>Follow standard APA author formatting rules</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Report Numbers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include report number in parentheses after title</li>
                <li>Use exact format as shown on report</li>
                <li>Include series or contract numbers if relevant</li>
                <li>Add grant numbers if applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publisher Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include full organization name</li>
                <li>Add department or division if specified</li>
                <li>Use parent organization for government reports</li>
                <li>Include location for older reports if relevant</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For draft reports, indicate "Draft" in square brackets after title</li>
              <li>Include "Advance online publication" if applicable</li>
              <li>Note "In press" for forthcoming reports</li>
              <li>Specify "Internal report" for unpublished internal documents</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full organization name:</p>
              <p className="font-mono text-sm">
                According to the National Institute of Mental Health (NIMH, 2018)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the abbreviation:</p>
              <p className="font-mono text-sm">
                The research findings (NIMH, 2018) indicated...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Online Access</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Digital Reports</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include DOI when available</li>
              <li>Use permanent URLs or repository links</li>
              <li>Add database name for restricted access reports</li>
              <li>Include retrieval date for dynamic content</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse report numbers with contract numbers</li>
              <li>Don't omit organizational hierarchy in author position</li>
              <li>Don't use informal report titles</li>
              <li>Don't forget to include report type and number</li>
              <li>Don't cite superseded versions without noting updates</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 