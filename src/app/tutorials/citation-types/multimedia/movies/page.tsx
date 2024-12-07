'use client';

import Link from 'next/link';

export default function MoviesPage() {
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
          <li className="before:content-['/'] before:mx-2">Movies</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Movies</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite movies, films, documentaries, and other motion pictures in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Director, D. D. (Director). (Year). <em>Title of movie</em> [Film]. Production Company.
            </p>
            <p className="font-mono text-sm">
              Producer, P. P. (Executive Producer). (Year). <em>Title of documentary</em> [Documentary]. Production Company.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Feature Film</h3>
            <p className="font-mono text-sm mb-2">
              Nolan, C. (Director). (2010). <em>Inception</em> [Film]. Warner Bros. Pictures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Documentary</h3>
            <p className="font-mono text-sm mb-2">
              Guggenheim, D. (Director). (2006). <em>An Inconvenient Truth</em> [Documentary]. Paramount Classics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Streaming Film</h3>
            <p className="font-mono text-sm mb-2">
              Fincher, D. (Director). (2020). <em>Mank</em> [Film]. Netflix.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Director's name</li>
                <li>Producer's name</li>
                <li>Multiple contributors</li>
                <li>Production roles</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Film Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of film</li>
                <li>Release year</li>
                <li>Film format</li>
                <li>Special editions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Production Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Production company</li>
                <li>Distribution platform</li>
                <li>Country of origin</li>
                <li>Release information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Film Types</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Theatrical Releases</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Feature films</li>
                <li>Short films</li>
                <li>Animated films</li>
                <li>International films</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Non-theatrical Films</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Documentaries</li>
                <li>Educational films</li>
                <li>Made-for-TV movies</li>
                <li>Streaming originals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Foreign language films</li>
              <li>Director's cuts</li>
              <li>Film series</li>
              <li>Unreleased films</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the director's name and year:</p>
              <p className="font-mono text-sm">
                In Nolan's (2010) film Inception...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use parenthetical citation:</p>
              <p className="font-mono text-sm">
                The film (Nolan, 2010) explores...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Copyright and Fair Use</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Film copyright information</li>
              <li>Fair use guidelines</li>
              <li>Screening rights</li>
              <li>Educational use</li>
              <li>Clip usage rights</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse director with producer</li>
              <li>Don't omit format information</li>
              <li>Don't forget production company</li>
              <li>Don't mix citation styles</li>
              <li>Don't ignore release year</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 