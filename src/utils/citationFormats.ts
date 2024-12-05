// 定义引用数据接口
export interface Citation {
  id: string;
  type: string;
  authors: string;
  title: string;
  year: string;
  text: string;
  createdAt: Date;
  publisher?: string;
  doi?: string;
  journal?: string;
  url?: string;
  city?: string;
  pages?: string;
  volume?: string;
  issue?: string;
  editor?: string;
  bookTitle?: string;
  conferenceName?: string;
  location?: string;
  presentationDate?: string;
  university?: string;
  thesisType?: string;
  section?: string;
}

// 定义支持的格式类型
export type CitationFormat =
  | "bibtex"
  | "ris"
  | "plaintext"
  | "csl-json"
  | "endnote-xml"
  | "refworks"
  | "zotero-rdf"
  | "mendeley-xml"
  | "mods"
  | "openoffice"
  | "json-ld"
  | "csv"
  | "html";

// BibTeX 格式转换
export const toBibTeX = (citation: Citation): string => {
  const type = citation.type === "journal" ? "article" : citation.type;
  const id = `${citation.authors.split(",")[0].trim()}${citation.year}`;

  // 收集所有有值的字段
  const fields = [
    `  author = {${citation.authors}}`,
    `  title = {${citation.title}}`,
    `  year = {${citation.year}}`,
  ];

  // 根据资源类型添加特定字段
  switch (citation.type) {
    case "book":
      if (citation.publisher)
        fields.push(`  publisher = {${citation.publisher}}`);
      if (citation.city) fields.push(`  address = {${citation.city}}`);
      break;

    case "bookChapter":
      if (citation.bookTitle)
        fields.push(`  booktitle = {${citation.bookTitle}}`);
      if (citation.editor) fields.push(`  editor = {${citation.editor}}`);
      if (citation.pages) fields.push(`  pages = {${citation.pages}}`);
      if (citation.publisher)
        fields.push(`  publisher = {${citation.publisher}}`);
      break;

    case "journal":
      if (citation.journal) fields.push(`  journal = {${citation.journal}}`);
      if (citation.volume) fields.push(`  volume = {${citation.volume}}`);
      if (citation.issue) fields.push(`  number = {${citation.issue}}`);
      if (citation.pages) fields.push(`  pages = {${citation.pages}}`);
      if (citation.doi) fields.push(`  doi = {${citation.doi}}`);
      break;

    case "conference":
      if (citation.conferenceName)
        fields.push(`  booktitle = {${citation.conferenceName}}`);
      if (citation.location) fields.push(`  address = {${citation.location}}`);
      if (citation.presentationDate)
        fields.push(`  month = {${citation.presentationDate}}`);
      break;

    case "thesis":
      if (citation.university)
        fields.push(`  school = {${citation.university}}`);
      if (citation.thesisType) fields.push(`  type = {${citation.thesisType}}`);
      break;

    case "website":
      if (citation.url) fields.push(`  url = {${citation.url}}`);
      break;
  }

  return `@${type}{${id},
${fields.join(",\n")}
}`;
};

// RIS 格式转换
export const toRIS = (citation: Citation): string => {
  const typeMap: Record<string, string> = {
    book: "BOOK",
    journal: "JOUR",
    conference: "CONF",
    thesis: "THES",
    website: "ELEC",
  };

  return `TY  - ${typeMap[citation.type] || "GEN"}
AU  - ${citation.authors}
TI  - ${citation.title}
PY  - ${citation.year}
PB  - ${citation.publisher || ""}
DO  - ${citation.doi || ""}
ER  -`;
};

// CSL JSON 格式
export const toCSLJSON = (citation: Citation): string => {
  return JSON.stringify(
    {
      id: citation.id,
      type: citation.type,
      title: citation.title,
      author: [
        {
          family: citation.authors.split(",")[0].trim(),
          given: citation.authors.split(",")[1]?.trim() || "",
        },
      ],
      issued: {
        "date-parts": [[citation.year]],
      },
      publisher: citation.publisher,
      DOI: citation.doi,
    },
    null,
    2
  );
};

// EndNote XML 格式
export const toEndNoteXML = (citation: Citation): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xml>
  <records>
    <record>
      <ref-type>${citation.type}</ref-type>
      <contributors>
        <authors>${citation.authors}</authors>
      </contributors>
      <titles>
        <title>${citation.title}</title>
      </titles>
      <dates>
        <year>${citation.year}</year>
      </dates>
      <publisher>${citation.publisher || ""}</publisher>
      <doi>${citation.doi || ""}</doi>
    </record>
  </records>
</xml>`;
};

// Zotero RDF 格式
export const toZoteroRDF = (citation: Citation): string => {
  return `<?xml version="1.0"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:dc="http://purl.org/dc/elements/1.1/">
  <bib:Entry>
    <dc:title>${citation.title}</dc:title>
    <dc:creator>${citation.authors}</dc:creator>
    <dc:date>${citation.year}</dc:date>
    <dc:publisher>${citation.publisher || ""}</dc:publisher>
    <dc:identifier>doi:${citation.doi || ""}</dc:identifier>
  </bib:Entry>
</rdf:RDF>`;
};

// JSON-LD 格式
export const toJSONLD = (citation: Citation): string => {
  return JSON.stringify(
    {
      "@context": "https://schema.org/",
      "@type": "ScholarlyArticle",
      author: {
        "@type": "Person",
        name: citation.authors,
      },
      datePublished: citation.year,
      name: citation.title,
      publisher: citation.publisher,
      identifier: citation.doi,
    },
    null,
    2
  );
};

// CSV 格式
export const toCSV = (citation: Citation): string => {
  return `Type,Authors,Title,Year,Publisher,DOI\n"${citation.type}","${
    citation.authors
  }","${citation.title}","${citation.year}","${citation.publisher || ""}","${
    citation.doi || ""
  }"`;
};

// HTML 格式
export const toHTML = (citation: Citation): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Citation</title>
  <style>
    .citation { font-family: Times New Roman, serif; margin: 20px; }
    .title { font-style: italic; }
  </style>
</head>
<body>
  <div class="citation">
    <p>${citation.authors}. (${citation.year}). 
    <span class="title">${citation.title}</span>. 
    ${citation.publisher ? `${citation.publisher}.` : ""} 
    ${citation.doi ? `https://doi.org/${citation.doi}` : ""}</p>
  </div>
</body>
</html>`;
};
