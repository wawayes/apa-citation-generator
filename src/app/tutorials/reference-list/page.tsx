'use client';

import Link from 'next/link';

export default function ReferenceListPage() {
  return (
    <div className="container mx-auto px-4">
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials" className="hover:text-indigo-600">Tutorials</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Reference List</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>APA Reference List Guide</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create and format your reference list in APA style, including proper organization, formatting, and examples for different source types.
        </p>

        <section className="mb-12">
          <h2>Basic Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Start the reference list on a new page</li>
              <li>Center the title "References" at the top</li>
              <li>Double-space all entries</li>
              <li>Use hanging indentation (0.5 inch/1.27 cm)</li>
              <li>Alphabetize entries by author's last name</li>
              <li>Include all sources cited in the text</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>General Format</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4">Basic Structure</h3>
            <p className="font-mono text-sm mb-6">
              Author, A. A., & Author, B. B. (Year). <em>Title of work</em>. Source.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Author Element:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Last name, followed by initials</li>
                  <li>Use & for multiple authors in reference list</li>
                  <li>List up to 20 authors</li>
                  <li>For 21+ authors, list first 19, ... last author</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Date Element:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Use parentheses</li>
                  <li>Include year for most sources</li>
                  <li>Add month for magazines, newsletters</li>
                  <li>Use "n.d." if no date is available</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Title Element:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Capitalize only first word and proper nouns</li>
                  <li>Italicize titles of longer works</li>
                  <li>Use quotation marks for shorter works</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Source Element:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Include publisher for books</li>
                  <li>Add DOI or URL for online sources</li>
                  <li>Specify database name if necessary</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples by Source Type</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Journal Article</h3>
              <p className="font-mono text-sm mb-4">
                Smith, J. D., & Johnson, M. R. (2023). Effects of mindfulness on stress reduction. <em>Journal of Psychology, 45</em>(2), 123-145. https://doi.org/10.1000/journal.psych.2023
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Include DOI when available</li>
                <li>Include issue number in parentheses</li>
                <li>Italicize journal title and volume number</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Book</h3>
              <p className="font-mono text-sm mb-4">
                Wilson, A. B. (2022). <em>Understanding cognitive development</em>. Academic Press.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Italicize book title</li>
                <li>Include publisher name</li>
                <li>Omit location unless necessary</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Website</h3>
              <p className="font-mono text-sm mb-4">
                National Institute of Mental Health. (2023, July 15). <em>Depression: What you need to know</em>. https://www.nimh.nih.gov/depression
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Include retrieval date only for changing content</li>
                <li>Use specific date if available</li>
                <li>Include direct URL</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">No Author</h3>
              <p className="font-mono text-sm mb-4">
                <em>Merriam-Webster's collegiate dictionary</em> (11th ed.). (2003). Merriam-Webster.
              </p>
              <p className="text-sm text-gray-600">Move title to author position</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Organization as Author</h3>
              <p className="font-mono text-sm mb-4">
                World Health Organization. (2023). <em>Global health report 2023</em>. https://www.who.int/reports/2023
              </p>
              <p className="text-sm text-gray-600">Write out full organization name</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Formatting Tips</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Hanging Indentation</h3>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="font-mono text-sm mb-2">First line starts at margin</p>
                  <p className="font-mono text-sm ml-8">Subsequent lines are indented</p>
                  <p className="font-mono text-sm ml-8">0.5 inch (1.27 cm) from margin</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Alphabetization Rules</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ignore "A", "An", "The" at beginning of titles</li>
                  <li>Use nothing-precedes-something principle</li>
                  <li>Alphabetize letter by letter</li>
                  <li>Treat Mc and Mac as spelled out</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include sources not cited in text</li>
              <li>Don't forget hanging indentation</li>
              <li>Don't mix citation styles</li>
              <li>Don't abbreviate journal titles unless standard</li>
              <li>Don't include personal communications</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Digital Object Identifiers (DOIs)</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Format:</p>
                <p className="font-mono text-sm">https://doi.org/10.xxxx/xxxxx</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Guidelines:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Always include DOI when available</li>
                  <li>Use https://doi.org/ format</li>
                  <li>No period after DOI</li>
                  <li>Present as hyperlink if possible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 