'use client';

import Link from 'next/link';

export default function IllustrationsPage() {
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
          <li className="before:content-['/'] before:mx-2">Illustrations</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Illustrations</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite illustrations, drawings, diagrams, and other artistic works in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Illustrator, I. I. (Year). <em>Title of illustration</em> [Illustration]. In <em>Book title</em>. Publisher.
            </p>
            <p className="font-mono text-sm">
              Artist, A. A. (Year). <em>Title of artwork</em> [Type of illustration]. Museum/Collection. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Book Illustration</h3>
            <p className="font-mono text-sm mb-2">
              Sendak, M. (1963). <em>Max in his wolf suit</em> [Illustration]. In <em>Where the Wild Things Are</em>. Harper & Row.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Digital Illustration</h3>
            <p className="font-mono text-sm mb-2">
              Johnson, K. (2023). <em>Future city concept</em> [Digital illustration]. ArtStation. https://www.artstation.com/artwork/future-city
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Technical Diagram</h3>
            <p className="font-mono text-sm mb-2">
              Technical Institute. (2023). <em>Cross-section of jet engine</em> [Technical illustration]. Engineering Handbook Online. https://www.handbook.org/diagrams
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illustrator's name</li>
                <li>Artist's name</li>
                <li>Studio/Agency</li>
                <li>Publisher</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Illustration Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of work</li>
                <li>Type of illustration</li>
                <li>Medium used</li>
                <li>Series information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Source Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication details</li>
                <li>Book/Journal title</li>
                <li>Page number</li>
                <li>Access information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Illustration Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Traditional Illustrations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pencil drawings</li>
                <li>Ink illustrations</li>
                <li>Watercolor paintings</li>
                <li>Mixed media</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Illustrations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vector graphics</li>
                <li>Digital paintings</li>
                <li>3D renderings</li>
                <li>Concept art</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Book covers</li>
              <li>Editorial illustrations</li>
              <li>Scientific diagrams</li>
              <li>Commissioned works</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the illustrator's name and year:</p>
              <p className="font-mono text-sm">
                In Sendak's (1963) illustration...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The illustration (Sendak, 1963) shows...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Usage</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Copyright status</li>
              <li>Usage rights</li>
              <li>Reproduction permissions</li>
              <li>Licensing terms</li>
              <li>Attribution requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit illustrator credit</li>
              <li>Don't forget medium specification</li>
              <li>Don't ignore source publication</li>
              <li>Don't mix citation styles</li>
              <li>Don't neglect copyright information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 