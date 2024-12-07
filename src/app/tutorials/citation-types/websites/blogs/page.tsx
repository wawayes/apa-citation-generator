'use client';

import Link from 'next/link';

export default function BlogsPage() {
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
          <li className="before:content-['/'] before:mx-2">Blog Posts</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Blog Posts</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite blog posts and online commentary in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. (Year, Month Day). Title of blog post. Blog Name. URL</p>
          </div>
          <p className="text-gray-600">
            Note: Include the notation [Blog post] in square brackets after the title if the post format is not evident from the title.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Standard Blog Post</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Lee, M. (2023, August 15). The future of academic writing. Academic Writing Blog. https://example.com/academic-writing-future
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Author's name in standard format</li>
                <li>• Full date of the post</li>
                <li>• Title in sentence case</li>
                <li>• Blog name in italics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Blog Post with Format Notation</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, R. (2023, July 1). Writing effective citations [Blog post]. Research Tips. https://example.com/citation-tips
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include [Blog post] after title when format isn't clear</li>
                <li>• URL points directly to the post</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Group Blog Post</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Writing Center Staff. (2023, June 12). Tips for better citations [Blog post]. University Writing Center Blog. https://example.edu/writing-tips
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Group name as author</li>
                <li>• Include all available publication details</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Guest Blog Post</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, A. (2023, May 5). Guest post: Citation styles compared. [Blog post]. Citation Guide. https://example.org/guest-post
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cite the guest author, not the blog owner</li>
                <li>• Include "Guest post:" if mentioned in title</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Comments on Blog Posts</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Reader, J. (2023, August 16). Re: The future of academic writing [Blog comment]. Academic Writing Blog. https://example.com/academic-writing-future#comment-123
              </div>
              <p className="text-gray-600 mb-4">
                When citing a comment, include "Re:" before the title and [Blog comment] after it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Blog Posts in Another Language</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Müller, K. (2023). Zitierrichtlinien für Blogs [Citation guidelines for blogs]. Deutsche Wissenschaft Blog. https://example.de/blog
              </div>
              <p className="text-gray-600 mb-4">
                Provide an English translation of the title in square brackets after the original title.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't cite the entire blog when referencing a specific post</li>
              <li>Don't omit the date if it's available</li>
              <li>Don't forget to include [Blog post] when the format isn't clear from the title</li>
              <li>Don't use the blog owner's name for guest posts</li>
              <li>Don't include unnecessary URL parameters or tracking information</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Archiving Blog Posts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Save important posts as PDFs</li>
                <li>Use web archive services</li>
                <li>Document access date for volatile content</li>
                <li>Keep local copies of crucial references</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Verification Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify author credentials when possible</li>
                <li>Check post dates for accuracy</li>
                <li>Ensure URLs are permanent links</li>
                <li>Confirm blog is still accessible</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 