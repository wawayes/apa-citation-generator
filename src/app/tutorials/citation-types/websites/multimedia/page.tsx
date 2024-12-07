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
          <li className="before:content-['/'] before:mx-2">
            <Link href="/tutorials/citation-types/websites" className="hover:text-indigo-600">Websites</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Online Multimedia</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Online Multimedia Content</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite various types of online multimedia content, including videos, podcasts, and other audiovisual materials.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. [Username]. (Year, Month Day). Title of work [Media type]. Platform/Publisher. URL</p>
          </div>
          <p className="text-gray-600">
            Note: Include the media type in square brackets (e.g., [Video], [Audio podcast episode], [Webinar], etc.).
          </p>
        </section>

        <section className="mb-12">
          <h2>Types of Multimedia Content</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">YouTube Videos</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Academic Skills Center. (2023, June 15). How to cite sources in APA format [Video]. YouTube. https://youtube.com/watch?v=123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include channel name as author</li>
                <li>• Specify [Video] as media type</li>
                <li>• Use exact upload date</li>
                <li>• Include direct URL to video</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Podcast Episodes</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J. (Host). (2023, July 1). Understanding academic citations [Audio podcast episode]. In Research Tips Podcast. Spotify. https://open.spotify.com/episode/123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include host name and role</li>
                <li>• Specify podcast series name</li>
                <li>• Include platform name</li>
                <li>• Use permanent episode link</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Webinars</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Johnson, M., & Chen, R. (2023, August 10). Best practices in academic writing [Webinar]. University Writing Center. https://example.edu/webinars/academic-writing
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• List all presenters</li>
                <li>• Include organization name</li>
                <li>• Specify [Webinar] as type</li>
                <li>• Add recording URL if available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">TED Talks</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, A. (2023, May). The evolution of citation styles [Video]. TED Conferences. https://www.ted.com/talks/123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use speaker's name as author</li>
                <li>• Include month and year</li>
                <li>• Specify TED Conferences as publisher</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Streaming Series Episodes</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Wilson, K. (Director). (2023). Episode title [TV series episode]. In Show Title. Streaming Service. https://service.com/show/episode
              </div>
              <p className="text-gray-600 mb-4">
                Include director, episode title, series title, and streaming platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Course Videos</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                University Name. (2023). Lecture 1: Introduction to citations [Video]. Course Name. Learning Platform. https://platform.com/course/video
              </div>
              <p className="text-gray-600 mb-4">
                Include institution name, lecture title, course name, and platform.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't forget to specify the media type</li>
              <li>Don't use timestamps as permanent identifiers</li>
              <li>Don't cite content that may be removed or is not publicly accessible</li>
              <li>Don't omit platform or publisher information</li>
              <li>Don't use auto-generated URLs that may expire</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access and Preservation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Save offline copies when possible</li>
                <li>Use permanent links or DOIs</li>
                <li>Document access dates</li>
                <li>Archive important content</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Quality Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify creator credentials</li>
                <li>Check content reliability</li>
                <li>Consider source authority</li>
                <li>Evaluate production quality</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 