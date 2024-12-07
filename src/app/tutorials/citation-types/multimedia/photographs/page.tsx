'use client';

import Link from 'next/link';

export default function PhotographsPage() {
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
          <li className="before:content-['/'] before:mx-2">Photographs</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Photographs</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite photographs, digital images, and other visual materials in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Photographer, P. P. (Year). <em>Title of photograph</em> [Photograph]. Museum/Collection. URL
            </p>
            <p className="font-mono text-sm">
              Photographer, P. P. (Year, Month Day). <em>Title of photograph</em> [Digital image]. Website Name. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Museum Photograph</h3>
            <p className="font-mono text-sm mb-2">
              Adams, A. (1942). <em>Mount Williamson, Sierra Nevada</em> [Photograph]. Museum of Modern Art, New York.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Online Photograph</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. (2023, October 1). <em>Autumn leaves in Central Park</em> [Digital photograph]. National Geographic. https://www.nationalgeographic.com/photos
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Stock Photograph</h3>
            <p className="font-mono text-sm mb-2">
              Getty Images. (2023). <em>Business meeting in modern office</em> [Stock photograph]. Retrieved October 15, 2023, from https://www.gettyimages.com
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Photographer's name</li>
                <li>Agency/Studio</li>
                <li>Collection owner</li>
                <li>Rights holder</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Image Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of photograph</li>
                <li>Date taken</li>
                <li>Medium/Format</li>
                <li>Series information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Source Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Collection name</li>
                <li>Institution</li>
                <li>Location</li>
                <li>Access information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Photograph Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Physical Photographs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prints</li>
                <li>Negatives</li>
                <li>Slides</li>
                <li>Contact sheets</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Photographs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital images</li>
                <li>Stock photos</li>
                <li>Social media images</li>
                <li>Online galleries</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Untitled photographs</li>
              <li>Anonymous photographers</li>
              <li>Modified images</li>
              <li>Personal collections</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the photographer's name and year:</p>
              <p className="font-mono text-sm">
                In Adams's (1942) photograph of Mount Williamson...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The photograph (Adams, 1942) captures...
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
              <li>Model releases</li>
              <li>Licensing terms</li>
              <li>Attribution requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit photographer credit</li>
              <li>Don't forget date information</li>
              <li>Don't ignore copyright status</li>
              <li>Don't mix citation styles</li>
              <li>Don't neglect medium specification</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 