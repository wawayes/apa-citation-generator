'use client';

import Link from 'next/link';

export default function ChartsPage() {
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
            <Link href="/tutorials/citation-types/multimedia" className="hover:text-indigo-600">Multimedia Resources</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Charts and Graphs</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Charts and Graphs</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite charts, graphs, diagrams, and other visual data representations in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Creator, C. C. (Year). <em>Title of chart</em> [Chart]. In <em>Source title</em>. Publisher. URL
            </p>
            <p className="font-mono text-sm">
              Organization. (Year). <em>Title of graph</em> [Graph]. Retrieved Month Day, Year, from URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Published Chart</h3>
            <p className="font-mono text-sm mb-2">
              World Health Organization. (2023). <em>Global vaccination rates by region</em> [Chart]. In <em>World Health Statistics 2023</em>. WHO Press.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Online Graph</h3>
            <p className="font-mono text-sm mb-2">
              U.S. Bureau of Labor Statistics. (2023). <em>Unemployment rate by state</em> [Interactive graph]. Retrieved October 15, 2023, from https://www.bls.gov/charts
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Data Visualization</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. (2023). <em>Climate change impact on global temperatures</em> [Data visualization]. Nature Climate Change, 13(2), 45-67.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Author's name</li>
                <li>Organization</li>
                <li>Publisher</li>
                <li>Data source</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Visual Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of visual</li>
                <li>Type of visualization</li>
                <li>Data range</li>
                <li>Version/Edition</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Publication Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication date</li>
                <li>Source document</li>
                <li>Access date</li>
                <li>URL if online</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Visual Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Charts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bar charts</li>
                <li>Pie charts</li>
                <li>Line charts</li>
                <li>Flow charts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Graphs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scatter plots</li>
                <li>Histograms</li>
                <li>Area graphs</li>
                <li>Network graphs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Interactive visualizations</li>
              <li>Dynamic data</li>
              <li>Multiple datasets</li>
              <li>Custom visualizations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the creator's name and year:</p>
              <p className="font-mono text-sm">
                According to WHO's (2023) vaccination chart...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The data visualization (WHO, 2023) indicates...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Data Usage</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Visual copyright</li>
              <li>Data usage rights</li>
              <li>Reproduction permissions</li>
              <li>Attribution requirements</li>
              <li>Data licenses</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit data source</li>
              <li>Don't forget visualization type</li>
              <li>Don't ignore access date for online visuals</li>
              <li>Don't mix citation styles</li>
              <li>Don't neglect data attribution</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 