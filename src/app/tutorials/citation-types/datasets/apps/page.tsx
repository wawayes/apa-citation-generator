'use client';

import Link from 'next/link';

export default function MobileAppsPage() {
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
            <Link href="/tutorials/citation-types/datasets" className="hover:text-indigo-600">Datasets & Software</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Mobile Applications</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Mobile Applications</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite mobile apps and app-based tools in APA format.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm mb-4">
              Developer/Company. (Year). <em>App name</em> (Version number) [Mobile app]. App Store. URL
            </p>
            <p className="font-mono text-sm">
              Developer/Company. (Year). <em>App name</em> (Version number) [Mobile app]. Google Play Store. URL
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Examples</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">iOS App</h3>
            <p className="font-mono text-sm mb-2">
              Duolingo. (2023). <em>Duolingo: Language Lessons</em> (Version 7.5.0) [Mobile app]. App Store. https://apps.apple.com/us/app/duolingo/id570060128
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-3">Android App</h3>
            <p className="font-mono text-sm mb-2">
              Headspace Inc. (2023). <em>Headspace: Meditation & Sleep</em> (Version 4.186.0) [Mobile app]. Google Play Store. https://play.google.com/store/apps/details?id=com.getsomeheadspace.android
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Cross-Platform App</h3>
            <p className="font-mono text-sm mb-2">
              Microsoft Corporation. (2023). <em>Microsoft Teams</em> (Version 5.10.0) [Mobile app]. Available from App Store and Google Play Store.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2>Key Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">App Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use official app name</li>
                <li>Include version number</li>
                <li>Specify platform (iOS/Android)</li>
                <li>Note app category if relevant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Developer Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use company/developer name</li>
                <li>Include publisher if different</li>
                <li>Note development team</li>
                <li>Add localization information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Store Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specify app store platform</li>
                <li>Include direct store links</li>
                <li>Note regional availability</li>
                <li>Add pricing information if relevant</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Additional Guidelines</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>For beta or preview versions, note status</li>
              <li>Include in-app purchase information if relevant</li>
              <li>Specify device compatibility</li>
              <li>Note offline functionality</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>In-Text Citations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">First Citation</h3>
              <p className="mb-4">Use the full app name:</p>
              <p className="font-mono text-sm">
                The language learning app Duolingo (Version 7.5.0; Duolingo, 2023)...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Subsequent Citations</h3>
              <p className="mb-4">Use abbreviated form:</p>
              <p className="font-mono text-sm">
                The app (Duolingo, 2023) provides interactive lessons...
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>App Categories</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Educational Apps</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Note educational level</li>
                <li>Include subject area</li>
                <li>Specify learning objectives</li>
                <li>Add curriculum alignment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Research Apps</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Include data collection methods</li>
                <li>Note analysis capabilities</li>
                <li>Specify export formats</li>
                <li>Add validation information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Platform Requirements</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum OS version</li>
              <li>Device compatibility</li>
              <li>Storage requirements</li>
              <li>Internet connectivity needs</li>
              <li>Additional hardware requirements</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't omit version numbers</li>
              <li>Don't use unofficial app names</li>
              <li>Don't forget platform designation</li>
              <li>Don't ignore regional variations</li>
              <li>Don't mix app store information</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 