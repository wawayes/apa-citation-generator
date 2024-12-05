import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Citation } from '../utils/citationFormats';
import {
    parseBibTeXFile,
    parseCSLJSONFile,
    parseEndNoteXMLFile,
    parseRISFile,
    parseZoteroRDFFile,
    removeDuplicates,
    validateCitation
} from '../utils/importUtils';

interface ImportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (citations: Partial<Citation>[]) => void;
}

interface ImportStats {
  total: number;
  success: number;
  failed: number;
  duplicate: number;
}

interface ImportedData {
  type: string;
  authors: string;
  title: string;
  year: string;
  publisher?: string;
}

const ImportDialog: React.FC<ImportDialogProps> = ({ isOpen, onClose, onImport }) => {
  const [citations, setCitations] = useState<Partial<Citation>[]>([]);
  const [stats, setStats] = useState<ImportStats>({ total: 0, success: 0, failed: 0, duplicate: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsProcessing(true);
    setErrors([]);
    const newStats = { total: acceptedFiles.length, success: 0, failed: 0, duplicate: 0 };
    const newCitations: Partial<Citation>[] = [];

    for (const file of acceptedFiles) {
      try {
        const text = await file.text();
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        let parsedCitations: Partial<Citation>[] = [];

        switch (fileExtension) {
          case 'bib':
            parsedCitations = await parseBibTeXFile(text);
            break;
          case 'ris':
            parsedCitations = await parseRISFile(text);
            break;
          case 'xml':
            parsedCitations = await parseEndNoteXMLFile(text);
            break;
          case 'json':
            parsedCitations = await parseCSLJSONFile(text);
            break;
          case 'rdf':
            parsedCitations = await parseZoteroRDFFile(text);
            break;
          default:
            throw new Error(`Unsupported file format: ${fileExtension}`);
        }

        // 数据验证和清理
        const validCitations = parsedCitations.filter(citation => {
          const isValid = validateCitation(citation);
          if (isValid) {
            newStats.success++;
          } else {
            newStats.failed++;
          }
          return isValid;
        });

        // 去重
        const uniqueCitations = removeDuplicates(validCitations);
        newStats.duplicate = validCitations.length - uniqueCitations.length;
        newCitations.push(...uniqueCitations);

      } catch (error: unknown) {
        newStats.failed++;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setErrors(prev => [...prev, `Error processing ${file.name}: ${errorMessage}`]);
      }
    }

    setStats(newStats);
    setCitations(newCitations);
    setIsProcessing(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/x-bibtex': ['.bib'],
      'application/x-research-info-systems': ['.ris'],
      'application/xml': ['.xml'],
      'application/json': ['.json'],
      'application/rdf+xml': ['.rdf']
    },
    multiple: true
  });

  const handleFileContent = (content: string) => {
    try {
      const data = JSON.parse(content) as ImportedData[];
      // ... 其余代码保持不变
    } catch (error) {
      console.error('Failed to parse file:', error);
    }
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
          <div className="bg-white rounded-xl p-6 max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Import Citations</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>

            {/* 文件上传区域 */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-2">
                <p className="text-lg">
                  {isDragActive ? '拖放文件到这里' : '拖放文件到这里或点击选择文件'}
                </p>
                <p className="text-sm text-gray-600">
                  支持的格式: BibTeX (.bib), RIS (.ris), EndNote XML (.xml), 
                  CSL JSON (.json), Zotero RDF (.rdf)
                </p>
              </div>
            </div>

            {/* 处理状态和统计 */}
            {isProcessing && (
              <div className="mt-4">
                <div className="animate-pulse text-center">
                  正在处理文件...
                </div>
              </div>
            )}

            {/* 导入统计 */}
            {stats.total > 0 && !isProcessing && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">导入统计</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">总计</div>
                    <div className="text-xl font-semibold">{stats.total}</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-600">成功</div>
                    <div className="text-xl font-semibold text-green-600">
                      {stats.success}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-red-600">失败</div>
                    <div className="text-xl font-semibold text-red-600">
                      {stats.failed}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-yellow-600">重复</div>
                    <div className="text-xl font-semibold text-yellow-600">
                      {stats.duplicate}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 引用预览 */}
            {citations.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">预览 ({citations.length})</h3>
                <div className="max-h-60 overflow-y-auto space-y-2">
                  {citations.map((citation, index) => (
                    <div
                      key={index}
                      className="p-2 bg-gray-50 rounded hover:bg-gray-100 flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{citation.title}</div>
                        <div className="text-sm text-gray-600">
                          {citation.authors} ({citation.year})
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setCitations(prev => prev.filter((_, i) => i !== index));
                          setStats(prev => ({ ...prev, success: prev.success - 1 }));
                        }}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 错误信息 */}
            {errors.length > 0 && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium text-red-800 mb-2">导入错误</h3>
                <ul className="list-disc list-inside text-sm text-red-600">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                取消
              </button>
              <button
                onClick={() => {
                  onImport(citations);
                  onClose();
                }}
                disabled={citations.length === 0 || isProcessing}
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
                  citations.length === 0 || isProcessing
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                }`}
              >
                导入 {citations.length} 条引用
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImportDialog; 