import { PortfolioItem } from "./types";

export const getPrivateProjects = async (): Promise<PortfolioItem[]> => [{
  headline: 'Hochzeit',
  link: 'https://hochzeit.karl-eule.de',
  description: 'Für die Hochzeit von Freunden habe ich eine Fotoseite gebaut. Das Password lautet "28.08.2021".',
  githubLink: 'https://github.com/develowlper/hochzeit-f-und-f',
  tags: ['SSR', 'React', 'NextJS', 'DigitalOcean Spaces', 'AWS-SDK'],
  isActive: false,
  key: '1'
},
{
  headline: 'Profil und Portfolio',
  link: 'https://profile.karl-eule.de',
  description: 'Für euch habe ich eine Seite mit meinem Profil und Portfolio gebaut. ;-)',
  githubLink: 'https://github.com/develowlper/karl-eule-cv',
  tags: ['SPA', 'React', 'React Router', 'Vite', 'Netlify'],
  isActive: true,
  key: '2'
}]
