import Link from 'next/link';

const tutorials = [
  {
    id: 'apa-basics',
    title: 'APA Format Basics',
    description: 'Learn the fundamental rules and principles of APA citation format',
    icon: '📚',
  },
  {
    id: 'citation-types',
    title: 'Citing Different Source Types',
    description: 'How to cite books, journals, websites, and other resource types',
    icon: '📝',
  },
  {
    id: 'in-text-citation',
    title: 'In-Text Citation Guide',
    description: 'Master the correct methods for in-text citations in APA style',
    icon: '💡',
  },
  {
    id: 'reference-list',
    title: 'Reference List Formatting',
    description: 'Guidelines for creating and formatting your reference list',
    icon: '📋',
  },
];

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2 px-4 rounded-lg mb-8">
        <ol className="flex space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">Tutorials</li>
        </ol>
      </div>

      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">APA Citation Tutorials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides to help you master APA citations in academic writing
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.id}`}
              className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{tutorial.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {tutorial.title}
                  </h2>
                  <p className="text-gray-600">{tutorial.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 