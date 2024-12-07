'use client';

import Link from 'next/link';

export default function UnpublishedDataPage() {
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
            <Link href="/tutorials/citation-types/datasets" className="hover:text-indigo-600">Datasets & Software</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Unpublished Raw Data</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Unpublished Raw Data</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite unpublished or privately held research data in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author(s). (Year). <em>Title of unpublished data set</em> [Unpublished raw data]. Institution/Organization.
            </p>
            <p className="font-mono text-sm">
              Author(s). (Year). <em>Title of unpublished data set</em> [Unpublished raw data]. Personal collection.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Institutional Data</h3>
            <p className="font-mono text-sm mb-2">
              Research Team A. (2023). <em>Patient response data from clinical trial XYZ</em> [Unpublished raw data]. Stanford University Medical Center.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Personal Research Data</h3>
            <p className="font-mono text-sm mb-2">
              Johnson, M. R. (2022). <em>Survey responses from community health study</em> [Unpublished raw data]. Personal collection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Collaborative Project Data</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. D., & Wilson, K. L. (2023). <em>Field observations of arctic wildlife</em> [Unpublished raw data]. Arctic Research Institute.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Data Description</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide clear, descriptive title</li>
                <li>Include data collection dates</li>
                <li>Specify data type and format</li>
                <li>Note collection methodology</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Source Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify data collectors/creators</li>
                <li>Include institutional affiliations</li>
                <li>Note funding sources if relevant</li>
                <li>Specify research project details</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Describe data location</li>
                <li>Note access restrictions</li>
                <li>Include contact information</li>
                <li>Specify permission requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For confidential data, note privacy protections</li>
              <li>Include IRB or ethics approval information</li>
              <li>Specify data sharing agreements</li>
              <li>Note any planned publication</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full source description:</p>
              <p className="font-mono text-sm">
                The analysis used unpublished data from the Research Team A (2023) clinical trial...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use abbreviated form:</p>
              <p className="font-mono text-sm">
                The results (Research Team A, 2023) indicated...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Data Management</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain detailed metadata</li>
                <li>Create data dictionaries</li>
                <li>Document collection procedures</li>
                <li>Keep processing notes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Storage</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use secure storage solutions</li>
                <li>Implement backup procedures</li>
                <li>Control access permissions</li>
                <li>Plan for long-term preservation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Ethical Considerations</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Protect participant confidentiality</li>
              <li>Follow data protection regulations</li>
              <li>Obtain necessary permissions</li>
              <li>Consider cultural sensitivities</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit [Unpublished raw data] designation</li>
              <li>Don't provide insufficient data description</li>
              <li>Don't forget access information</li>
              <li>Don't ignore confidentiality requirements</li>
              <li>Don't neglect documentation details</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 