"use client";

import React, { useState } from 'react';
import { Citation } from '../utils/citationFormats';
import ExportDialog from './ExportDialog';

interface CitationFormProps {
  onSave: (citation: Citation) => void;
}

const resourceTypes = [
  {
    value: 'book',
    label: 'Book',
    icon: '📚',
    description: 'For printed or digital books',
    example: 'Smith, J. D. (2024). The Complete Guide to Citations. Publisher Name.'
  },
  {
    value: 'journal',
    label: 'Journal Article',
    icon: '📰',
    description: 'For academic journal articles',
    example: 'Lee, B. R., & Wang, L. K. (2024). Modern Citation Practices. Journal Name, 12(3), 45-67.'
  },
  {
    value: 'website',
    label: 'Website',
    icon: '🌐',
    description: 'For online articles and web pages',
    example: 'Brown, A. M. (2024). Citation Guidelines. https://example.com/article'
  }
];

interface AdditionalFields {
  publisher?: string;
  journalTitle?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  url?: string;
  siteName?: string;
}

const CitationForm: React.FC<CitationFormProps> = ({ onSave }) => {
  const [resourceType, setResourceType] = useState<string>('book');
  const [authors, setAuthors] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [citation, setCitation] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({});
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [savedCitations, setSavedCitations] = useState<Citation[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('savedCitations');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const showToast = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!authors.trim()) {
      newErrors.authors = 'Authors are required';
    }
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!year.trim()) {
      newErrors.year = 'Year is required';
    } else if (!/^\d{4}$/.test(year)) {
      newErrors.year = 'Please enter a valid year';
    }

    if (resourceType === 'journal') {
      if (!additionalFields.journalTitle?.trim()) {
        newErrors.journalTitle = 'Journal title is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatAuthors = (authors: string): string => {
    const authorList = authors.split(/,\s*&\s*|\s*,\s*/).map(author => author.trim());
    
    if (authorList.length > 3) {
      return `${authorList[0]} et al.`;
    }
    
    if (authorList.length > 1) {
      const lastAuthor = authorList.pop();
      return `${authorList.join(', ')}, & ${lastAuthor}`;
    }
    
    return authorList[0];
  };

  const generateCitation = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    let apaCitation = '';
    const formattedAuthors = formatAuthors(authors);

    switch (resourceType) {
      case 'book':
        apaCitation = `${formattedAuthors} (${year}). ${title}${additionalFields.publisher ? `. ${additionalFields.publisher}` : ''}`;
        break;
      case 'journal':
        apaCitation = `${formattedAuthors} (${year}). ${title}. ${additionalFields.journalTitle}`;
        if (additionalFields.volume) {
          apaCitation += `, ${additionalFields.volume}`;
          if (additionalFields.issue) {
            apaCitation += `(${additionalFields.issue})`;
          }
        }
        if (additionalFields.pages) {
          apaCitation += `, ${additionalFields.pages}`;
        }
        apaCitation += '.';
        break;
      case 'website':
        apaCitation = `${formattedAuthors} (${year}). ${title}`;
        if (additionalFields.siteName) {
          apaCitation += `. ${additionalFields.siteName}`;
        }
        if (additionalFields.url) {
          apaCitation += `. ${additionalFields.url}`;
        }
        break;
      default:
        apaCitation = `${formattedAuthors} (${year}). ${title}.`;
    }

    setCitation(apaCitation);
  };

  const copyToClipboard = async () => {
    if (citation) {
      try {
        await navigator.clipboard.writeText(citation);
        showToast('Citation copied to clipboard');
      } catch (error) {
        console.error('Failed to copy citation:', error);
        showToast('Failed to copy. Please copy manually');
      }
    }
  };

  const handleSave = () => {
    if (citation) {
      const newCitation: Citation = {
        id: Date.now().toString(),
        type: resourceType,
        authors,
        title,
        year,
        text: citation,
        createdAt: new Date(),
      };
      
      const updatedCitations = [...savedCitations, newCitation];
      setSavedCitations(updatedCitations);
      localStorage.setItem('savedCitations', JSON.stringify(updatedCitations));
      
      // Clear form
      setAuthors('');
      setTitle('');
      setYear('');
      setCitation('');
      setAdditionalFields({});
    }
  };

  const handleCopySavedCitation = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Citation copied to clipboard');
    } catch (error) {
      console.error('Failed to copy citation:', error);
      showToast('Failed to copy. Please copy manually');
    }
  };

  const handleDeleteCitation = (id: string) => {
    const updatedCitations = savedCitations.filter(citation => citation.id !== id);
    setSavedCitations(updatedCitations);
    localStorage.setItem('savedCitations', JSON.stringify(updatedCitations));
    showToast('Citation deleted');
  };

  return (
    <div className="space-y-8 relative">
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
      
      <form className="space-y-8" onSubmit={generateCitation}>
        {/* Resource Type */}
        <div className="space-y-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Resource Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resourceTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setResourceType(type.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:border-indigo-400 ${
                  resourceType === type.value
                    ? 'border-indigo-500 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-2xl">{type.icon}</span>
                <span className="font-medium text-gray-900">{type.label}</span>
                <span className="text-xs text-gray-500 text-center">{type.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Authors */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Authors
          </label>
          <input
            type="text"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            placeholder="e.g., Smith, J. D."
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
          />
          {errors.authors && (
            <p className="mt-1 text-sm text-red-500">{errors.authors}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Year */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Year
          </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Publication year"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
          />
          {errors.year && (
            <p className="mt-1 text-sm text-red-500">{errors.year}</p>
          )}
        </div>

        {/* Resource-specific fields */}
        {resourceType === 'book' && (
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Publisher
            </label>
            <input
              type="text"
              value={additionalFields.publisher || ''}
              onChange={(e) =>
                setAdditionalFields({
                  ...additionalFields,
                  publisher: e.target.value,
                })
              }
              placeholder="Publisher name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
            />
          </div>
        )}

        {resourceType === 'journal' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Journal Title
              </label>
              <input
                type="text"
                value={additionalFields.journalTitle || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    journalTitle: e.target.value,
                  })
                }
                placeholder="Journal name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
              {errors.journalTitle && (
                <p className="mt-1 text-sm text-red-500">{errors.journalTitle}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Volume
                </label>
                <input
                  type="text"
                  value={additionalFields.volume || ''}
                  onChange={(e) =>
                    setAdditionalFields({
                      ...additionalFields,
                      volume: e.target.value,
                    })
                  }
                  placeholder="e.g., 12"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Issue
                </label>
                <input
                  type="text"
                  value={additionalFields.issue || ''}
                  onChange={(e) =>
                    setAdditionalFields({
                      ...additionalFields,
                      issue: e.target.value,
                    })
                  }
                  placeholder="e.g., 3"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Pages
              </label>
              <input
                type="text"
                value={additionalFields.pages || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    pages: e.target.value,
                  })
                }
                placeholder="e.g., 45-67"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'website' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Website Name
              </label>
              <input
                type="text"
                value={additionalFields.siteName || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    siteName: e.target.value,
                  })
                }
                placeholder="Website name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                URL
              </label>
              <input
                type="text"
                value={additionalFields.url || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    url: e.target.value,
                  })
                }
                placeholder="https://example.com/article"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Generate Citation
          </button>
        </div>
      </form>

      {/* Generated Citation */}
      {citation && (
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Generated Citation</h3>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Copy
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
          <p className="text-gray-800 font-medium">{citation}</p>
        </div>
      )}

      {/* Saved Citations */}
      {savedCitations.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Saved Citations</h3>
            <button
              onClick={() => setShowExportDialog(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Export Citations
            </button>
          </div>
          <div className="space-y-4">
            {savedCitations.map((savedCitation) => (
              <div
                key={savedCitation.id}
                className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <p className="text-gray-800">{savedCitation.text}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCopySavedCitation(savedCitation.text)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                      title="Copy citation"
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => handleDeleteCitation(savedCitation.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                      title="Delete citation"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {new Date(savedCitation.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export Dialog */}
      {showExportDialog && (
        <ExportDialog
          isOpen={showExportDialog}
          onClose={() => setShowExportDialog(false)}
          citations={savedCitations}
        />
      )}
    </div>
  );
};

export default CitationForm;