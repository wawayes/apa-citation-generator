import { motion } from 'framer-motion';
import React from 'react';

interface ExportRecord {
  id: string;
  date: Date;
  format: string;
  citationCount: number;
  filename: string;
}

interface ExportHistoryProps {
  history: ExportRecord[];
  onClose: () => void;
  onReExport: (record: ExportRecord) => void;
}

const ExportHistory: React.FC<ExportHistoryProps> = ({
  history,
  onClose,
  onReExport
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Export History</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {history.map(record => (
            <div
              key={record.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{record.filename}</p>
                <p className="text-sm text-gray-600">
                  {record.citationCount} citations • {record.format} • 
                  {record.date.toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => onReExport(record)}
                className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded"
              >
                Re-export
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExportHistory; 