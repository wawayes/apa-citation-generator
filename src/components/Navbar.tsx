import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home Link */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-gray-900">APA Citation</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/tutorials" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Tutorials
            </Link>

            <Link 
              href="/tutorials/citation-types" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Citation Types
            </Link>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Action Button */}
          <div>
            <Link 
              href="/"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Generate Citation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 