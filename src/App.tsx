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
  }, {
    name: 'S3',
    url: "https://aws.amazon.com/s3/",
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
      </main>
    </>
  )
}

export default App
