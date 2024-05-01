export default interface PatentInfo {
    title: string;
    folder: string,
    date: string,
    tags: Array<string>;
    status: string;
    patentId: string;
    url: string;
    problem: string;
    problemKeywords: Array<string>;
    solution: string;
    solutionKeywords: Array<string>;
    summary: string;
    fulltext: string;
  }