import './App.css'

type Tech = {
  name: string
  url: string
}

const techstack: Tech[] = [
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
  }, {
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
  }]



function App() {

  return (
    <>
      <header className='header'>
        <img className="profilepic" src="/profile.webp" alt="Daniel Schulz" />
        <h1>
          Hi, i'm Daniel. I'm a fullstack developer from Leipzig.
        </h1>
      </header>
      <main>
        <h2>
          Techstack:
        </h2>
        <ul className='techstack'>
          {techstack.map((tech) => (
            <li className='techstackitem' key={tech.name}>
              <a className='techstacklink' href={tech.url} target='_blank' rel="noopener noreferer">
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
        <h2>
          About me:
        </h2>
        <p>
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
      </main>
    </>
  )
}

export default App
