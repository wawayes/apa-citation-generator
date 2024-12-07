'use client';

import Link from 'next/link';

export default function BooksPage() {
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
          <li className="before:content-['/'] before:mx-2">Books</li>
        </ol>
      </nav>

      <article className="prose prose-indigo max-w-none">
        <h1>How to Cite Books in APA Format</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Learn how to properly cite different types of books in APA format. Choose a specific book type below for detailed guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Link href="/tutorials/citation-types/books/single-author" 
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Single Author Books</h2>
            <p className="text-gray-600">Learn how to cite books written by a single author, including basic format and examples.</p>
          </Link>

          <Link href="/tutorials/citation-types/books/multiple-authors"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Multiple Authors</h2>
            <p className="text-gray-600">Guidelines for citing books with two or more authors, including author order and formatting.</p>
          </Link>

          <Link href="/tutorials/citation-types/books/edited-books"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Edited Books</h2>
            <p className="text-gray-600">How to cite books that are edited collections, including editor attribution.</p>
          </Link>

          <Link href="/tutorials/citation-types/books/ebooks"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">E-Books</h2>
            <p className="text-gray-600">Format for citing electronic books, including DOI and URL requirements.</p>
          </Link>

          <Link href="/tutorials/citation-types/books/book-chapters"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Book Chapters</h2>
            <p className="text-gray-600">Guidelines for citing individual chapters from edited books.</p>
          </Link>
        </div>

        <section className="mb-12">
          <h2>General Book Citation Guidelines</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>Always italicize book titles</li>
              <li>Include the publisher name but not the location</li>
              <li>Use sentence case for book titles (capitalize only the first word and proper nouns)</li>
              <li>Include edition information when available (e.g., 2nd ed.)</li>
              <li>For online books, include DOI when available, URL if no DOI exists</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="list-disc pl-6 space-y-3">
              <li>Don't include the publisher location</li>
              <li>Don't abbreviate publisher names</li>
              <li>Don't forget to italicize the book title</li>
              <li>Don't capitalize all words in the title (unless they're proper nouns)</li>
              <li>Don't include "Inc.", "Publishers", "Co.", etc. in publisher names</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
} 