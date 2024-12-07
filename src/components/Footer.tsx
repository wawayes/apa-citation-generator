import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">APA Citation</h3>
            <p className="text-gray-600">
              Professional APA citation generator for students, researchers, and academics.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link href="/tutorials" className="text-gray-600 hover:text-indigo-600">Tutorials</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/tutorials#basics" className="text-gray-600 hover:text-indigo-600">APA Basics</Link></li>
              <li><Link href="/tutorials#examples" className="text-gray-600 hover:text-indigo-600">Citation Examples</Link></li>
              <li><Link href="/tutorials#faq" className="text-gray-600 hover:text-indigo-600">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">Email: contact@apa-citation.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} APA Citation Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 