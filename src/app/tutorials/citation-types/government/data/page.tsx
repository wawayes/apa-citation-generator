'use client';

import Link from 'next/link';

export default function GovernmentDataPage() {
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
          <li className="before:content-['/'] before:mx-2">Government Data</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Government Data</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite government statistics, datasets, and databases in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Author. (Year). <em>Title of dataset</em> [Data set]. Publisher. URL
            </p>
            <p className="font-mono text-sm">
              Author. (Year). <em>Title of dataset</em> [Data set]. DOI
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Census Data</h3>
            <p className="font-mono text-sm mb-2">
              U.S. Census Bureau. (2020). <em>American Community Survey 5-year estimates</em> [Data set]. https://data.census.gov/
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Federal Statistics</h3>
            <p className="font-mono text-sm mb-2">
              Bureau of Labor Statistics. (2021). <em>Consumer Price Index Historical Data</em> [Data set]. U.S. Department of Labor. https://www.bls.gov/cpi/data.htm
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Research Database</h3>
            <p className="font-mono text-sm mb-2">
              National Center for Education Statistics. (2019). <em>Integrated Postsecondary Education Data System</em> [Data set]. https://nces.ed.gov/ipeds/
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Dataset Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include [Data set] in square brackets after the title</li>
                <li>Specify the version or wave of data if applicable</li>
                <li>Add any unique identifiers or accession numbers</li>
                <li>Note if the data is part of a larger collection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide direct URLs to the dataset when available</li>
                <li>Include DOIs if assigned</li>
                <li>Note any access restrictions or requirements</li>
                <li>Add retrieval dates for dynamic databases</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Date Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the year of dataset publication</li>
                <li>Include date ranges for time-series data</li>
                <li>Note update frequency for ongoing collections</li>
                <li>Specify the version date if multiple versions exist</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For unpublished raw data, include description of format</li>
              <li>Note any data cleaning or processing steps</li>
              <li>Include codebook references if available</li>
              <li>Specify geographic coverage for regional data</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full agency name:</p>
              <p className="font-mono text-sm">
                According to the U.S. Census Bureau (2020)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use the abbreviated form:</p>
              <p className="font-mono text-sm">
                The census data (USCB, 2020) showed...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Data Visualization Citations</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">When Using Data in Figures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include data source in figure notes</li>
              <li>Specify which variables or measures were used</li>
              <li>Note any calculations or transformations</li>
              <li>Add date range for time-series visualizations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't forget to specify the data format or type</li>
              <li>Don't omit version information for updated datasets</li>
              <li>Don't use unofficial source URLs when official ones exist</li>
              <li>Don't mix different dataset versions without clear indication</li>
              <li>Don't forget to note any data access restrictions</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 