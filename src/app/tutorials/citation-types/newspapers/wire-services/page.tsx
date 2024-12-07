'use client';

import Link from 'next/link';

export default function WireServicesPage() {
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
          <li className="before:content-['/'] before:mx-2">Wire Services</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Wire Service Articles</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for articles from news wire services and press releases.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Wire Service. (Year, Month Day). Title of article. Source Publication/Database.</p>
          </div>
          <p className="text-gray-600">
            Note: The format may vary depending on how the wire service article was accessed.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Standard Wire Service Article</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Associated Press. (2023, September 5). Global economic summit concludes with new agreements. AP News. https://apnews.com/article/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use wire service name as author</li>
                <li>• Include full date</li>
                <li>• Add URL if accessed online</li>
                <li>• Use wire service website name if applicable</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Wire Service via News Database</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Reuters. (2023, August 28). Tech companies announce AI guidelines. Factiva.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include database name instead of URL</li>
                <li>• Omit page numbers</li>
                <li>• Keep original publication date</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Press Release</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                PR Newswire. (2023, July 15). Company X launches new sustainable product line [Press release]. PR Newswire. https://www.prnewswire.com/news-releases/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Add [Press release] after title</li>
                <li>• Include wire service name twice if it's both author and publisher</li>
                <li>• Use direct URL to press release</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Major Wire Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">News Wire Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Associated Press (AP)</li>
                <li>Reuters</li>
                <li>Agence France-Presse (AFP)</li>
                <li>Bloomberg News</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Press Release Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>PR Newswire</li>
                <li>Business Wire</li>
                <li>Globe Newswire</li>
                <li>Market Wire</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Syndicated Articles</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Associated Press. (2023, August 25). Climate report findings [Reprinted in The Washington Post]. https://www.washingtonpost.com/xxxxx
              </div>
              <p className="text-gray-600 mb-4">
                Include information about where the wire service article was syndicated.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Multiple Wire Services</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Reuters & Associated Press. (2023, September 1). Breaking: Major international development. Global News Service.
              </div>
              <p className="text-gray-600 mb-4">
                List all wire services that contributed to the article.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't cite the newspaper that republished the wire story as the primary source</li>
              <li>Don't omit the wire service name as author</li>
              <li>Don't include reporter names unless specifically credited</li>
              <li>Don't mix database and direct access citation formats</li>
              <li>Don't include wire service internal reference numbers</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 