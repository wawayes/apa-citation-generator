'use client';

import Link from 'next/link';

export default function WebsitesPage() {
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
          <li className="before:content-['/'] before:mx-2">Websites</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Websites and Web Pages</h1>
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite different types of web content in APA format. Choose a specific type below for detailed guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/websites/webpages" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Web Pages</h2>
            <p className="text-gray-600">How to cite individual web pages and articles from websites.</p>
          </Link>

          <Link href="/tutorials/citation-types/websites/blogs"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Blog Posts</h2>
            <p className="text-gray-600">Guidelines for citing blog posts and online commentary.</p>
          </Link>

          <Link href="/tutorials/citation-types/websites/social-media"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Social Media</h2>
            <p className="text-gray-600">How to cite posts from Twitter, Facebook, Instagram, and other platforms.</p>
          </Link>

          <Link href="/tutorials/citation-types/websites/multimedia"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Online Multimedia</h2>
            <p className="text-gray-600">Citations for videos, podcasts, and other multimedia content.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Website Citation Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include author name when available (individual or organization)</li>
              <li>Use retrieval dates only for content that may change</li>
              <li>Provide specific URLs rather than homepage URLs</li>
              <li>Include version or update information when relevant</li>
              <li>Archive web pages that might change or disappear</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements of Web Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Individual author: Last name, First initial. Middle initial.</li>
                <li>Organization: Full name of organization</li>
                <li>No author: Start with title of the work</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Dates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the most specific date available</li>
                <li>Include retrieval date if content may change</li>
                <li>Use (n.d.) if no date is available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">URLs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Present URLs as hyperlinks</li>
                <li>Break URLs before punctuation</li>
                <li>Remove "https://" if URL begins with "www"</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include retrieval dates for content that won't change</li>
              <li>Don't cite entire websites, only specific pages or documents</li>
              <li>Don't include access dates unless content is designed to change</li>
              <li>Don't include unnecessary website navigation details</li>
              <li>Don't cite URLs that require login or are not publicly accessible</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 
