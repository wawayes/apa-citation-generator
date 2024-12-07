'use client';

import Link from 'next/link';

export default function CourtCasesPage() {
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
          <li className="before:content-['/'] before:mx-2">Court Cases</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Court Cases</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite court cases and legal decisions in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Party v. Party, Volume Source Page (Court Year).
            </p>
            <p className="font-mono text-sm">
              Party v. Party, Volume Source Page (Court Year). URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Supreme Court Case</h3>
            <p className="font-mono text-sm mb-2">
              Brown v. Board of Education, 347 U.S. 483 (1954).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Federal Circuit Court Case</h3>
            <p className="font-mono text-sm mb-2">
              United States v. Windsor, 570 F.3d 744 (2d Cir. 2009).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">State Supreme Court Case</h3>
            <p className="font-mono text-sm mb-2">
              People v. Anderson, 6 Cal. 3d 628 (1972).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Case Names</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the names of both parties, separated by "v."</li>
                <li>Italicize the "v." in the citation</li>
                <li>Abbreviate common terms (e.g., "United States" to "U.S.")</li>
                <li>Remove "et al." from case names</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Court Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include the court name in parentheses</li>
                <li>Use standard abbreviations for courts</li>
                <li>Add the year of the decision</li>
                <li>Include jurisdiction if relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Reporter Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cite the official reporter when available</li>
                <li>Include volume number and page number</li>
                <li>Use parallel citations when necessary</li>
                <li>Follow The Bluebook format for reporter abbreviations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For unreported cases, use docket numbers and court information</li>
              <li>Include "cert. denied" or "cert. granted" information if relevant</li>
              <li>Note if the case was overruled or amended</li>
              <li>For pending cases, indicate current status</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full case name:</p>
              <p className="font-mono text-sm">
                In Brown v. Board of Education (1954), the Court ruled...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use a shortened form:</p>
              <p className="font-mono text-sm">
                The Brown decision established...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Online Sources</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Digital Access</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include URLs for cases from online legal databases</li>
              <li>Use official court websites when possible</li>
              <li>Add database information for subscription services</li>
              <li>Include retrieval dates for online sources that may change</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse different reporter systems (e.g., F.3d vs. F. Supp.)</li>
              <li>Don't omit parallel citations when required</li>
              <li>Don't forget to indicate subsequent history</li>
              <li>Don't use informal case names in formal citations</li>
              <li>Don't mix citation styles (stick to either APA or legal citation style)</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 