import { PortfolioItem } from "./types";

export const getWebArProjects = async (): Promise<PortfolioItem[]> => [{
  key: '1',
  isActive: true,
  headline: 'Shopping Queen',
  link: "https://shopping-queen.sensape.com/",
  description: 'Ich habe bei Sensape eine React-App für die RTL-Sendung "Shopping Queen" entwickelt, die den Nutzer:innen erlaubt, virtuelle Fotos mit Guido Maria Kretschmer zu machen. Nutzt die App am besten auf eurem Mobilgerät, dafür ist sie optimiert.',
  tags: ['SPA', 'React', 'React Router', 'AWS S3']
}, {
  key: '2',
  isActive: true,
  headline: 'Lavazza',
  link: 'https://www.lavazza-selfie.com',
  description: 'Für Lavazza, eine der bekanntesten italienischen Kaffeemarken, habe ich eine WebAR-Anwendung entwickelt. Mittels TensorFlow wird der Hintergrund des Live-Kamerabildes segmentiert und durch typisch italienische Szenen ersetzt, was den Nutzer:innen ein einzigartiges fotografisches Erlebnis ermöglicht.',
  tags: ['SPA', 'React', 'React Router', 'Tensorflow.js', 'AWS S3']
}]
