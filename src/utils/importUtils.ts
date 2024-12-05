import { Citation } from "./citationFormats";

// 验证引用数据
export const validateCitation = (citation: Partial<Citation>): boolean => {
  return !!(
    citation.authors?.trim() &&
    citation.title?.trim() &&
    citation.year?.trim() &&
    !isNaN(Number(citation.year))
  );
};

// 去重函数
export const removeDuplicates = (
  citations: Partial<Citation>[]
): Partial<Citation>[] => {
  const seen = new Set();
  return citations.filter((citation) => {
    const key = `${citation.authors}-${citation.title}-${citation.year}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

// BibTeX 文件解析
export const parseBibTeXFile = async (
  text: string
): Promise<Partial<Citation>[]> => {
  // 使用正则表达式匹配 BibTeX 条目
  const entries = text.match(/@\w+\{[^@]*\}/g) || [];
  return entries.map((entry) => {
    const type = entry.match(/@(\w+)\{/)?.[1] || "";
    const authors = entry.match(/author\s*=\s*{([^}]*)}/)?.[1] || "";
    const title = entry.match(/title\s*=\s*{([^}]*)}/)?.[1] || "";
    const year = entry.match(/year\s*=\s*{([^}]*)}/)?.[1] || "";
    const publisher = entry.match(/publisher\s*=\s*{([^}]*)}/)?.[1] || "";

    return { type, authors, title, year, publisher };
  });
};

// RIS 文件解析
export const parseRISFile = async (
  text: string
): Promise<Partial<Citation>[]> => {
  const entries = text.split("\nER  -");
  return entries
    .map((entry) => {
      const authors = entry.match(/AU  - (.*)/)?.[1] || "";
      const title = entry.match(/TI  - (.*)/)?.[1] || "";
      const year = entry.match(/PY  - (.*)/)?.[1] || "";
      const type = entry.match(/TY  - (.*)/)?.[1]?.toLowerCase() || "";

      return { type, authors, title, year };
    })
    .filter((citation) => citation.title);
};

// EndNote XML 解析
export const parseEndNoteXMLFile = async (
  text: string
): Promise<Partial<Citation>[]> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  const records = doc.getElementsByTagName("record");

  return Array.from(records).map((record) => {
    const authors = record.querySelector("authors")?.textContent || "";
    const title = record.querySelector("title")?.textContent || "";
    const year = record.querySelector("year")?.textContent || "";
    const type = record.querySelector("ref-type")?.textContent || "";

    return { type, authors, title, year };
  });
};

// CSL JSON 解析
export const parseCSLJSONFile = async (
  text: string
): Promise<Partial<Citation>[]> => {
  const data = JSON.parse(text);
  const entries = Array.isArray(data) ? data : [data];

  return entries.map((entry) => ({
    type: entry.type,
    authors:
      entry.author?.map((a: any) => `${a.family}, ${a.given}`).join(" & ") ||
      "",
    title: entry.title,
    year: entry.issued?.["date-parts"]?.[0]?.[0]?.toString() || "",
    publisher: entry.publisher,
  }));
};

// Zotero RDF 解析
export const parseZoteroRDFFile = async (
  text: string
): Promise<Partial<Citation>[]> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  const entries = doc.getElementsByTagName("bib:Entry");

  return Array.from(entries).map((entry) => {
    const authors = entry.querySelector("dc:creator")?.textContent || "";
    const title = entry.querySelector("dc:title")?.textContent || "";
    const year = entry.querySelector("dc:date")?.textContent || "";
    const type =
      entry.getAttribute("rdf:type")?.split("#").pop()?.toLowerCase() || "";

    return { type, authors, title, year };
  });
};
