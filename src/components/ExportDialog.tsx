"use client";

import React, { useEffect, useState } from 'react';
import { Citation, CitationFormat } from '../utils/citationFormats';
import { formatCitationPreview } from '../utils/exportHelpers';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  citations: Citation[];
}

const ExportDialog: React.FC<ExportDialogProps> = ({
  isOpen,
  onClose,
  citations
}) => {
  const [selectedFormat, setSelectedFormat] = useState<CitationFormat>('plaintext');
  const [selectedCitations, setSelectedCitations] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    setSelectedCitations(citations.map(citation => citation.id));
  }, [citations]);

  const showToast = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCitationToggle = (id: string) => {
    setSelectedCitations(prev => {
      if (prev.includes(id)) {
        return prev.filter(citationId => citationId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedCitations(citations.map(citation => citation.id));
    showToast('All citations selected');
  };

  const handleDeselectAll = () => {
    setSelectedCitations([]);
    showToast('All citations deselected');
  };

  const handleExport = () => {
    if (selectedCitations.length === 0) {
      showToast('Please select citations to export');
      return;
    }

    const selectedCitationsList = citations.filter(citation => 
      selectedCitations.includes(citation.id)
    );

    const content = formatCitationPreview(selectedCitationsList, selectedFormat);
    const filename = `citations_${Date.now()}.${getFileExtension(selectedFormat)}`;

    // Create and trigger download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    showToast('Citations exported successfully');
    onClose();
  };

  const getFileExtension = (format: CitationFormat): string => {
    switch (format) {
      case 'bibtex':
        return 'bib';
      case 'ris':
        return 'ris';
      default:
        return 'txt';
    }
  };

  if (!isOpen) return null;

  const formats: { value: CitationFormat; label: string; description: string }[] = [
    {
      value: 'bibtex',
      label: 'BibTeX',
      description: 'For LaTeX and academic publishing'
    },
    {
      value: 'ris',
      label: 'RIS',
      description: 'For EndNote, Mendeley, and other reference managers'
    },
    {
      value: 'plaintext',
      label: 'Plain Text',
      description: 'Simple text format'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* Notification Toast */}
      <div
        className={`fixed left-1/2 bottom-4 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
          showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <span className="text-green-400">✓</span>
          <span>{notificationMessage}</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Export Citations</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Format Selection */}
          <div>
            <h3 className="font-medium mb-3">Select Format</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formats.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setSelectedFormat(format.value)}
                  className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                    selectedFormat === format.value
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <h4 className="font-medium text-lg mb-1">{format.label}</h4>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Citations Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Select Citations</h3>
              <div className="space-x-2">
                <button
                  onClick={handleSelectAll}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Select All
                </button>
                <button
                  onClick={handleDeselectAll}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Deselect All
                </button>
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {citations.map((citation) => (
                <label
                  key={citation.id}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedCitations.includes(citation.id)}
                    onChange={() => handleCitationToggle(citation.id)}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                  />
                  <span className="text-sm">{citation.text}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportDialog; 