import { Citation, CitationFormat, toBibTeX, toRIS } from './citationFormats';

export const formatCitationPreview = (
  citations: Citation[],
  format: CitationFormat
): string => {
  switch (format) {
    case 'bibtex':
      return citations.map((citation) => toBibTeX(citation)).join('\n\n');
    case 'ris':
      return citations.map((citation) => toRIS(citation)).join('\n\n');
    default:
      return citations.map((citation) => citation.text).join('\n\n');
  }
};
