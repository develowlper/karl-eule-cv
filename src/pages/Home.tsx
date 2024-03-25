import { Tech } from "../api/types"

const tools: Tech[] = [
  {
    name: 'VS Code',
    url: "https://code.visualstudio.com/",
  }, {
    name: 'ChatGPT',
    url: "https://openai.com/chatgpt"
  }, {
    "name": "Github Copilot",
    "url": "https://copilot.github.com/"
  }, {
    name: "Supabase",
    url: "https://supabase.io/"
  }, {
    name: "FeathersJS", url: "https://feathersjs.com/"
  }, {
    name: 'iTerm2',
    url: "https://iterm2.com/",
  }, {
    name: "Rest APIs",
    url: "https://restfulapi.net/"
  }, {
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/"
  },
  {
    name: "NextJS",
    url: "https://nextjs.org/"
  }, {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/"
  },
  { name: 'ESLint', url: 'https://eslint.org/' },
  { name: 'Prettier', url: 'https://prettier.io/' },
  { name: 'Vite', url: 'https://vitejs.dev/' },
  { name: 'Jest', url: 'https://jestjs.io/' },
  { name: 'Netlify', url: 'https://netlify.com' },
  { name: 'FlyIO', url: 'https://fly.io' },
]

const clients: Tech[] = [
  {
    name: 'FC Bayern München',
    url: 'https://www.sensape.com/projects/ar-photos-with-the-fc-bayern-stars'
  },
  {
    name: 'Lavazza',
    url: 'https://lavazza.de'
  },
  {
    name: 'Disney',
    url: 'https://elemental-quiz.de/'
  }, {
    name: 'Mazda',
    url: 'https://mazda.de'
  }, {
    name: 'Rheem',
    url: 'https://www.sensape.com/projects/rheem-digital-sales-process-at-the-pos'
  },
  {
    name: 'Paris Saint-Germain',
    url: 'https://www.sensape.com/projects/virtual-selfies-with-psg-players'
  }, {
    name: 'KTM',
    url: 'https://www.sensape.com/projects/selfies-with-ktm-drivers-for-traffic-and-sales-boost'
  }, {
    'name': 'Coca-Cola',
    'url': 'https://coca-cola.com'
  }, {
    name: 'RTL',
    url: 'https://www.sensape.com/projects/rtl-uses-interactive-ar-solution-to-promote-the-new-season'
  }
]

function HomePage(): React.ReactNode {

  return (
    <>
      <main>
        <h2>
          About me:
        </h2>
        <p className='aboutme'>
          I was born in 1987 in{' '}
          <a href='https://en.wikipedia.org/wiki/Leipzig' target='_blank' rel="noreferer noopener">
            Leipzig, Germany
          </a>.{' '}
          I completed my high school diploma at the{' '}
          <a href="https://www.leibniz-gymnasium-leipzig.de/" target='_blank' rel="noreferer noopener">
            Leibnizgymnasium
          </a>{' '}
          in Leipzig in 2005. From 2006-2010, I studied{' '}
          <a href="https://www.informatik.uni-halle.de/" target='_blank' rel="noreferer noopener">
            Computer Science at the MLU Halle-Wittenberg
          </a>{' '}
          and graduated with a Bachelor's degree. From 2010-2013, I studied{' '}
          <a href="https://www.computervisualistik.ovgu.de/">
            Computer Visualistics at the OvGU Magdeburg
          </a>{' '}
          and completed my Master's degree. My master's thesis was on the topic "Magic Lens in Cardiac Surgery".
          After completing my Master's degree, I worked at{' '}
          <a href="https://www.swisstiming.com/company/contact/leipzig/" target='_blank' rel="noopener noreferer">
            ST Sportservice
          </a>{' '}
          from 2014-2015. I then had a six-month stint as a freelancer before spending 2016-2018 at{' '}
          <a href='https://www.sofistiq.com' target='_blank' rel="noopener noreferer">
            Sofistiq
          </a>
          , followed by another six months as a freelancer. Since 2019, I have been working at{' '}
          <a href='https://www.sensape.com' target='_blank' rel="noopener noreferer">
            Sensape
          </a>
          , where I currently work as a web developer specializing in frontend. JavaScript, Node, and React are my most trusted companions in this endeavor.
        </p>
        <h2>
          Tools i &#128525; to use:
        </h2>
        <ul className='techstack'>
          {tools.map(x => {
            return <li className='pill toolsitem' key={x.name}>
              <a className='techstacklink' href={x.url} target='_blank' rel="noopener noreferer">{x.name}</a>
            </li>
          })}
        </ul>
        <h2>
          Clients made happy:
        </h2>
        <ul className='techstack'>
          {clients.map(x => {
            return <li className='pill clientitem' key={x.name}>
              <a className='techstacklink' href={x.url} target='_blank' rel="noopener noreferer">{x.name}</a>
            </li>
          })}
        </ul>
        <h2>Contact:</h2>
        <div>
          Email: <a href="mailto:d.schulz@hello-sunshine.dev">
            d.schulz [at] hello-sunshine.dev
          </a>
        </div>
        <div>
          LinkedIn: <a href="https://www.linkedin.com/in/daniel-schulz-226370109/" rel="noopener noreferer" target="_blank">show profile</a>
        </div>
      </main>
    </>
  )
}

export default HomePage

