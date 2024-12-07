"use client";

import React, { useState } from 'react';
import { Citation } from '../utils/citationFormats';
import ExportDialog from './ExportDialog';

interface CitationFormProps {
  onSave: (citation: Citation) => void;
}

interface ResourceType {
  value: string;
  label: string;
  icon: string;
  description: string;
  example: string;
}

const resourceTypes: ResourceType[] = [
  {
    value: 'book',
    label: 'Book',
    icon: '📚',
    description: 'For printed or digital books (APA 7th)',
    example: 'Smith, J. D. (2024). The Complete Guide to Citations. Publisher Name.'
  },
  {
    value: 'journal',
    label: 'Journal Article',
    icon: '📰',
    description: 'For academic journal articles (APA 7th)',
    example: 'Lee, B. R., & Wang, L. K. (2024). Modern Citation Practices. Journal Name, 12(3), 45-67.'
  },
  {
    value: 'conference',
    label: 'Conference Paper',
    icon: '🎯',
    description: 'For conference papers and presentations (APA 7th)',
    example: 'Wilson, M. (2024, March). New Research Methods. Paper presented at Conference Name, Location.'
  },
  {
    value: 'government',
    label: 'Government Document',
    icon: '📜',
    description: 'For government reports and documents (APA 7th)',
    example: 'Department Name. (2024). Document Title (Publication No. 123). Publisher.'
  },
  {
    value: 'report',
    label: 'Report & Technical Document',
    icon: '📊',
    description: 'For reports, white papers, and technical documents (APA 7th)',
    example: 'Research Group. (2024). Technical Report Title (Report No. 123). Organization Name.'
  },
  {
    value: 'dataset',
    label: 'Dataset & Software',
    icon: '💾',
    description: 'For datasets, software, and applications (APA 7th)',
    example: 'Author, A. (2024). Dataset Title [Data set]. Repository Name. https://doi.org/10.xxxx'
  },
  {
    value: 'thesis',
    label: 'Thesis & Dissertation',
    icon: '🎓',
    description: 'For theses, dissertations, and academic papers (APA 7th)',
    example: 'Author, A. (2024). Title of dissertation [Doctoral dissertation, University Name].'
  },
  {
    value: 'unpublished',
    label: 'Unpublished Work',
    icon: '📝',
    description: 'For unpublished manuscripts, papers, and raw data (APA 7th)',
    example: 'Author, A. (2024). Title of manuscript [Unpublished manuscript]. Department Name, Institution.'
  },
  {
    value: 'multimedia',
    label: 'Multimedia',
    icon: '🎬',
    description: 'For videos, audio, images, and other media (APA 7th)',
    example: 'Creator, C. (2024). Title [Video]. Platform. https://example.com'
  },
  {
    value: 'website',
    label: 'Website',
    icon: '🌐',
    description: 'For online articles and web pages (APA 7th)',
    example: 'Brown, A. M. (2024). Citation Guidelines. https://example.com/article'
  }
];

interface AdditionalFields {
  // Book fields
  bookType?: 'printed' | 'edited' | 'chapter' | 'ebook' | 'translated';
  publisher?: string;
  publisherLocation?: string;
  contributorNames?: string;
  chapterTitle?: string;
  doi?: string;
  translators?: string;
  edition?: string;
  // Journal fields
  journalType?: 'print' | 'online-doi' | 'online-url' | 'preprint' | 'advance';
  journalTitle?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  repository?: string;
  // Conference fields
  conferenceType?: 'paper' | 'poster' | 'symposium' | 'proceedings';
  conferenceName?: string;
  conferenceLocation?: string;
  conferenceDate?: string;
  proceedingsTitle?: string;
  // Government fields
  governmentType?: 'report' | 'legislation' | 'regulation' | 'court' | 'patent';
  department?: string;
  publicationNumber?: string;
  // Report fields
  reportType?: 'technical' | 'white' | 'research' | 'standard' | 'manual' | 'working';
  organization?: string;
  reportNumber?: string;
  seriesTitle?: string;
  version?: string;
  // Dataset fields
  datasetType?: 'dataset' | 'software' | 'app' | 'code';
  dataType?: string;
  timePeriod?: string;
  softwarePlatform?: string;
  license?: string;
  // Multimedia fields
  mediaType?: 'video' | 'audio' | 'image' | 'artwork' | 'map' | 'podcast' | 'presentation';
  mediaFormat?: string;
  duration?: string;
  producer?: string;
  director?: string;
  host?: string;
  artist?: string;
  channel?: string;
  streamingPlatform?: string;
  episodeNumber?: string;
  seasonNumber?: string;
  artworkMedium?: string;
  dimensions?: string;
  museum?: string;
  recordLabel?: string;
  albumTitle?: string;
  trackNumber?: string;
  // Thesis fields
  thesisType?: 'doctoral' | 'masters' | 'undergraduate' | 'published';
  institution?: string;
  database?: string;
  // Unpublished fields
  unpublishedType?: 'manuscript' | 'paper' | 'report' | 'data';
  status?: string;
  // Website fields
  websiteType?: 'webpage' | 'blog' | 'social' | 'news' | 'multimedia';
  url?: string;
  siteName?: string;
  blogName?: string;
  socialPlatform?: 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'other';
  username?: string;
  newsOrg?: string;
  retrievalDate?: string;
}

interface FormErrors {
  authors?: string;
  title?: string;
  year?: string;
  journalTitle?: string;
  [key: string]: string | undefined;
}

const CitationForm: React.FC<CitationFormProps> = ({ onSave }) => {
  const [resourceType, setResourceType] = useState<string>('book');
  const [authors, setAuthors] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [citation, setCitation] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({});
  const [showExportDialog, setShowExportDialog] = useState<boolean>(false);
  const [savedCitations, setSavedCitations] = useState<Citation[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('savedCitations');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  const showToast = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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

    if (resourceType === 'journal' && !additionalFields.journalTitle?.trim()) {
      newErrors.journalTitle = 'Journal title is required';
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

  const generateCitation = () => {
    if (!validateForm()) {
      return;
    }

    const formattedAuthors = formatAuthors(authors);
    let citation = '';

    switch (resourceType) {
      case 'book':
        citation = `${formattedAuthors} (${year}). ${title}`;
        if (additionalFields.edition) {
          citation += ` (${additionalFields.edition} ed.)`;
        }
        if (additionalFields.publisher) {
          citation += `. ${additionalFields.publisher}`;
        }
        if (additionalFields.doi) {
          citation += `. https://doi.org/${additionalFields.doi}`;
        }
        break;

      case 'journal':
        citation = `${formattedAuthors} (${year}). ${title}. `;
        if (additionalFields.journalTitle) {
          citation += `${additionalFields.journalTitle}`;
          if (additionalFields.volume) {
            citation += `, ${additionalFields.volume}`;
            if (additionalFields.issue) {
              citation += `(${additionalFields.issue})`;
            }
          }
          if (additionalFields.pages) {
            citation += `, ${additionalFields.pages}`;
          }
        }
        if (additionalFields.doi) {
          citation += `. https://doi.org/${additionalFields.doi}`;
        }
        break;

      case 'website':
        citation = `${formattedAuthors} (${year}). ${title}`;
        if (additionalFields.siteName) {
          citation += `. ${additionalFields.siteName}`;
        }
        if (additionalFields.url) {
          citation += `. ${additionalFields.url}`;
        }
        if (additionalFields.retrievalDate) {
          citation += `. Retrieved ${new Date(additionalFields.retrievalDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
        }
        break;

      case 'news':
        citation = `${formattedAuthors} (${year}, ${new Date(additionalFields.retrievalDate || '').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}). ${title}`;
        if (additionalFields.newsOrg) {
          citation += `. ${additionalFields.newsOrg}`;
        }
        if (additionalFields.url) {
          citation += `. ${additionalFields.url}`;
        }
        break;

      case 'dataset':
        citation = `${formattedAuthors} (${year}). ${title} [${additionalFields.dataType || 'Data set'}]`;
        if (additionalFields.repository) {
          citation += `. ${additionalFields.repository}`;
        }
        if (additionalFields.doi) {
          citation += `. https://doi.org/${additionalFields.doi}`;
        }
        break;

      case 'software':
        citation = `${formattedAuthors} (${year}). ${title} (Version ${additionalFields.version || '1.0'})`;
        if (additionalFields.repository) {
          citation += ` [${additionalFields.softwarePlatform || 'Software'}]. ${additionalFields.repository}`;
        }
        if (additionalFields.doi) {
          citation += `. https://doi.org/${additionalFields.doi}`;
        }
        break;

      case 'multimedia':
        citation = `${formattedAuthors} (${year}). ${title} [${additionalFields.mediaType || 'Media'}]`;
        if (additionalFields.streamingPlatform) {
          citation += `. ${additionalFields.streamingPlatform}`;
        }
        if (additionalFields.url) {
          citation += `. ${additionalFields.url}`;
        }
        break;

      case 'thesis':
        citation = `${formattedAuthors} (${year}). ${title}`;
        if (additionalFields.thesisType) {
          citation += ` [${additionalFields.thesisType === 'doctoral' ? 'Doctoral dissertation' : 
                        additionalFields.thesisType === 'masters' ? 'Master&apos;s Thesis' : 
                        'Undergraduate thesis'}`;
          if (additionalFields.institution) {
            citation += `, ${additionalFields.institution}`;
          }
          citation += ']';
        }
        if (additionalFields.database) {
          citation += `. ${additionalFields.database}`;
        }
        if (additionalFields.url) {
          citation += `. ${additionalFields.url}`;
        }
        break;

      case 'unpublished':
        citation = `${formattedAuthors} (${year}). ${title}`;
        if (additionalFields.unpublishedType) {
          citation += ` [Unpublished ${additionalFields.unpublishedType}]`;
        }
        if (additionalFields.institution) {
          citation += `. ${additionalFields.institution}`;
        }
        if (additionalFields.department) {
          citation += `, ${additionalFields.department}`;
        }
        break;

      default:
        citation = `${formattedAuthors} (${year}). ${title}`;
        break;
    }

    setCitation(citation);
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
        ...additionalFields
      };
      
      const updatedCitations = [...savedCitations, newCitation];
      setSavedCitations(updatedCitations);
      localStorage.setItem('savedCitations', JSON.stringify(updatedCitations));
      
      onSave(newCitation);
      showToast('Citation saved successfully');
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    generateCitation();
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Resource Type Selection */}
        <div className="space-y-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Resource Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Basic Fields */}
        <div className="space-y-4">
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
        </div>

        {/* Resource-specific fields */}
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
                placeholder="Enter journal title"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
              {errors.journalTitle && (
                <p className="mt-1 text-sm text-red-500">{errors.journalTitle}</p>
              )}
            </div>

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

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                DOI
              </label>
              <input
                type="text"
                value={additionalFields.doi || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    doi: e.target.value,
                  })
                }
                placeholder="e.g., 10.xxxx/xxxxx"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'book' && (
          <div className="space-y-4">
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
                placeholder="Enter publisher name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Edition
              </label>
              <input
                type="text"
                value={additionalFields.edition || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    edition: e.target.value,
                  })
                }
                placeholder="e.g., 2nd"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                DOI
              </label>
              <input
                type="text"
                value={additionalFields.doi || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    doi: e.target.value,
                  })
                }
                placeholder="e.g., 10.xxxx/xxxxx"
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
                placeholder="Enter website name"
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
                placeholder="Enter URL"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Retrieval Date
              </label>
              <input
                type="date"
                value={additionalFields.retrievalDate || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    retrievalDate: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'dataset' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Data Type
              </label>
              <input
                type="text"
                value={additionalFields.dataType || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    dataType: e.target.value,
                  })
                }
                placeholder="e.g., Survey data"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Repository
              </label>
              <input
                type="text"
                value={additionalFields.repository || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    repository: e.target.value,
                  })
                }
                placeholder="e.g., Figshare"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                DOI
              </label>
              <input
                type="text"
                value={additionalFields.doi || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    doi: e.target.value,
                  })
                }
                placeholder="e.g., 10.xxxx/xxxxx"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'software' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Version
              </label>
              <input
                type="text"
                value={additionalFields.version || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    version: e.target.value,
                  })
                }
                placeholder="e.g., 2.0.1"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Platform
              </label>
              <input
                type="text"
                value={additionalFields.softwarePlatform || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    softwarePlatform: e.target.value,
                  })
                }
                placeholder="e.g., Windows, macOS"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Repository
              </label>
              <input
                type="text"
                value={additionalFields.repository || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    repository: e.target.value,
                  })
                }
                placeholder="e.g., GitHub"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                DOI
              </label>
              <input
                type="text"
                value={additionalFields.doi || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    doi: e.target.value,
                  })
                }
                placeholder="e.g., 10.xxxx/xxxxx"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'multimedia' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Media Type
              </label>
              <select
                value={additionalFields.mediaType || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    mediaType: e.target.value as 'video' | 'audio' | 'image' | 'artwork' | 'map' | 'podcast' | 'presentation',
                  })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              >
                <option value="">Select media type</option>
                <option value="Video">Video</option>
                <option value="Audio">Audio</option>
                <option value="Image">Image</option>
                <option value="Podcast">Podcast</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Platform
              </label>
              <input
                type="text"
                value={additionalFields.streamingPlatform || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    streamingPlatform: e.target.value,
                  })
                }
                placeholder="e.g., YouTube, Spotify"
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
                placeholder="Enter URL"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'thesis' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Type
              </label>
              <select
                value={additionalFields.thesisType || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    thesisType: e.target.value as 'doctoral' | 'masters' | 'undergraduate' | 'published',
                  })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              >
                <option value="">Select thesis type</option>
                <option value="doctoral">Doctoral Dissertation</option>
                <option value="masters">Master&apos;s Thesis</option>
                <option value="undergraduate">Undergraduate Thesis</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Institution
              </label>
              <input
                type="text"
                value={additionalFields.institution || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    institution: e.target.value,
                  })
                }
                placeholder="Enter institution name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Database
              </label>
              <input
                type="text"
                value={additionalFields.database || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    database: e.target.value,
                  })
                }
                placeholder="e.g., ProQuest Dissertations"
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
                placeholder="Enter URL"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {resourceType === 'unpublished' && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Type
              </label>
              <select
                value={additionalFields.unpublishedType || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    unpublishedType: e.target.value as 'manuscript' | 'paper' | 'report' | 'data',
                  })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              >
                <option value="">Select type</option>
                <option value="manuscript">Manuscript</option>
                <option value="paper">Conference Paper</option>
                <option value="report">Research Report</option>
                <option value="data">Raw Data</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Institution
              </label>
              <input
                type="text"
                value={additionalFields.institution || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    institution: e.target.value,
                  })
                }
                placeholder="Enter institution name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Department
              </label>
              <input
                type="text"
                value={additionalFields.department || ''}
                onChange={(e) =>
                  setAdditionalFields({
                    ...additionalFields,
                    department: e.target.value,
                  })
                }
                placeholder="Enter department name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
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
                onClick={() => handleCopySavedCitation(citation)}
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
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => handleDeleteCitation(savedCitation.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
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