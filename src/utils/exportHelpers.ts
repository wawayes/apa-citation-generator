import {
  Citation,
  CitationFormat,
  toBibTeX,
  toCSLJSON,
  toCSV,
  toEndNoteXML,
  toHTML,
  toJSONLD,
  toRIS,
  toZoteroRDF,
} from "./citationFormats";

export interface ExportOptions {
  includeFields: string[];
  sortBy: "author" | "year" | "title";
  citationStyle: "apa" | "mla" | "chicago";
  dateFormat: "full" | "short";
}

export const formatCitationPreview = (
  citations: Citation[],
  format: CitationFormat
): string => {
  // 根据不同格式返回预览内容
  switch (format) {
    case "bibtex":
      return citations.map((citation) => toBibTeX(citation)).join("\n\n");
    case "ris":
      return citations.map((citation) => toRIS(citation)).join("\n\n");
    case "csl-json":
      return citations.map((citation) => toCSLJSON(citation)).join("\n\n");
    case "endnote-xml":
      return citations.map((citation) => toEndNoteXML(citation)).join("\n\n");
    case "zotero-rdf":
      return citations.map((citation) => toZoteroRDF(citation)).join("\n\n");
    case "json-ld":
      return citations.map((citation) => toJSONLD(citation)).join("\n\n");
    case "csv":
      return citations.map((citation) => toCSV(citation)).join("\n\n");
    case "html":
      return citations.map((citation) => toHTML(citation)).join("\n\n");
    case "plaintext":
      return citations.map((citation) => citation.text).join("\n\n");
    default:
      return "";
  }
};

export const sortCitations = (
  citations: Citation[],
  sortBy: "author" | "year" | "title"
): Citation[] => {
  return [...citations].sort((a, b) => {
    switch (sortBy) {
      case "author":
        return a.authors.localeCompare(b.authors);
      case "year":
        return b.year.localeCompare(a.year);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
};

export const generateFilename = (
  format: CitationFormat,
  citationCount: number
): string => {
  const date = new Date().toISOString().split("T")[0];
  return `citations_${citationCount}_${date}${getExtension(format)}`;
};

const getExtension = (format: CitationFormat): string => {
  const extensionMap: Record<CitationFormat, string> = {
    bibtex: ".bib",
    ris: ".ris",
    "csl-json": ".json",
    "endnote-xml": ".xml",
    "zotero-rdf": ".rdf",
    csv: ".csv",
    html: ".html",
    plaintext: ".txt",
    refworks: ".txt",
    "mendeley-xml": ".xml",
    mods: ".xml",
    openoffice: ".xml",
    "json-ld": ".jsonld",
  };
  return extensionMap[format];
};
