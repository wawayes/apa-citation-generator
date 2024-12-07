'use client';

import Link from 'next/link';

export default function WhitePapersPage() {
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
          <li className="before:content-['/'] before:mx-2">White Papers</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite White Papers</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite white papers and policy documents in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author(s)/Organization. (Year). <em>Title of white paper</em> [White paper]. Publisher/Organization.
            </p>
            <p className="font-mono text-sm">
              Author(s)/Organization. (Year). <em>Title of white paper</em> [White paper]. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Corporate White Paper</h3>
            <p className="font-mono text-sm mb-2">
              IBM Corporation. (2022). <em>The future of artificial intelligence in enterprise</em> [White paper]. https://www.ibm.com/downloads/ai-enterprise-whitepaper.pdf
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Policy White Paper</h3>
            <p className="font-mono text-sm mb-2">
              World Economic Forum. (2021). <em>Global risks report 2021: Building resilience in healthcare systems</em> [White paper]. https://www.weforum.org/reports/global-risks-2021
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Research Organization White Paper</h3>
            <p className="font-mono text-sm mb-2">
              Pew Research Center. (2023). <em>Digital privacy in the age of artificial intelligence</em> [White paper]. https://www.pewresearch.org/internet/2023/digital-privacy
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Document Type</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include [White paper] in square brackets after title</li>
                <li>Use specific descriptors if provided (e.g., [Policy white paper])</li>
                <li>Maintain consistent formatting across similar documents</li>
                <li>Include version number if multiple versions exist</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>List individual authors when specified</li>
                <li>Use organization name for corporate authorship</li>
                <li>Include department or division if relevant</li>
                <li>Follow standard APA author formatting rules</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include publication or release date</li>
                <li>Add publisher or sponsoring organization</li>
                <li>Note any series information</li>
                <li>Specify edition or revision if applicable</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For draft white papers, indicate "Draft" in square brackets</li>
              <li>Include series or report numbers if part of a series</li>
              <li>Note any supplementary materials or appendices</li>
              <li>Specify if the white paper is part of a larger project</li>
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
                According to the World Economic Forum (WEF, 2021)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the abbreviation:</p>
              <p className="font-mono text-sm">
                The report (WEF, 2021) suggests...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Digital Access</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Online White Papers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use permanent URLs or DOIs when available</li>
              <li>Include access date for frequently updated papers</li>
              <li>Note any registration or subscription requirements</li>
              <li>Specify file format if not standard web page</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Quality Assurance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify the authenticity of the white paper</li>
                <li>Check for updated versions</li>
                <li>Confirm organizational authorship</li>
                <li>Document any access restrictions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Save copies of cited white papers</li>
                <li>Record access dates and URLs</li>
                <li>Note any required permissions</li>
                <li>Track version numbers and updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit [White paper] designation</li>
              <li>Don't confuse white papers with technical reports</li>
              <li>Don't use informal titles or subtitles</li>
              <li>Don't forget to verify current versions</li>
              <li>Don't ignore access restrictions or permissions</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}