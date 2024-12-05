import { motion } from 'framer-motion';
import React from 'react';
import { Citation, CitationFormat, formatCitationPreview } from '../utils';

interface ExportPreviewProps {
  citations: Citation[];
  format: CitationFormat;
  onClose: () => void;
  onConfirm: () => void;
}

const ExportPreview: React.FC<ExportPreviewProps> = ({
  citations,
  format,
  onClose,
  onConfirm
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Export Preview</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto max-h-[50vh]">
            <pre>{formatCitationPreview(citations, format)}</pre>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
          >
            Back
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm Export
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExportPreview; 