import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { CitationFormat } from '../utils';

interface ExportFormatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (format: CitationFormat) => void;
}

const formats = [
  {
    value: 'bibtex',
    label: 'BibTeX',
    icon: '📄',
    description: 'For LaTeX and academic publishing'
  },
  {
    value: 'ris',
    label: 'RIS',
    icon: '📑',
    description: 'Universal citation format'
  }
] as const;

const ExportFormatDialog: React.FC<ExportFormatDialogProps> = ({
  isOpen,
  onClose,
  onSelect
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Choose Export Format</h2>
              <button onClick={onClose}>✕</button>
            </div>
            
            <div className="space-y-2">
              {formats.map(format => (
                <button
                  key={format.value}
                  onClick={() => {
                    onSelect(format.value as CitationFormat);
                    onClose();
                  }}
                  className="w-full flex items-center p-4 hover:bg-gray-50 rounded-lg group"
                >
                  <span className="text-2xl mr-3">{format.icon}</span>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">{format.label}</h3>
                    <p className="text-sm text-gray-600">{format.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExportFormatDialog; 