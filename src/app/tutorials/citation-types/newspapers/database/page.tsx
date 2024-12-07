'use client';

import Link from 'next/link';

export default function DatabaseArticlesPage() {
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
            <Link href="/tutorials/citation-types/newspapers" className="hover:text-indigo-600">Newspapers & Magazines</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Database Articles</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Articles from News Databases</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for newspaper and magazine articles accessed through academic databases.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. (Year, Month Day). Title of article. Name of Newspaper/Magazine. Database Name.</p>
          </div>
          <p className="text-gray-600">
            Note: Database information is only included when the article is from a database that is not publicly accessible.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Historical Newspaper Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Williams, R. (1945, August 16). Victory celebrations in Times Square. The New York Times. ProQuest Historical Newspapers.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include database name for historical archives</li>
                <li>• Use original publication date</li>
                <li>• Omit URL for database articles</li>
                <li>• Include page numbers if available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Magazine Article with DOI</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Anderson, K., & Lee, M. (2023, July). Digital transformation in education. Education Weekly, 45(7), 12-15. https://doi.org/10.xxxx/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include DOI when available</li>
                <li>• Omit database name when DOI is present</li>
                <li>• Include volume and issue numbers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Regional Newspaper Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Local economy shows growth. (2020, March 15). The Daily Tribune, p. B3. NewsBank.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include database for regional papers</li>
                <li>• Add section and page numbers if available</li>
                <li>• Start with title if no author is listed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Microfilm/Microfiche</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J. (1932, June 5). Depression affects local businesses [Microfilm]. The Chicago Tribune, p. 4.
              </div>
              <p className="text-gray-600 mb-4">
                Specify the format [Microfilm] or [Microfiche] after the title.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Wire Service Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Associated Press. (2023, August 30). Global climate conference announced. Factiva.
              </div>
              <p className="text-gray-600 mb-4">
                Include wire service name as author and database name at the end.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Database-Specific Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Academic Databases</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ProQuest</li>
                <li>JSTOR</li>
                <li>EBSCO</li>
                <li>LexisNexis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">News Databases</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Factiva</li>
                <li>NewsBank</li>
                <li>Nexis Uni</li>
                <li>Newspaper Archive</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include database information for publicly available articles</li>
              <li>Don't include database URLs</li>
              <li>Don't include access dates unless content changes frequently</li>
              <li>Don't omit original publication information</li>
              <li>Don't include database subscriber information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 