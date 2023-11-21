export type PortfolioItem = {
  key: string;
  isActive: boolean;
  headline: string;
  link: string;
  description: string;
  tags: string[];
  githubLink?: string;
}

export type Tech = {
  name: string
  url: string
}
