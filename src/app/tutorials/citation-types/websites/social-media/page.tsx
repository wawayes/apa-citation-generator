'use client';

import Link from 'next/link';

export default function SocialMediaPage() {
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
          <li className="before:content-['/'] before:mx-2">Social Media</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Social Media Posts</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite posts from various social media platforms in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A. [@username]. (Year, Month Day). Content of post up to first 20 words [Type of post]. Platform Name. URL</p>
          </div>
          <p className="text-gray-600">
            Note: Include the post type in square brackets (e.g., [Tweet], [Facebook status], [Instagram photo], etc.).
          </p>
        </section>

        <section className="mb-12">
          <h2>Platform-Specific Examples</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Twitter/X Posts</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J. [@johnsmith]. (2023, August 20). New research shows the importance of proper citation in academic writing [Tweet]. Twitter. https://twitter.com/johnsmith/status/123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include both real name and username</li>
                <li>• Use exact date of tweet</li>
                <li>• Include first 20 words of tweet</li>
                <li>• Specify [Tweet] as post type</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Facebook Posts</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                University Library. (2023, July 15). Join us for a workshop on APA citation styles next week [Facebook status]. Facebook. https://facebook.com/universitylibrary/posts/123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use page or group name for organizational accounts</li>
                <li>• Specify [Facebook status] as post type</li>
                <li>• Include direct URL to the post</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Instagram Posts</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, R. [@researchguide]. (2023, June 1). Infographic showing the basics of APA citation [Instagram photo]. Instagram. https://instagram.com/p/123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Specify content type: [Instagram photo], [Instagram video], etc.</li>
                <li>• Include caption text if relevant</li>
                <li>• Use permanent link to post</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">LinkedIn Posts</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, A. (2023, May 5). The importance of proper citation in professional documents [LinkedIn post]. LinkedIn. https://linkedin.com/posts/amartinez_123456789
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use professional name as appears on profile</li>
                <li>• Specify [LinkedIn post] as type</li>
                <li>• Include relevant hashtags if part of post</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Replies and Comments</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Wilson, K. [@kwilson]. (2023, August 21). Re: @johnsmith New research shows [Reply to Tweet]. Twitter. https://twitter.com/kwilson/status/987654321
              </div>
              <p className="text-gray-600 mb-4">
                When citing replies, include "Re:" and the original author's username.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Posts in Another Language</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                García, M. [@mgarcia]. (2023). Guía de citación APA [APA citation guide] [Tweet]. Twitter. https://twitter.com/mgarcia/status/123456789
              </div>
              <p className="text-gray-600 mb-4">
                Include English translation in square brackets after original text.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit usernames or handles</li>
              <li>Don't forget to specify the type of post</li>
              <li>Don't use URLs that require login to access</li>
              <li>Don't include personal communications without permission</li>
              <li>Don't cite deleted or private posts</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Documentation Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Screenshot important posts</li>
                <li>Archive posts using web services</li>
                <li>Record exact posting time if available</li>
                <li>Save permanent links when possible</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Privacy Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respect private account settings</li>
                <li>Get permission for personal communications</li>
                <li>Consider ethical implications</li>
                <li>Protect sensitive information</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 