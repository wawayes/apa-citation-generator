'use client';

import Link from 'next/link';

export default function PublishedDatasetsPage() {
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
          <li className="before:content-['/'] before:mx-2">Published Datasets</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Published Datasets</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite formally published research datasets in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author(s). (Year). <em>Title of dataset</em> [Data set]. Publisher/Repository. DOI or URL
            </p>
            <p className="font-mono text-sm">
              Author(s). (Year). <em>Title of dataset</em> [Data set]. Database Name. Accession No.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Dataset with DOI</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. D., & Johnson, K. L. (2023). <em>Global climate patterns dataset 1990-2020</em> [Data set]. Zenodo. https://doi.org/10.5281/zenodo.1234567
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Dataset in Repository</h3>
            <p className="font-mono text-sm mb-2">
              National Center for Environmental Information. (2022). <em>U.S. hourly precipitation data</em> [Data set]. NOAA. https://www.ncei.noaa.gov/data/precipitation-hourly/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Dataset with Accession Number</h3>
            <p className="font-mono text-sm mb-2">
              Zhang, X., & Liu, Y. (2023). <em>Human genome sequencing data</em> [Data set]. GenBank. Accession No. MN908947
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Dataset Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include [Data set] in square brackets after title</li>
                <li>Specify version number if available</li>
                <li>Add data collection date range</li>
                <li>Note any subset information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Repository Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use official repository name</li>
                <li>Include persistent identifiers</li>
                <li>Add database-specific information</li>
                <li>Note institutional affiliations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide DOI when available</li>
                <li>Include stable URLs</li>
                <li>Add accession numbers</li>
                <li>Note access requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For dynamic datasets, include access date</li>
              <li>Note any data embargoes or restrictions</li>
              <li>Include funding information if required</li>
              <li>Specify data collection methodology if relevant</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full author name(s):</p>
              <p className="font-mono text-sm">
                Smith and Johnson (2023) provided data showing...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use standard author-date format:</p>
              <p className="font-mono text-sm">
                The analysis of climate patterns (Smith & Johnson, 2023) revealed...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Data Citations Best Practices</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Version Control</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cite specific version used</li>
                <li>Include version numbers</li>
                <li>Note any updates or revisions</li>
                <li>Track changes between versions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reference related publications</li>
                <li>Include methodology papers</li>
                <li>Link to data dictionaries</li>
                <li>Note supplementary materials</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit [Data set] designation</li>
              <li>Don't use unstable or temporary URLs</li>
              <li>Don't forget to specify version information</li>
              <li>Don't ignore repository-specific citation guidelines</li>
              <li>Don't mix different citation formats</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 