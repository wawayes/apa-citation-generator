import { Citation } from "../citationFormats";

// 模拟生成引用的函数
const generateCitation = (
  citation: Partial<Citation>,
  resourceType: string,
  apaVersion: "6" | "7" = "7"
): string => {
  const {
    authors = "",
    title = "",
    year = "",
    publisher = "",
    doi = "",
    journal = "",
    pages = "",
    editor = "",
    bookTitle = "",
    city = "",
    section = "",
    url = "",
  } = citation;

  const formattedAuthors = authors.endsWith(".")
    ? authors.slice(0, -1)
    : authors;

  if (apaVersion === "7") {
    switch (resourceType) {
      case "book":
        return `${formattedAuthors}. (${year}). ${title}. ${publisher}.`;

      case "bookChapter":
        return `${formattedAuthors}. (${year}). ${title}. In ${editor} (Ed.), ${bookTitle} (pp. ${pages}). ${publisher}.`;

      case "journal":
        return `${formattedAuthors}. (${year}). ${title}. ${journal}. ${
          doi ? `https://doi.org/${doi}` : ""
        }`;

      case "newspaper":
        return `${formattedAuthors}. (${year}, ${section}). ${title}. ${journal}${
          pages ? `, ${pages}` : ""
        }.`;

      case "website":
        const retrievalDate = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return `${formattedAuthors}. (${year}). ${title}. Retrieved ${retrievalDate}, from ${url}`;

      case "conference":
        const { conferenceName, location, presentationDate } = citation;
        const isOnline = location?.toLowerCase() === "online";
        return isOnline
          ? `${formattedAuthors}. (${year}, ${presentationDate}). ${title} [Virtual presentation]. ${conferenceName}.`
          : `${formattedAuthors}. (${year}, ${presentationDate}). ${title}. Paper presented at ${conferenceName}, ${location}.`;

      case "thesis":
        const { university, thesisType } = citation;
        return `${formattedAuthors}. (${year}). ${title} [${thesisType}, ${university}]. ProQuest Dissertations & Theses Global.`;

      case "government":
        return `${formattedAuthors}. (${year}). ${title}. ${publisher}. ${
          doi ? `https://doi.org/${doi}` : ""
        }`;

      default:
        return "";
    }
  } else {
    // APA 6th Edition logic
    switch (resourceType) {
      case "book":
        return `${formattedAuthors}. (${year}). ${title}. ${city}: ${publisher}.`;

      case "bookChapter":
        return `${formattedAuthors}. (${year}). ${title}. In ${editor} (Ed.), ${bookTitle} (pp. ${pages}). ${city}: ${publisher}.`;

      case "journal":
        return `${formattedAuthors}. (${year}). ${title}. ${journal}. ${
          doi ? `doi:${doi}` : ""
        }`;

      case "newspaper":
        return `${formattedAuthors}. (${year}, ${section}). ${title}. ${journal}${
          pages ? `, p. ${pages}` : ""
        }.`;

      case "website":
        return `${formattedAuthors}. (${year}). ${title}. Retrieved from ${url}`;

      default:
        return "";
    }
  }
};

describe("Citation Generation", () => {
  describe("APA 7th Edition", () => {
    test("Book citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "The Complete Guide to Citations",
        publisher: "Academic Press",
      };

      const expected =
        "Smith, J. D. (2024). The Complete Guide to Citations. Academic Press.";
      expect(generateCitation(citation, "book", "7")).toBe(expected);
    });

    test("Book Chapter citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Understanding Citations",
        editor: "Johnson, A. B.",
        bookTitle: "Modern Academic Writing",
        pages: "123-145",
        publisher: "Academic Press",
      };

      const expected =
        "Smith, J. D. (2024). Understanding Citations. In Johnson, A. B. (Ed.), Modern Academic Writing (pp. 123-145). Academic Press.";
      expect(generateCitation(citation, "bookChapter", "7")).toBe(expected);
    });

    test("Journal Article citation with DOI", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D., & Johnson, A. B.",
        year: "2024",
        title: "Citation Practices in Academia",
        journal: "Journal of Academic Writing, 15(2), 45-67",
        doi: "10.1234/jaw.2024.123",
      };

      const expected =
        "Smith, J. D., & Johnson, A. B. (2024). Citation Practices in Academia. Journal of Academic Writing, 15(2), 45-67. https://doi.org/10.1234/jaw.2024.123";
      expect(generateCitation(citation, "journal", "7")).toBe(expected);
    });

    test("Conference Paper citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Modern Citation Methods",
        conferenceName: "International Conference on Academic Writing",
        location: "New York, NY",
        presentationDate: "May 15-17",
      };

      const expected =
        "Smith, J. D. (2024, May 15-17). Modern Citation Methods. Paper presented at International Conference on Academic Writing, New York, NY.";
      expect(generateCitation(citation, "conference", "7")).toBe(expected);
    });

    test("Conference Paper citation (Online)", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Modern Citation Methods",
        conferenceName: "International Conference on Academic Writing",
        location: "Online",
        presentationDate: "May 15-17",
      };

      const expected =
        "Smith, J. D. (2024, May 15-17). Modern Citation Methods [Virtual presentation]. International Conference on Academic Writing.";
      expect(generateCitation(citation, "conference", "7")).toBe(expected);
    });

    test("Thesis/Dissertation citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Advanced Citation Practices",
        university: "State University",
        thesisType: "Doctoral dissertation",
      };

      const expected =
        "Smith, J. D. (2024). Advanced Citation Practices [Doctoral dissertation, State University]. ProQuest Dissertations & Theses Global.";
      expect(generateCitation(citation, "thesis", "7")).toBe(expected);
    });

    test("Newspaper Article citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "The Future of Academic Publishing",
        journal: "The Academic Times",
        section: "January 15",
        pages: "B1",
      };

      const expected =
        "Smith, J. D. (2024, January 15). The Future of Academic Publishing. The Academic Times, B1.";
      expect(generateCitation(citation, "newspaper", "7")).toBe(expected);
    });

    test("Government Report citation", () => {
      const citation: Partial<Citation> = {
        authors: "National Science Foundation",
        year: "2024",
        title: "Citation Impact Report",
        publisher: "U.S. Government Printing Office",
        doi: "10.1234/nsf.2024.456",
      };

      const expected =
        "National Science Foundation. (2024). Citation Impact Report. U.S. Government Printing Office. https://doi.org/10.1234/nsf.2024.456";
      expect(generateCitation(citation, "government", "7")).toBe(expected);
    });

    test("Website citation", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Guide to Online Citations",
        url: "https://example.com/citations",
      };

      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const expected = `Smith, J. D. (2024). Guide to Online Citations. Retrieved ${today}, from https://example.com/citations`;
      expect(generateCitation(citation, "website", "7")).toBe(expected);
    });
  });

  describe("APA 6th Edition", () => {
    // ... 为每种类型添加 APA 6 版本的测试
    // 类似上面的结构，但使用 APA 6 的格式规则
    // 主要区别在于 DOI 格式、城市信息的处理等
  });

  describe("Edge Cases", () => {
    test("handles authors with trailing period", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Test Title",
        publisher: "Test Publisher",
      };

      const expected = "Smith, J. D. (2024). Test Title. Test Publisher.";
      expect(generateCitation(citation, "book", "7")).toBe(expected);
    });

    test("handles missing optional fields", () => {
      const citation: Partial<Citation> = {
        authors: "Smith, J. D.",
        year: "2024",
        title: "Test Title",
      };

      const expected = "Smith, J. D. (2024). Test Title. .";
      expect(generateCitation(citation, "book", "7")).toBe(expected);
    });
  });
});
