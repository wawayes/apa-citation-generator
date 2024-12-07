import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About APA Citation Generator</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We are dedicated to providing students, researchers, and academics with a reliable and easy-to-use tool for generating accurate APA citations.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to simplify the citation process while maintaining the highest standards of accuracy and compliance with APA guidelines. We believe that proper citation should be accessible to everyone, regardless of their academic background.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Accurate APA 7th edition citations</li>
              <li>✓ User-friendly interface</li>
              <li>✓ Regular updates to match latest guidelines</li>
              <li>✓ Free to use</li>
              <li>✓ Comprehensive source type support</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-6">
            Our team consists of academic professionals, developers, and UX designers who are passionate about creating the best citation tools possible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Academic Team</h3>
              <p className="text-gray-600">
                Experts in APA style guidelines and academic writing standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Development Team</h3>
              <p className="text-gray-600">
                Skilled developers ensuring reliable and efficient functionality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Support Team</h3>
              <p className="text-gray-600">
                Dedicated to helping users with their citation needs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or suggestions? We'd love to hear from you! Contact us at{' '}
            <a href="mailto:contact@apa-citation.com" className="text-indigo-600 hover:text-indigo-800">
              contact@apa-citation.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 