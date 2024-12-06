export interface Citation {
  id: string;
  type: string;
  authors: string;
  title: string;
  year: string;
  text: string;
  createdAt: Date;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
}

export type CitationFormat = 'bibtex' | 'ris' | 'plaintext';

// 处理未定义值的辅助函数
const formatField = (value: string | undefined): string => {
  return value?.trim() || '';
};

// BibTeX 格式转换
export const toBibTeX = (citation: Citation): string => {
  const type = citation.type === 'journal' ? 'article' : citation.type;
  const authorPart = formatField(citation.authors).split(',')[0].trim();
  const id =
    authorPart && citation.year ? `${authorPart}${citation.year}` : 'citation';

  const fields: string[] = [];

  if (citation.authors) {
    fields.push(`  author = {${formatField(citation.authors)}}`);
  }
  if (citation.title) {
    fields.push(`  title = {${formatField(citation.title)}}`);
  }
  if (citation.year) {
    fields.push(`  year = {${formatField(citation.year)}}`);
  }
  if (citation.journal) {
    fields.push(`  journal = {${formatField(citation.journal)}}`);
  }
  if (citation.volume) {
    fields.push(`  volume = {${formatField(citation.volume)}}`);
  }
  if (citation.issue) {
    fields.push(`  number = {${formatField(citation.issue)}}`);
  }
  if (citation.pages) {
    fields.push(`  pages = {${formatField(citation.pages)}}`);
  }

  return `@${type}{${id},
${fields.join(',\n')}
}`;
};

// RIS 格式转换
export const toRIS = (citation: Citation): string => {
  const typeMap: Record<string, string> = {
    book: 'BOOK',
    journal: 'JOUR',
    website: 'ELEC',
  };

  const lines: string[] = [];
  lines.push(`TY  - ${typeMap[citation.type] || 'GEN'}`);

  if (citation.authors) {
    lines.push(`AU  - ${formatField(citation.authors)}`);
  }
  if (citation.title) {
    lines.push(`TI  - ${formatField(citation.title)}`);
  }
  if (citation.year) {
    lines.push(`PY  - ${formatField(citation.year)}`);
  }
  if (citation.journal) {
    lines.push(`JO  - ${formatField(citation.journal)}`);
  }
  if (citation.volume) {
    lines.push(`VL  - ${formatField(citation.volume)}`);
  }
  if (citation.issue) {
    lines.push(`IS  - ${formatField(citation.issue)}`);
  }
  if (citation.pages) {
    lines.push(`SP  - ${formatField(citation.pages)}`);
  }
  lines.push('ER  -');

  return lines.join('\n');
};
