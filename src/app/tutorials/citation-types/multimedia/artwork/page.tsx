'use client';

import Link from 'next/link';

export default function ArtworkPage() {
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
          <li className="before:content-['/'] before:mx-2">Artwork</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Artwork</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite paintings, sculptures, photographs, and other visual art in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Artist, A. A. (Year). <em>Title of artwork</em> [Medium]. Museum/Institution, Location. URL
            </p>
            <p className="font-mono text-sm">
              Artist, A. A. (Year). <em>Title of artwork</em> [Description of form]. Museum/Institution. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Museum Artwork</h3>
            <p className="font-mono text-sm mb-2">
              van Gogh, V. (1889). <em>The Starry Night</em> [Oil on canvas]. The Museum of Modern Art, New York, NY. https://www.moma.org/collection/works/79802
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Digital Artwork</h3>
            <p className="font-mono text-sm mb-2">
              Smith, J. (2023). <em>Digital Landscape #4</em> [Digital illustration]. DeviantArt. https://www.deviantart.com/artist/artwork
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Photograph</h3>
            <p className="font-mono text-sm mb-2">
              Adams, A. (1941). <em>Moonrise, Hernandez, New Mexico</em> [Photograph]. San Francisco Museum of Modern Art, San Francisco, CA.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Artist Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use full artist name</li>
                <li>Include multiple artists</li>
                <li>Note anonymous works</li>
                <li>Add artist nationality if relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Artwork Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify medium or technique</li>
                <li>Include dimensions if relevant</li>
                <li>Note series information</li>
                <li>Add creation date range</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Location Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include museum/gallery name</li>
                <li>Specify physical location</li>
                <li>Add collection details</li>
                <li>Note permanent/temporary status</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Artwork Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Traditional Art</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paintings</li>
                <li>Sculptures</li>
                <li>Drawings</li>
                <li>Prints</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Digital Art</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital paintings</li>
                <li>Computer graphics</li>
                <li>3D renderings</li>
                <li>Digital installations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For installations, note exhibition dates</li>
              <li>Include restoration information if relevant</li>
              <li>Specify edition number for prints</li>
              <li>Note commissioned works</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the artist name and year:</p>
              <p className="font-mono text-sm">
                In van Gogh's (1889) The Starry Night...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The painting (van Gogh, 1889) demonstrates...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Permissions</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Note copyright status</li>
              <li>Include permission information</li>
              <li>Add license details</li>
              <li>Specify usage rights</li>
              <li>Include image credits</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit medium or technique</li>
              <li>Don't forget location information</li>
              <li>Don't use informal artwork titles</li>
              <li>Don't ignore copyright requirements</li>
              <li>Don't mix citation formats</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 