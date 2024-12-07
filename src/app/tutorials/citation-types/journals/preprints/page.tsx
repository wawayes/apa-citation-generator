'use client';

import Link from 'next/link';

export default function PreprintsPage() {
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
            <Link href="/tutorials/citation-types/journals" className="hover:text-indigo-600">Journals</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Preprints</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Preprints</h1>

        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to cite preprint articles from repositories like arXiv, bioRxiv, and other preprint servers.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="not-prose bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              Author, A. A., & Author, B. B. (Year). Title of preprint. <em>Name of Repository</em>. DOI or URL
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-lg">
            <h4>Example:</h4>
            <p className="font-mono text-sm">
              Smith, J. D., & Johnson, M. R. (2023). Machine learning approaches in cognitive science. <em>arXiv</em>. https://arxiv.org/abs/2023.12345
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Repository-Specific Formats</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">arXiv</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Wilson, K. L. (2023). Neural networks in natural language processing. <em>arXiv</em>. https://arxiv.org/abs/2023.67890
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">bioRxiv</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Brown, R. T. (2023). Genetic markers in cancer research. <em>bioRxiv</em>. https://doi.org/10.1101/2023.12.20.123456
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">PsyArXiv</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Davis, C. D. (2023). Cognitive development in early childhood. <em>PsyArXiv</em>. https://doi.org/10.31234/osf.io/abc123
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Narrative Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                Smith and Johnson (2023) proposed that...
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                According to Wilson (2023)...
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Parenthetical Citation</h3>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-2">
                ...(Smith & Johnson, 2023)
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                ...(Wilson, 2023, p. 12)
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Version Numbers</h3>
              <p className="mb-4">When citing a specific version of a preprint</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Miller, E. F. (2023). Data analysis methods [Version 2]. <em>arXiv</em>. https://arxiv.org/abs/2023.98765v2
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Supplementary Materials</h3>
              <p className="mb-4">When citing supplementary materials from a preprint</p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded">
                Thompson, A. B. (2023). Statistical analysis [Supplemental material]. <em>bioRxiv</em>. https://doi.org/10.1101/2023.11.15.987654
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>When Article is Published</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">When a preprint is later published in a journal:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Update the reference to cite the published version</li>
              <li>Include both preprint and published versions if discussing both</li>
              <li>Use the published version's DOI</li>
              <li>Include journal name and publication details</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="font-mono text-sm">
                Smith, J. D., & Johnson, M. R. (2023). Machine learning approaches in cognitive science. <em>Journal of Cognitive Science, 15</em>(4), 234-256. https://doi.org/10.1234/jcs.2023.789
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Points to Remember</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always indicate the repository name in italics</li>
              <li>Include version numbers when available</li>
              <li>Use DOIs when available, URLs if no DOI exists</li>
              <li>Check if the preprint has been published in a journal</li>
              <li>Consider citing both versions if discussing changes between preprint and published version</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 