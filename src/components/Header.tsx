import getTechstack from "../api/techstack"

const techstack = getTechstack();

export default function Header() {
  return <>
    <header className='header'>
      <img className="profilepic" src="/profile.webp" alt="Daniel Schulz" />
      <h1>
        Hi, i'm Daniel. I'm a fullstack developer from Leipzig.
      </h1>
    </header>
    <h2>
      Techstack:
    </h2>
    <ul className='techstack'>
      {techstack.map((tech) => (
        <li className='pill techstackitem' key={tech.name}>
          <a className='techstacklink' href={tech.url} target='_blank' rel="noopener noreferer">
            {tech.name}
          </a>
        </li>
      ))}
    </ul>
  </>
}
