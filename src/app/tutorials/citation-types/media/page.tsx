export default function MediaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Media Citations</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Format</h2>
        <p>Creator(s). (Year). Title [Format]. Platform/Publisher. URL</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium mb-2">YouTube Video:</p>
          <code className="block">Academic Skills. (2023, July 1). How to cite sources [Video]. YouTube. https://youtube.com/watch?v=example</code>
        </div>
      </section>
    </div>
  );
} 