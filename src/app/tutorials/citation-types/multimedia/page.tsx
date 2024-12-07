'use client';

import Link from 'next/link';

export default function MultimediaPage() {
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
          <li className="before:content-['/'] before:mx-2">Multimedia Resources</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Multimedia Resources</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite various types of multimedia resources in APA format, including videos, podcasts, artwork, music, and more.
        </p>

        <section className="mb-12">
          <h2>Overview</h2>
          <p>
            Multimedia resources encompass a wide range of digital and non-digital content types. Each type has its own specific citation format while following general APA principles. This guide will help you understand how to cite different multimedia resources correctly.
          </p>
        </section>

        <section className="mb-12">
          <h2>Multimedia Resource Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/videos" className="text-indigo-600 hover:text-indigo-800">
                  Videos
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to cite online videos, movies, documentaries, and other video content.
              </p>
              <Link href="/tutorials/citation-types/multimedia/videos" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/podcasts" className="text-indigo-600 hover:text-indigo-800">
                  Podcasts
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Guidelines for citing podcast episodes, series, and audio broadcasts.
              </p>
              <Link href="/tutorials/citation-types/multimedia/podcasts" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/artwork" className="text-indigo-600 hover:text-indigo-800">
                  Artwork
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How to cite paintings, sculptures, and other visual artworks.
              </p>
              <Link href="/tutorials/citation-types/multimedia/artwork" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/music" className="text-indigo-600 hover:text-indigo-800">
                  Music
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Citation formats for songs, albums, and musical compositions.
              </p>
              <Link href="/tutorials/citation-types/multimedia/music" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/speeches" className="text-indigo-600 hover:text-indigo-800">
                  Speeches
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How to cite recorded speeches, presentations, and lectures.
              </p>
              <Link href="/tutorials/citation-types/multimedia/speeches" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/radio" className="text-indigo-600 hover:text-indigo-800">
                  Radio
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Guidelines for citing radio broadcasts and programs.
              </p>
              <Link href="/tutorials/citation-types/multimedia/radio" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/maps" className="text-indigo-600 hover:text-indigo-800">
                  Maps
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How to cite maps, atlases, and geographic data.
              </p>
              <Link href="/tutorials/citation-types/multimedia/maps" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/charts" className="text-indigo-600 hover:text-indigo-800">
                  Charts and Graphs
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Citation formats for charts, graphs, and data visualizations.
              </p>
              <Link href="/tutorials/citation-types/multimedia/charts" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/photographs" className="text-indigo-600 hover:text-indigo-800">
                  Photographs
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How to cite photographs and digital images.
              </p>
              <Link href="/tutorials/citation-types/multimedia/photographs" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/illustrations" className="text-indigo-600 hover:text-indigo-800">
                  Illustrations
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Guidelines for citing illustrations and drawings.
              </p>
              <Link href="/tutorials/citation-types/multimedia/illustrations" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                <Link href="/tutorials/citation-types/multimedia/audio" className="text-indigo-600 hover:text-indigo-800">
                  Audio
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                How to cite audio recordings and sound effects.
              </p>
              <Link href="/tutorials/citation-types/multimedia/audio" className="text-sm text-indigo-600 hover:text-indigo-800">
                View guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always include the type of medium in square brackets</li>
              <li>Provide access information for online resources</li>
              <li>Include creator and copyright information</li>
              <li>Specify the format or platform when relevant</li>
              <li>Follow standard APA author-date format for in-text citations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Creator Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Author, artist, or creator name</li>
                <li>Production roles when relevant</li>
                <li>Organization or institution</li>
                <li>Multiple contributors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Source Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title of work</li>
                <li>Medium or format</li>
                <li>Publication or creation date</li>
                <li>Version or edition information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>URL or DOI</li>
                <li>Database name</li>
                <li>Physical location</li>
                <li>Retrieval date when necessary</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 