import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'APA Format Basics | APA Citation Generator',
  description: 'Learn the fundamental rules and principles of APA citation format. Comprehensive guide to APA style basics.',
  keywords: 'APA format, citation basics, APA style guide, academic writing',
};

export default function APABasicsPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2 px-4 rounded-lg mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">APA Basics</li>
        </ol>
      </div>

      <div className="max-w-4xl mx-auto">
        <article className="prose prose-indigo max-w-none">
          <h1>APA Format Basics</h1>
          
          <section className="mb-12">
            <h2>What is APA Style?</h2>
            <p>
              APA (American Psychological Association) style is one of the most widely used formatting and citation styles in academic writing, particularly in the social sciences.
            </p>
          </section>

          <section className="mb-12">
            <h2>Key Elements of APA Style</h2>
            <ul>
              <li>
                <strong>In-text Citations</strong>: Brief references within your text that point to the full reference list entry.
              </li>
              <li>
                <strong>Reference List</strong>: Detailed information about all sources cited in your work.
              </li>
              <li>
                <strong>Page Formatting</strong>: Specific guidelines for margins, spacing, and headings.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Basic Citation Rules</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3>Author-Date Citation System</h3>
              <p>APA uses an author-date citation system, consisting of:</p>
              <ul>
                <li>Author&apos;s last name</li>
                <li>Year of publication</li>
                <li>Page numbers (for direct quotes)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2>Common Citation Examples</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 border border-gray-200 rounded-lg">
                <h4>Basic Format</h4>
                <code>(Author, Year)</code>
                <p className="text-sm text-gray-600 mt-2">Example: (Smith, 2023)</p>
              </div>
              
              <div className="bg-white p-4 border border-gray-200 rounded-lg">
                <h4>Direct Quote</h4>
                <code>(Author, Year, p. XX)</code>
                <p className="text-sm text-gray-600 mt-2">Example: (Smith, 2023, p. 45)</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2>Interactive Examples</h2>
            <div className="not-prose">
              <div className="bg-indigo-50 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold text-indigo-900">Try it yourself</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="text-sm text-gray-600 mb-2">Original text:</p>
                    <div className="font-mono p-2 bg-gray-50 rounded">
                      The study found significant results.
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="text-sm text-gray-600 mb-2">With citation:</p>
                    <div className="font-mono p-2 bg-gray-50 rounded">
                      The study found significant results (Smith, 2023).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2>Related Tutorials</h2>
            <div className="not-prose grid md:grid-cols-2 gap-4">
              <Link 
                href="/tutorials/in-text-citation"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">In-Text Citation Guide →</h3>
                <p className="text-gray-600">Learn more about in-text citations</p>
              </Link>
              <Link 
                href="/tutorials/reference-list"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">Reference List Guide →</h3>
                <p className="text-gray-600">Create proper reference lists</p>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2>Practice Exercises</h2>
            <div className="not-prose space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Exercise 1: Basic Citations</h3>
                <p className="text-gray-700 mb-4">Format these citations in APA style:</p>
                <ol className="list-decimal list-inside space-y-3">
                  <li>Author: John Smith, Year: 2023, Title: Modern Research Methods</li>
                  <li>Author: Sarah Johnson, Year: 2022, Title: Digital Learning</li>
                </ol>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
} 