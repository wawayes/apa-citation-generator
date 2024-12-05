import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Citation, CitationFormat } from '../utils/citationFormats';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  savedCitations: Citation[];
  onExport: (citations: Citation[], format: CitationFormat, options: ExportOptions) => void;
}

interface ExportOptions {
  includeFields: string[];
  sortBy: 'author' | 'year' | 'title';
  citationStyle: 'apa' | 'mla' | 'chicago';
  dateFormat: 'full' | 'short';
}

const exportFormats = [
  { 
    value: 'bibtex', 
    label: 'BibTeX', 
    icon: '📄',
    extension: '.bib',
    description: 'Standard format for LaTeX and academic publishing'
  },
  { 
    value: 'ris', 
    label: 'RIS', 
    icon: '📑',
    extension: '.ris',
    description: 'Universal citation format'
  },
  // ... 其他格式
] as const;

const ExportDialog: React.FC<ExportDialogProps> = ({
  isOpen,
  onClose,
  savedCitations,
  onExport
}) => {
  const [selectedCitations, setSelectedCitations] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<CitationFormat>('bibtex');
  const [options, setOptions] = useState<ExportOptions>({
    includeFields: ['authors', 'title', 'year', 'publisher', 'doi'],
    sortBy: 'year',
    citationStyle: 'apa',
    dateFormat: 'full'
  });

  const handleSelectAll = () => {
    setSelectedCitations(savedCitations.map(c => c.id));
  };

  const handleExport = () => {
    const citationsToExport = savedCitations.filter(c => 
      selectedCitations.includes(c.id)
    );
    onExport(citationsToExport, selectedFormat, options);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Export Citations</h2>
              <button onClick={onClose}>✕</button>
            </div>

            {/* Citation Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Select Citations</h3>
                <button 
                  onClick={handleSelectAll}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Select All
                </button>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {savedCitations.map(citation => (
                  <label 
                    key={citation.id}
                    className="flex items-center p-2 hover:bg-gray-50 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCitations.includes(citation.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCitations(prev => [...prev, citation.id]);
                        } else {
                          setSelectedCitations(prev => 
                            prev.filter(id => id !== citation.id)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    <span>{citation.authors} ({citation.year})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Export Options */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Export Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Format Selection */}
                <div>
                  <label className="block text-sm mb-1">Format</label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value as CitationFormat)}
                    className="w-full p-2 border rounded"
                  >
                    {exportFormats.map(format => (
                      <option key={format.value} value={format.value}>
                        {format.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm mb-1">Sort By</label>
                  <select
                    value={options.sortBy}
                    onChange={(e) => setOptions(prev => ({
                      ...prev,
                      sortBy: e.target.value as 'author' | 'year' | 'title'
                    }))}
                    className="w-full p-2 border rounded"
                  >
                    <option value="author">Author</option>
                    <option value="year">Year</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleExport}
                disabled={selectedCitations.length === 0}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Export
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExportDialog; 