"use client";

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
    Citation,
    CitationFormat,
    toBibTeX,
    toRIS
} from '../utils/citationFormats';
import ExportFormatDialog from './ExportFormatDialog';

interface CitationFormProps {
  onSave: (citation: string) => void;
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
    value: 'bookChapter',
    label: 'Book Chapter',
    icon: '📑',
    description: 'For chapters in edited books',
    example: 'Smith, J. D. (2024). Chapter Title. In E. Editor (Ed.), Book Title (pp. 100-120). Publisher.'
  },
  {
    value: 'journal',
    label: 'Journal Article',
    icon: '📰',
    description: 'For academic journal articles',
    example: 'Lee, B. R., & Wang, L. K. (2024). Modern Citation Practices. Journal Name, 12(3), 45-67.'
  },
  {
    value: 'conference',
    label: 'Conference Paper',
    icon: '🎤',
    description: 'For conference proceedings and presentations',
    example: 'Smith, J. D. (2024, May). Paper Title. Paper presented at Conference Name, Location.'
  },
  {
    value: 'thesis',
    label: 'Thesis/Dissertation',
    icon: '🎓',
    description: 'For master\'s theses and doctoral dissertations',
    example: 'Smith, J. D. (2024). Thesis Title [Doctoral dissertation, University Name].'
  },
  {
    value: 'newspaper',
    label: 'Newspaper Article',
    icon: '📰',
    description: 'For newspaper articles',
    example: 'Smith, J. D. (2024, January 1). Article Title. Newspaper Name, p. A1.'
  },
  {
    value: 'government',
    label: 'Government Report',
    icon: '🏛️',
    description: 'For government documents and reports',
    example: 'Agency Name. (2024). Report Title (Publication No. 123). Publisher.'
  },
  {
    value: 'website',
    label: 'Website',
    icon: '🌐',
    description: 'For online articles and web pages',
    example: 'Brown, A. M. (2024). Citation Guidelines. https://example.com/article'
  }
];

interface FieldInfo {
  label: string;
  placeholder: string;
  example: string;
  additionalFields?: {
    name: string;
    label: string;
    placeholder: string;
    example: string;
  }[];
}

// APA 版本定义
const apaVersions = [
  {
    value: '7',
    label: 'APA 7th Edition',
    description: 'Latest APA style guide (2024 Update)',
  },
  {
    value: '6',
    label: 'APA 6th Edition',
    description: 'Legacy APA style guide (2010-2019)',
  }
];

// 添加接口定义
interface AdditionalFields {
  publisher?: string;
  doi?: string;
  url?: string;
  city?: string;
  journalTitle?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  editor?: string;
  bookTitle?: string;
  conferenceName?: string;
  presentationType?: string;
  presentationDate?: string;
  location?: string;
  siteName?: string;
  publicationDate?: string;
}

const CitationForm: React.FC<CitationFormProps> = ({ onSave }) => {
  const [resourceType, setResourceType] = useState(() => 
    localStorage.getItem('citationResourceType') || 'book'
  );
  const [authors, setAuthors] = useState(() => 
    localStorage.getItem('citationAuthors') || ''
  );
  const [title, setTitle] = useState(() => 
    localStorage.getItem('citationTitle') || ''
  );
  const [year, setYear] = useState(() => 
    localStorage.getItem('citationYear') || ''
  );
  const [additionalInfo, setAdditionalInfo] = useState(() => 
    localStorage.getItem('citationAdditionalInfo') || ''
  );
  const [citation, setCitation] = useState('');
  const [additionalFields, setAdditionalFields] = useState<Record<string, string>>({});
  const [apaVersion, setApaVersion] = useState(() => 
    localStorage.getItem('citationApaVersion') || '7'
  );
  const [savedCitations, setSavedCitations] = useState<Citation[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('savedCitations');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [selectedCitations, setSelectedCitations] = useState<string[]>([]);
  const [showFormatDialog, setShowFormatDialog] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState<string>('');

  const formatAuthors = (authors: string): string => {
    return authors.trim().replace(/\.$/, ''); // 移除末尾的句点
  };

  // 使用 Unicode 斜体字符转换标题
  const italicizeText = (text: string) => {
    const italicMap: { [key: string]: string } = {
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
      'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃',
      'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋',
      'Y': '𝑌', 'Z': '𝑍',
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': '𝘩',
      'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
      'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
      'y': '𝑦', 'z': '𝑧'
    };
    return text.split('').map(char => italicMap[char] || char).join('');
  };
  
  // 根据 APA 版本生成引用
  const generateCitation = (e?: React.FormEvent) => {
    console.log('generateCitation called with event:', e);
    if (e) {
      e.preventDefault();
    }
    
    console.log('Current form state:', {
      resourceType,
      authors,
      title,
      year,
      additionalInfo,
      additionalFields
    });

    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
    
    const formattedAuthors = formatAuthors(authors);
    let apaCitation = '';
    
    if (apaVersion === '7') {
      // APA 7th Edition (2024 更新)
      switch (resourceType) {
        case 'book': {
          const bookTitleItalic = italicizeText(title);
          const bookInfo: AdditionalFields = {
            publisher: additionalInfo,
            ...additionalFields
          };
          
          // 基本格式：Author. (Year). Title. Publisher.
          // 如果是电子书，需要添加 DOI 或 URL
          const doi = bookInfo.doi ? ` https://doi.org/${bookInfo.doi}` : '';
          const url = bookInfo.url && !bookInfo.doi ? ` ${bookInfo.url}` : '';
          
          apaCitation = `${formattedAuthors}. (${year}). ${bookTitleItalic}. ${bookInfo.publisher}${doi}${url}`;
          break;
        }
        
        case 'bookChapter': {
          const chapterInfo = additionalFields;
          const bookTitleItalic = chapterInfo.bookTitle ? italicizeText(chapterInfo.bookTitle) : '';
          
          // 基本格式：Author. (Year). Chapter title. In Editor(s) (Ed./Eds.), Book title (pp. xx-xx). Publisher.
          const editorSuffix = chapterInfo.editor?.includes('&') || chapterInfo.editor?.includes(',') ? 'Eds.' : 'Ed.';
          const pages = chapterInfo.pages ? `(pp. ${chapterInfo.pages})` : '';
          const doi = chapterInfo.doi ? ` https://doi.org/${chapterInfo.doi}` : '';
          
          apaCitation = `${formattedAuthors}. (${year}). ${title}. In ${chapterInfo.editor ? `${chapterInfo.editor} (${editorSuffix}), ` : ''}${bookTitleItalic} ${pages}. ${chapterInfo.publisher}${doi}`;
          break;
        }
        
        case 'journal': {
          const journalInfo = additionalFields;
          const journalTitleItalic = italicizeText(journalInfo.journalTitle || '');
          
          // 基本格式：Author. (Year). Title. Journal Name, Volume(Issue), pp-pp. https://doi.org/xxx
          const volume = journalInfo.volume ? `, ${journalInfo.volume}` : '';
          const issue = journalInfo.issue ? `(${journalInfo.issue})` : '';
          const pages = journalInfo.pages ? `, ${journalInfo.pages}` : '';
          const doi = journalInfo.doi ? ` https://doi.org/${journalInfo.doi}` : '';
          
          apaCitation = `${formattedAuthors}. (${year}). ${title}. ${journalTitleItalic}${volume}${issue}${pages}${doi}`;
          break;
        }
        
        case 'website': {
          const webInfo = additionalFields;
          const siteName = webInfo.siteName ? italicizeText(webInfo.siteName) : '';
          
          // 基本格式：Author. (Year, Month Day). Title. Site Name. URL
          const date = webInfo.publicationDate ? `, ${webInfo.publicationDate}` : '';
          const siteNamePart = siteName ? `. ${siteName}` : '';
          
          apaCitation = `${formattedAuthors}. (${year}${date}). ${title}${siteNamePart}. ${webInfo.url}`;
          break;
        }
        
        case 'conference': {
          const confInfo = additionalFields;
          const confNameItalic = italicizeText(confInfo.conferenceName || '');
          
          // 基本格式：Author. (Year, Month Day). Title [Type of contribution]. Conference Name, Location. DOI/URL
          const presentationType = confInfo.presentationType || 'Paper presentation';
          const date = confInfo.presentationDate ? `, ${confInfo.presentationDate}` : '';
          const location = confInfo.location?.toLowerCase().includes('online') 
            ? '[Virtual]'
            : confInfo.location ? `, ${confInfo.location}` : '';
          const doi = confInfo.doi ? ` https://doi.org/${confInfo.doi}` : '';
          const url = confInfo.url && !confInfo.doi ? ` ${confInfo.url}` : '';
          
          apaCitation = `${formattedAuthors}. (${year}${date}). ${title} [${presentationType}]. ${confNameItalic}${location}${doi}${url}`;
          break;
        }
      }
    } else {
      // APA 6th Edition (最终版本)
      switch (resourceType) {
        case 'book': {
          const bookTitleItalicApa6 = italicizeText(title);
          const bookInfo = additionalFields;
          apaCitation = `${formattedAuthors}. (${year}). ${bookTitleItalicApa6}. ${bookInfo.city}: ${bookInfo.publisher}.`;
          break;
        }
        case 'bookChapter': {
          const chapterInfo = additionalFields;
          const chapterBookTitleItalicApa6 = chapterInfo.bookTitle ? italicizeText(chapterInfo.bookTitle) : '';
          apaCitation = `${formattedAuthors}. (${year}). ${title}. In ${chapterInfo.editor || ''} (Ed.), ${chapterBookTitleItalicApa6} (pp. ${chapterInfo.pages || ''}). ${chapterInfo.city || ''}: ${chapterInfo.publisher || ''}.`;
          break;
        }
        case 'journal':
          // DOI 在第6版中的显示方式不同
          const { doi } = additionalFields;
          apaCitation = `${formattedAuthors}. (${year}). ${title}. ${additionalInfo}. ${doi ? `doi:${doi}` : ''}`;
          break;
        case 'website':
          // 第6版需要包含 "Retrieved from"
          apaCitation = `${formattedAuthors}. (${year}). ${title}. Retrieved from ${additionalInfo}`;
          break;
        case 'newspaper':
          const { section, page } = additionalFields;
          const newspaperTitle = italicizeText(additionalInfo);
          apaCitation = `${formattedAuthors}. (${year}, ${section || ''}). ${title}. ${newspaperTitle}${page ? `, p. ${page}` : ''}.`;
          break;
      }
    }
    
    console.log('Generated citation:', apaCitation);
    setCitation(apaCitation);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citation).then(() => {
      console.log('Citation copied to clipboard');
    });
  };

  const [errors, setErrors] = useState<string[]>([]);

    const validateForm = () => {
    const newErrors: string[] = [];

    if (!authors) newErrors.push('Authors are required');
    if (!title) newErrors.push('Title is required');
    if (!year) newErrors.push('Year is required');
    
    if (resourceType === 'book') {
      if (!additionalInfo) {
        newErrors.push('Publisher is required');
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
    };

  useEffect(() => {
    localStorage.setItem('citationResourceType', resourceType);
    localStorage.setItem('citationAuthors', authors);
    localStorage.setItem('citationTitle', title);
    localStorage.setItem('citationYear', year);
    localStorage.setItem('citationAdditionalInfo', additionalInfo);
  }, [resourceType, authors, title, year, additionalInfo]);

  const handleResourceTypeChange = (type: string) => {
    setResourceType(type);
  };

  // 添加一个函数来获取额外字段的标签和提示
  const getAdditionalFieldInfo = (): FieldInfo => {
    const defaultInfo: FieldInfo = {
      label: 'Additional Information',
      placeholder: 'Enter details',
      example: 'Example information'
    };

    switch (resourceType) {
      case 'book':
        return {
          label: 'Publisher',
          placeholder: 'Publisher Name',
          example: 'Oxford University Press'
        };
      case 'bookChapter':
        return {
          label: 'Book Information',
          placeholder: 'Editor(s), Book Title, Page Range',
          example: 'E. Editor (Ed.), Book Title (pp. 100-120)',
          additionalFields: [
            {
              name: 'editor',
              label: 'Editor(s)',
              placeholder: 'E. Editor',
              example: 'Last, F. M.'
            },
            {
              name: 'bookTitle',
              label: 'Book Title',
              placeholder: 'Complete Book Title',
              example: 'The Complete Guide'
            },
            {
              name: 'pages',
              label: 'Page Range',
              placeholder: 'pp. 100-120',
              example: 'pp. 100-120'
            },
            {
              name: 'publisher',
              label: 'Publisher',
              placeholder: 'Publisher Name',
              example: 'Academic Press'
            }
          ]
        };
      case 'conference':
        return {
          label: 'Conference Details',
          placeholder: 'Conference Name, Location',
          example: 'International Conference on..., City, Country',
          additionalFields: [
            {
              name: 'conferenceName',
              label: 'Conference Name',
              placeholder: 'Full Conference Name',
              example: 'Annual Meeting of...'
            },
            {
              name: 'location',
              label: 'Location',
              placeholder: 'City, Country',
              example: 'London, UK'
            },
            {
              name: 'presentationDate',
              label: 'Presentation Date',
              placeholder: 'Month Day',
              example: 'May 15'
            }
          ]
        };
      case 'journal':
        return {
          label: 'Journal Details',
          placeholder: 'Journal Name, Volume(Issue), Pages',
          example: 'Nature, 123(4), 45-67'
        };
      case 'website':
        return {
          label: 'URL',
          placeholder: 'https://example.com/article',
          example: 'Full URL of the webpage'
        };
      case 'newspaper':
        return {
          label: 'Newspaper Name',
          placeholder: 'Enter newspaper name',
          example: 'The New York Times',
          additionalFields: [
            {
              name: 'section',
              label: 'Publication Date',
              placeholder: 'Month Day',
              example: 'January 1'
            },
            {
              name: 'page',
              label: 'Page Number',
              placeholder: 'A1',
              example: 'A1'
            }
          ]
        };
      default:
        return defaultInfo;
    }
  };

  const handleSave = () => {
    if (!citation) return;

    const newCitation: Citation = {
      id: Date.now().toString(),
      type: resourceType,
      authors,
      title,
      year,
      text: citation,
      createdAt: new Date()
    };

    // 检查是否已存在相同的引用
    const isDuplicate = savedCitations.some(
      saved => saved.text === citation
    );

    if (isDuplicate) {
      // 显示温和的提示信息
      setDuplicateMessage('This citation has already been saved');
      // 3秒后自动清除提示
      setTimeout(() => setDuplicateMessage(''), 3000);
      return;
    }

    setSavedCitations(prev => {
      const updated = [...prev, newCitation];
      localStorage.setItem('savedCitations', JSON.stringify(updated));
      return updated;
    });

    // 调用父组件的 onSave
    onSave(citation);
  };

  const handleCitationSelect = (id: string, selected: boolean) => {
    console.log('Selecting citation:', id, selected); // 添加日志
    if (selected) {
      setSelectedCitations(prev => [...prev, id]);
    } else {
      setSelectedCitations(prev => prev.filter(citationId => citationId !== id));
    }
  };

  // 添加一个清除选择的函数
  const clearSelectedCitations = () => {
    setSelectedCitations([]);
  };

  const handleDeleteCitation = (id: string) => {
    setSavedCitations(prev => {
      const updated = prev.filter(citation => citation.id !== id);
      localStorage.setItem('savedCitations', JSON.stringify(updated));
      return updated;
    });
    setSelectedCitations(prev => prev.filter(citationId => citationId !== id));
  };

  const handleExport = (format: CitationFormat) => {
    console.log('Exporting citations:', selectedCitations); // 添加日志
    const selectedItems = savedCitations.filter(
      citation => selectedCitations.includes(citation.id)
    );

    if (selectedItems.length === 0) {
      alert('Please select at least one citation to export.');
      return;
    }

    let content = '';
    let filename = `citations_${Date.now()}`;
    const mimeType = 'text/plain';

    // 根据格式生成内容
    switch (format) {
      case 'bibtex':
        content = selectedItems.map(citation => toBibTeX(citation)).join('\n\n');
        filename += '.bib';
        break;
      case 'ris':
        content = selectedItems.map(citation => toRIS(citation)).join('\n\n');
        filename += '.ris';
        break;
      // ... 其他格式处理
      default:
        content = selectedItems.map(citation => citation.text).join('\n\n');
        filename += '.txt';
    }

    // 创建并触发下载
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // 导出完成后清除选择
    clearSelectedCitations();
  };

  return (
    <div className="space-y-8">
      {/* Resource Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resourceTypes.map((type) => (
          <motion.button
            key={type.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleResourceTypeChange(type.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              resourceType === type.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="text-3xl mb-3">{type.icon}</div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">{type.label}</h3>
            <p className="text-sm text-gray-700">{type.description}</p>
          </motion.button>
        ))}
      </div>

      {/* APA Version Selection */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-medium text-gray-900 mb-4">APA Version</h3>
        <div className="grid grid-cols-2 gap-4">
          {apaVersions.map((version) => (
            <button
              key={version.value}
              type="button"
              onClick={() => setApaVersion(version.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                apaVersion === version.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <h4 className="font-medium text-gray-900">{version.label}</h4>
              <p className="text-sm text-gray-700">{version.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Citation Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-medium text-gray-900">Citation Details</h3>
        </div>

        <form onSubmit={generateCitation} className="space-y-6">
          <div className="space-y-4">
            <h3>Basic Information</h3>
            <div>
              <label>Authors</label>
              <input
                type="text"
                placeholder="Enter authors"
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-700">
                Authors should be in the format: Last, F. M.
              </p>
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type="text"
                placeholder="Enter year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* 特定类型字段 */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-4">
              {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)} Specific Details
            </h3>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {getAdditionalFieldInfo().label}
              </label>
              <input
                type="text"
                placeholder={getAdditionalFieldInfo().placeholder}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-700">
                Example: {getAdditionalFieldInfo().example}
              </p>
            </div>
            {getAdditionalFieldInfo().additionalFields?.map(field => (
              <div key={field.name}>
                <label className="block text-sm text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={additionalFields[field.name] || ''}
                  onChange={(e) => setAdditionalFields(prev => ({
                    ...prev,
                    [field.name]: e.target.value
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-gray-700">
                  Example: {field.example}
                </p>
              </div>
            ))}
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </form>
      </motion.div>

      {/* Citation Preview & Export Section */}
      <AnimatePresence>
        {citation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-sm p-6 space-y-6"
          >
            {/* Citation Preview */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Generated Citation</h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
                  >
                    <span className="mr-1">📋</span>
                    Copy
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-mono text-sm text-gray-900">{citation}</p>
              </div>
            </div>

            {/* Saved Citations Section */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Saved Citations</h3>
                <div className="flex items-center space-x-2">
                  <AnimatePresence>
                    {duplicateMessage && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-amber-600 text-sm bg-amber-50 px-3 py-1 rounded-lg"
                      >
                        {duplicateMessage}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                  >
                    <span className="mr-1">💾</span>
                    Save
                  </button>
                  {savedCitations.length > 0 && (
                    <button
                      onClick={() => setShowFormatDialog(true)}
                      className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                    >
                      <span className="mr-1">📤</span>
                      Export
                    </button>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                {savedCitations.map((savedCitation) => (
                  <div
                    key={savedCitation.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCitations.includes(savedCitation.id)}
                        onChange={(e) => handleCitationSelect(savedCitation.id, e.target.checked)}
                        className="mr-3"
                      />
                      <span className="font-mono text-sm">{savedCitation.text}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteCitation(savedCitation.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Messages */}
      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg"
          >
            <div className="flex">
              <div className="flex-shrink-0">⚠️</div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-900">
                  Please correct the following errors:
                </h3>
                <ul className="mt-2 text-sm text-red-800 list-disc list-inside">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ExportFormatDialog
        isOpen={showFormatDialog}
        onClose={() => setShowFormatDialog(false)}
        onSelect={handleExport}
      />
    </div>
  );
};

export default CitationForm;