'use client';

import Link from 'next/link';

export default function DatasetsPage() {
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
          <li className="before:content-['/'] before:mx-2">Datasets & Software</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Datasets and Software</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite datasets, software, and applications in APA format.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/datasets/published" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Published Datasets</h2>
            <p className="text-gray-600">How to cite formally published research datasets with DOIs or accession numbers.</p>
          </Link>

          <Link href="/tutorials/citation-types/datasets/unpublished"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Unpublished Raw Data</h2>
            <p className="text-gray-600">Guidelines for citing unpublished or privately held research data.</p>
          </Link>

          <Link href="/tutorials/citation-types/datasets/software"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Computer Software</h2>
            <p className="text-gray-600">How to cite software packages, programming languages, and scripts.</p>
          </Link>

          <Link href="/tutorials/citation-types/datasets/apps"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Mobile Applications</h2>
            <p className="text-gray-600">Citations for mobile apps and app-based tools.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Include version numbers for software and datasets</li>
              <li>Specify access conditions and permissions</li>
              <li>Add DOIs or permanent URLs when available</li>
              <li>Note any registration or subscription requirements</li>
              <li>Include relevant dates (creation, update, access)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Basic Elements</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Author Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Individual authors or development teams</li>
                <li>Organizations or institutions</li>
                <li>Multiple contributor roles</li>
                <li>Anonymous or group authorship</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Version Control</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Software version numbers</li>
                <li>Dataset updates and revisions</li>
                <li>Release dates</li>
                <li>Development status</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Access Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Repository locations</li>
                <li>Download instructions</li>
                <li>License requirements</li>
                <li>Usage restrictions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Data Privacy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confidentiality requirements</li>
                <li>Data protection measures</li>
                <li>Access restrictions</li>
                <li>Ethical considerations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Software Licensing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open source status</li>
                <li>Commercial restrictions</li>
                <li>Attribution requirements</li>
                <li>Distribution limitations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Best Practices</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Verify data and software authenticity</li>
              <li>Document version history</li>
              <li>Track updates and changes</li>
              <li>Maintain access records</li>
              <li>Follow repository guidelines</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 