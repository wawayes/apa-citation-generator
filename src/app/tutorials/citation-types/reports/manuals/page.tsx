'use client';

import Link from 'next/link';

export default function ManualsPage() {
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
          <li className="before:content-['/'] before:mx-2">Technical Manuals</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Technical Manuals</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite user guides, instruction manuals, and technical documentation in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Organization/Author. (Year). <em>Title of manual</em> (Version/Model No.). Publisher.
            </p>
            <p className="font-mono text-sm">
              Organization/Author. (Year). <em>Title of manual</em> (Version/Model No.). URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Software Manual</h3>
            <p className="font-mono text-sm mb-2">
              Microsoft Corporation. (2021). <em>Microsoft Teams admin documentation</em> (Version 2.0). https://docs.microsoft.com/en-us/microsoftteams/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Hardware Manual</h3>
            <p className="font-mono text-sm mb-2">
              Apple Inc. (2023). <em>MacBook Pro user guide</em> (16-inch, M2 Pro/Max). https://support.apple.com/guide/macbook-pro/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Technical Documentation</h3>
            <p className="font-mono text-sm mb-2">
              Red Hat, Inc. (2022). <em>Red Hat Enterprise Linux 9 system administrator's guide</em>. https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Manual Identification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include complete manual title</li>
                <li>Add version or model numbers</li>
                <li>Specify edition if applicable</li>
                <li>Note product line or series</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Version Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include software version numbers</li>
                <li>Add hardware model identifiers</li>
                <li>Note revision dates</li>
                <li>Specify update or patch numbers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide direct URLs to documentation</li>
                <li>Include DOIs if available</li>
                <li>Note access requirements</li>
                <li>Specify format (PDF, HTML, etc.)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For beta or preview documentation, note status</li>
              <li>Include language version for international manuals</li>
              <li>Specify platform or system requirements</li>
              <li>Note supplementary materials or appendices</li>
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
                According to Microsoft Corporation (2021), the feature requires...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use a shortened form:</p>
              <p className="font-mono text-sm">
                The documentation (Microsoft, 2021) states...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Online Documentation</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Formats</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use permalinks when available</li>
                <li>Include section identifiers for large documents</li>
                <li>Note interactive or multimedia elements</li>
                <li>Specify offline availability options</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Version Control</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Track documentation updates</li>
                <li>Note archived versions</li>
                <li>Include last updated dates</li>
                <li>Reference changelog if available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit version or model numbers</li>
              <li>Don't use unofficial product names</li>
              <li>Don't cite outdated documentation without noting version</li>
              <li>Don't forget to specify platform or system</li>
              <li>Don't ignore access restrictions or requirements</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 