'use client';

import Link from 'next/link';

export default function InTextCitationPage() {
  return (
    <div className="container mx-auto px-4">
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">In-text Citations</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>APA In-text Citations</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly use in-text citations in APA format, including parenthetical and narrative citations.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">Parenthetical Citation</h3>
            <p className="font-mono text-sm mb-4">
              (Author, Year) or (Author, Year, p. XX)
            </p>
            <h3 className="font-semibold mb-4">Narrative Citation</h3>
            <p className="font-mono text-sm">
              Author (Year) or Author (Year, p. XX)
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Single Author</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Parenthetical:</p>
                  <p className="font-mono text-sm">Research indicates that mindfulness reduces stress (Smith, 2023).</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Narrative:</p>
                  <p className="font-mono text-sm">Smith (2023) found that mindfulness reduces stress.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Two Authors</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Parenthetical:</p>
                  <p className="font-mono text-sm">The study revealed significant results (Smith & Jones, 2023).</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Narrative:</p>
                  <p className="font-mono text-sm">Smith and Jones (2023) discovered significant results.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Three or More Authors</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Parenthetical:</p>
                  <p className="font-mono text-sm">The experiment confirmed previous findings (Smith et al., 2023).</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Narrative:</p>
                  <p className="font-mono text-sm">Smith et al. (2023) confirmed previous findings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Group Authors</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">First citation:</p>
                  <p className="font-mono text-sm">(World Health Organization [WHO], 2023)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Subsequent citations:</p>
                  <p className="font-mono text-sm">(WHO, 2023)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">No Author</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Use title:</p>
                  <p className="font-mono text-sm">("Article Title," 2023)</p>
                  <p className="text-sm text-gray-600 mt-2">Use quotation marks for articles and chapters; italicize longer works</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">No Date</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-sm">(Smith, n.d.)</p>
                  <p className="text-sm text-gray-600 mt-2">Use "n.d." for no date</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Page Numbers and Direct Quotes</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Short quote:</p>
                <p className="font-mono text-sm">Smith (2023) argued that "mindfulness is essential" (p. 42).</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Long quote (40+ words):</p>
                <p className="font-mono text-sm">Smith (2023) provided a detailed analysis:</p>
                <p className="font-mono text-sm ml-8 my-4">The research demonstrated that regular practice of mindfulness techniques led to significant improvements in stress management and emotional regulation among participants over the six-month study period. (p. 42)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Multiple Sources</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Same author, different years:</p>
                <p className="font-mono text-sm">(Smith, 2022, 2023)</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Different authors:</p>
                <p className="font-mono text-sm">(Jones, 2022; Smith, 2023)</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Same author, same year:</p>
                <p className="font-mono text-sm">(Smith, 2023a, 2023b)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Secondary Sources</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Citing a source within another source:</p>
                <p className="font-mono text-sm">Johnson (as cited in Smith, 2023)</p>
                <p className="text-sm text-gray-600 mt-2">Only include the secondary source (Smith) in the reference list</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include first names in citations</li>
              <li>Don't forget to include page numbers for direct quotes</li>
              <li>Don't mix citation styles within the same document</li>
              <li>Don't use "and" in parenthetical citations (use &)</li>
              <li>Don't include the month/day unless citing specific documents like newspapers</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Tips for Clarity</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Varying Citation Styles</h3>
              <p className="mb-4">Mix parenthetical and narrative citations to improve readability:</p>
              <div className="space-y-2">
                <p className="font-mono text-sm">Smith (2023) found significant results. This aligns with previous research (Jones, 2022) that showed similar patterns.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Integrating Multiple Sources</h3>
              <p className="mb-4">Synthesize information from multiple sources:</p>
              <div className="space-y-2">
                <p className="font-mono text-sm">Several studies have found similar results (Jones, 2022; Smith, 2023; Wilson, 2021).</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 