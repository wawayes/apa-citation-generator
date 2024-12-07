'use client';

import Link from 'next/link';

export default function ConferenceProceedingsPage() {
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
            <Link href="/tutorials/citation-types/conferences" className="hover:text-indigo-600">Conference Papers</Link>
          </li>
          <li className="before:content-['/'] before:mx-2">Conference Proceedings</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Conference Proceedings</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to create citations for papers published in conference proceedings, both in print and online formats.
        </p>

        <section className="mb-12">
          <h2>Basic Format</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p>Author, A. A., & Author, B. B. (Year). Title of paper. In A. Editor & B. Editor (Eds.), <em>Proceedings of Conference Name</em> (pp. xxx-xxx). Publisher. DOI/URL</p>
          </div>
          <p className="text-gray-600">
            Note: Include DOI when available, otherwise use URL. Omit both if the proceedings are in print format only.
          </p>
        </section>

        <section className="mb-12">
          <h2>Examples with Explanations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Published Conference Paper</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Smith, J., & Johnson, M. (2023). Machine learning applications in climate science. In R. Wilson & L. Chen (Eds.), <em>Proceedings of the International Conference on Climate Technology</em> (pp. 234-245). Springer. https://doi.org/10.xxxx/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• List all authors in order</li>
                <li>• Include editors of proceedings</li>
                <li>• Add page range</li>
                <li>• Include publisher name</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Online Conference Proceedings</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Lee, S. (2023). Advances in quantum computing. In <em>2023 IEEE Quantum Computing Conference Proceedings</em> (pp. 45-52). IEEE. https://ieeexplore.ieee.org/document/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include conference year in title if part of proceedings name</li>
                <li>• Use organization name as publisher</li>
                <li>• Add direct URL to paper</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Proceedings in Book Series</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Park, H., & Kim, D. (2023). Neural networks in robotics. In <em>Lecture Notes in Computer Science: Vol. 12345. Artificial Intelligence and Robotics</em> (pp. 123-135). Springer. https://doi.org/10.xxxx/xxxxx
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include series title and volume number</li>
                <li>• Add specific proceedings title</li>
                <li>• Use DOI when available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Special Cases</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Proceedings Published as Journal Issue</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Chen, R. (2023). Data privacy in cloud computing. In M. Thompson (Ed.), <em>Journal of Computing, 45</em>(Special Issue: Cloud Security Conference), 78-89. https://doi.org/10.xxxx/xxxxx
              </div>
              <p className="text-gray-600 mb-4">
                Format as a journal article when proceedings are published as a special issue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Regularly Published Proceedings</h3>
              <div className="font-mono text-sm mb-4 text-gray-800">
                Martinez, A. (2023). Sustainable energy solutions. <em>Annual Proceedings of Environmental Technology, 12</em>, 156-170.
              </div>
              <p className="text-gray-600 mb-4">
                Format similar to a journal when proceedings are published regularly.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Important Elements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Required Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authors of the paper</li>
                <li>Year of conference/publication</li>
                <li>Title of paper</li>
                <li>Conference name</li>
                <li>Page numbers</li>
                <li>Publisher information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Optional Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Editors (if known)</li>
                <li>Conference location</li>
                <li>Series information</li>
                <li>DOI or URL</li>
                <li>Conference dates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't confuse conference date with publication date</li>
              <li>Don't omit page numbers for published proceedings</li>
              <li>Don't include conference location unless part of proceedings title</li>
              <li>Don't forget to italicize proceedings title</li>
              <li>Don't include paper numbers instead of page numbers</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 