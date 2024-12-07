'use client';

import Link from 'next/link';

export default function SoftwarePage() {
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
          <li className="before:content-['/'] before:mx-2">Computer Software</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Computer Software</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite software packages, programming languages, and scripts in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author(s). (Year). <em>Title of software</em> (Version number) [Computer software]. Publisher. URL
            </p>
            <p className="font-mono text-sm">
              Author(s). (Year). <em>Title of software</em> [Computer software]. Repository. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Commercial Software</h3>
            <p className="font-mono text-sm mb-2">
              IBM Corp. (2022). <em>SPSS Statistics</em> (Version 29.0) [Computer software]. IBM. https://www.ibm.com/products/spss-statistics
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Open Source Software</h3>
            <p className="font-mono text-sm mb-2">
              R Core Team. (2023). <em>R: A language and environment for statistical computing</em> [Computer software]. R Foundation for Statistical Computing. https://www.R-project.org/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Research Software</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. D. (2023). <em>DataAnalyzer</em> (Version 2.1) [Computer software]. GitHub. https://github.com/jdsmith/data-analyzer
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Software Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include version number</li>
                <li>Specify software type</li>
                <li>Note programming language</li>
                <li>Add platform requirements</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Developer Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>List individual developers</li>
                <li>Include organization names</li>
                <li>Note development teams</li>
                <li>Specify maintainers if different</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide download location</li>
                <li>Include repository links</li>
                <li>Note license type</li>
                <li>Specify access requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For programming languages, cite the implementation</li>
              <li>Include package dependencies if relevant</li>
              <li>Note any required plugins or extensions</li>
              <li>Specify development status (beta, stable, etc.)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full software name:</p>
              <p className="font-mono text-sm">
                The analysis was performed using SPSS Statistics (Version 29.0; IBM Corp., 2022)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use abbreviated form:</p>
              <p className="font-mono text-sm">
                The results were analyzed (SPSS 29.0; IBM Corp., 2022)...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Software Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Programming Languages</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cite specific implementation</li>
                <li>Include compiler version</li>
                <li>Note standard libraries</li>
                <li>Specify runtime environment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Software Libraries</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include package manager info</li>
                <li>Note version compatibility</li>
                <li>Specify dependencies</li>
                <li>Add installation instructions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Version Control</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Use specific commit hashes for exact versions</li>
              <li>Include release tags</li>
              <li>Note branch information</li>
              <li>Specify build numbers</li>
              <li>Document any patches or hotfixes</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit version numbers</li>
              <li>Don't use unofficial software names</li>
              <li>Don't forget system requirements</li>
              <li>Don't ignore license requirements</li>
              <li>Don't mix different versions in citations</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 