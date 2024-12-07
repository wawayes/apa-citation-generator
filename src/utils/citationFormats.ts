export interface Citation {
  id: string;
  type: string;
  authors: string;
  title: string;
  year: string;
  text: string;
  createdAt: Date;
  // Book specific fields
  bookType?: 'printed' | 'edited' | 'chapter' | 'ebook' | 'translated';
  publisher?: string;
  publisherLocation?: string;
  contributorNames?: string;
  chapterTitle?: string;
  doi?: string;
  translators?: string;
  edition?: string;
  // Journal specific fields
  journalType?: 'print' | 'online-doi' | 'online-url' | 'preprint' | 'advance';
  journalTitle?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  repository?: string;
  // Conference specific fields
  conferenceType?: 'paper' | 'poster' | 'symposium' | 'proceedings';
  conferenceName?: string;
  conferenceLocation?: string;
  conferenceDate?: string;
  proceedingsTitle?: string;
  // Government document specific fields
  governmentType?: 'report' | 'legislation' | 'regulation' | 'court' | 'patent';
  department?: string;
  publicationNumber?: string;
  // Report specific fields
  reportType?:
    | 'technical'
    | 'white'
    | 'research'
    | 'standard'
    | 'manual'
    | 'working';
  organization?: string;
  reportNumber?: string;
  seriesTitle?: string;
  version?: string;
  // Dataset and software specific fields
  datasetType?: 'dataset' | 'software' | 'app' | 'code';
  dataType?: string;
  timePeriod?: string;
  softwarePlatform?: string;
  license?: string;
  // Multimedia specific fields
  mediaType?:
    | 'video'
    | 'audio'
    | 'image'
    | 'artwork'
    | 'map'
    | 'podcast'
    | 'presentation';
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
  // Thesis and dissertation specific fields
  thesisType?: 'doctoral' | 'masters' | 'undergraduate' | 'published';
  institution?: string;
  database?: string;
  // Unpublished work specific fields
  unpublishedType?: 'manuscript' | 'paper' | 'report' | 'data';
  status?: string;
  // Website specific fields
  websiteType?: 'webpage' | 'blog' | 'social' | 'news' | 'multimedia';
  url?: string;
  siteName?: string;
  blogName?: string;
  socialPlatform?: 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'other';
  username?: string;
  newsOrg?: string;
  retrievalDate?: string;
}

export type CitationFormat = 'bibtex' | 'ris' | 'plaintext';

// 处理未定义值的辅助函数
const formatField = (value: string | undefined): string => {
  return value?.trim() || '';
};

// BibTeX 格式转换
export const toBibTeX = (citation: Citation): string => {
  const typeMap: Record<string, string> = {
    book: 'book',
    journal: 'article',
    conference: 'inproceedings',
    government: 'techreport',
    report: 'techreport',
    dataset: 'misc',
    thesis: 'phdthesis',
    unpublished: 'unpublished',
    website: 'misc',
  };

  const type = typeMap[citation.type] || 'misc';
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
  if (citation.journalTitle) {
    fields.push(`  journal = {${formatField(citation.journalTitle)}}`);
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
  if (citation.url) {
    fields.push(`  url = {${formatField(citation.url)}}`);
  }
  if (citation.doi) {
    fields.push(`  doi = {${formatField(citation.doi)}}`);
  }
  if (citation.publisher || citation.organization || citation.repository) {
    fields.push(
      `  publisher = {${formatField(
        citation.publisher || citation.organization || citation.repository
      )}}`
    );
  }
  if (citation.version) {
    fields.push(`  version = {${formatField(citation.version)}}`);
  }
  if (citation.license) {
    fields.push(`  note = {${formatField(citation.license)} License}`);
  }
  if (citation.softwarePlatform) {
    fields.push(`  platform = {${formatField(citation.softwarePlatform)}}`);
  }
  if (citation.dataType) {
    fields.push(`  type = {${formatField(citation.dataType)}}`);
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
    conference: 'CONF',
    government: 'GOVDOC',
    report: 'RPRT',
    dataset: 'DATA',
    thesis: 'THES',
    unpublished: 'UNPB',
    website: 'ELEC',
  };

  const lines: string[] = [];
  lines.push(`TY  - ${typeMap[citation.type] || 'GEN'}`);

  if (citation.authors) {
    citation.authors.split(/,\s*&\s*|\s*,\s*/).forEach((author) => {
      lines.push(`AU  - ${formatField(author)}`);
    });
  }
  if (citation.title) {
    lines.push(`TI  - ${formatField(citation.title)}`);
  }
  if (citation.year) {
    lines.push(`PY  - ${formatField(citation.year)}`);
  }
  if (citation.journalTitle) {
    lines.push(`JO  - ${formatField(citation.journalTitle)}`);
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
  if (citation.url) {
    lines.push(`UR  - ${formatField(citation.url)}`);
  }
  if (citation.doi) {
    lines.push(`DO  - ${formatField(citation.doi)}`);
  }
  if (citation.publisher || citation.organization || citation.repository) {
    lines.push(
      `PB  - ${formatField(
        citation.publisher || citation.organization || citation.repository
      )}`
    );
  }
  if (citation.version) {
    lines.push(`VR  - ${formatField(citation.version)}`);
  }
  if (citation.license) {
    lines.push(`C1  - ${formatField(citation.license)} License`);
  }
  if (citation.softwarePlatform) {
    lines.push(`C2  - ${formatField(citation.softwarePlatform)}`);
  }
  if (citation.dataType) {
    lines.push(`C3  - ${formatField(citation.dataType)}`);
  }
  if (citation.timePeriod) {
    lines.push(`CY  - ${formatField(citation.timePeriod)}`);
  }

  lines.push('ER  -');

  return lines.join('\n');
};
