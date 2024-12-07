'use client';

import Link from 'next/link';

export default function ConferenceAbstractsPage() {
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
            <Link href="/tutorials/citation-types/conferences" className="hover:text-indigo-600">Conference Papers</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Conference Abstracts</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Conference Abstracts</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for published conference abstracts and summaries.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. (Year). Title of abstract [Abstract]. Conference Name, Location. Source/Database.</p>
          </div>
          <p className="text-gray-600">
            Note: The format may vary depending on whether the abstract is published in proceedings, a journal supplement, or an online database.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Abstract in Conference Proceedings</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J., & Wilson, R. (2023). Neural networks for climate prediction [Abstract]. In <em>Proceedings of the International Climate Conference</em> (p. 234). Climate Science Society.
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include page number in proceedings</li>
                <li>• Add [Abstract] after title</li>
                <li>• Include publishing organization</li>
                <li>• Note if part of proceedings</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Abstract in Journal Supplement</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Lee, M., & Park, S. (2023). Advances in quantum computing [Abstract]. <em>Journal of Physics, 45</em>(Suppl. 2), S123. https://doi.org/10.xxxx/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include journal information</li>
                <li>• Note supplement number</li>
                <li>• Add DOI when available</li>
                <li>• Use standard journal format</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Abstract Database</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, K. (2023). Machine learning in healthcare [Abstract]. Abstracts International Database. https://abstracts.org/record/789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include database name</li>
                <li>• Add direct URL to abstract</li>
                <li>• Omit conference location if not relevant</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Abstract of Unpublished Presentation</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Thompson, M. (2023, October). Data science applications [Abstract]. Paper presented at the Annual Technology Conference, Boston, MA, United States.
              </div>
              <p className="text-gray-600 mb-4">
                Include presentation details when citing unpublished abstracts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Translated Abstract</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Garcia, A. (2023). Inteligencia artificial en medicina [Artificial intelligence in medicine] [Abstract]. <em>Spanish Medical Conference Proceedings</em>, 45-46.
              </div>
              <p className="text-gray-600 mb-4">
                Include English translation in square brackets after original title.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Publication Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Print Publications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conference proceedings</li>
                <li>Abstract books</li>
                <li>Journal supplements</li>
                <li>Conference programs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Publications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online databases</li>
                <li>Conference websites</li>
                <li>Digital repositories</li>
                <li>Electronic proceedings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit [Abstract] designation</li>
              <li>Don't confuse abstracts with full papers</li>
              <li>Don't include unnecessary conference details</li>
              <li>Don't cite abstract without checking full paper availability</li>
              <li>Don't mix citation formats for different publication types</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always verify if a full paper is available</li>
              <li>Include abstract number if assigned</li>
              <li>Note if abstract is from a special issue</li>
              <li>Specify the publication format</li>
              <li>Include permanent identifiers when available</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 