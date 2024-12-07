"use client";

import React, { useState } from 'react';
import { Citation, CitationFormat, toBibTeX, toRIS } from '../utils/citationFormats';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  citations: Citation[];
}

const ExportDialog: React.FC<ExportDialogProps> = ({ isOpen, onClose, citations }) => {
  const [format, setFormat] = useState<CitationFormat>('plaintext');
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  if (!isOpen) return null;

  const formatCitations = (): string => {
    switch (format) {
      case 'bibtex':
        return citations.map((citation) => toBibTeX(citation)).join('\n\n');
      case 'ris':
        return citations.map((citation) => toRIS(citation)).join('\n\n');
      default:
        return citations.map((citation) => citation.text).join('\n\n');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatCitations());
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (error) {
      console.error('Failed to copy citations:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">导出引用</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            选择格式
          </label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as CitationFormat)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="plaintext">纯文本</option>
            <option value="bibtex">BibTeX</option>
            <option value="ris">RIS</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            预览
          </label>
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
            {formatCitations()}
          </pre>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            关闭
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors relative"
          >
            {showCopiedMessage ? '已复制！' : '复制到剪贴板'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportDialog; 