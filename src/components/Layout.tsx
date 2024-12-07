import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Schema.org Organization Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "APA Citation Generator",
            "url": "https://apa-citation.com",
            "applicationCategory": "Academic Tool",
            "description": "Free APA citation generator for academic papers. Supporting both APA 7th editions.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "APA 6th & 7th Edition Support",
              "Multiple Citation Formats",
              "Export to Various Formats",
              "Save and Manage Citations"
            ]
          })
        }}
      />
    </div>
  );
};

export default Layout;