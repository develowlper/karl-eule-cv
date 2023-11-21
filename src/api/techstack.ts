import { Tech } from "./types";

export default function getTechstack(): Tech[] {
  return [
    {
      name: 'HTML',
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: 'CSS',
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: 'JavaScript',
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: 'React',
      url: "https://reactjs.org/",
    },
    { name: 'Remix', url: 'https://remix.run' },
    {
      name: 'TypeScript',
      url: "https://www.typescriptlang.org/",
    }, {
      name: 'Node.js',
      url: "https://nodejs.org/en/",
    }, {
      name: 'AWS',
      url: "https://aws.amazon.com/",
    }, {
      name: 'Git',
      url: "https://git-scm.com/",
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }]
}
