import './Portfolio.css'

const webARItems = [{
  headline: 'Shopping Queen',
  link: "https://shopping-queen.sensape.com/",
  description: 'Shopping Queen ist eine WebAR-App, mit der man ein Foto mit Guido Maria Kretschmer machen kann. Am besten mit einem Mobilgerät benutzen.',
  tags: ['SPA', 'React', 'React Router', 'AWS S3']
}, {
  headline: 'Lavazza',
  link: 'https://www.lavazza-selfie.com',
  description: 'Für Lavazza wurde eine WebAR-App gebaut, mit der man Fotos vor typisch italinenischen Hintergründen machen kann.',
  tags: ['SPA', 'React', 'React Router', 'Tensorflow.js', 'AWS S3']
}]

const privat = [{
  headline: 'Hochzeit',
  link: 'https://hochzeit.karl-eule.de',
  description: 'Für die Hochzeit von Freunden habe ich eine Fotoseite gebaut. Das Password lautet "28.08.2021".',
  github: 'https://github.com/develowlper/hochzeit-f-und-f',
  tags: ['SSR', 'React', 'NextJS', 'DigitalOcean Spaces', 'AWS-SDK']
},
{
  headline: 'Profil und Portfolio',
  link: 'https://profile.karl-eule.de',
  description: 'Für euch habe eine Seite mit meinem Profil und Portfolio gebaut. ;-)',
  github: 'https://github.com/develowlper/karl-eule-cv',
  tags: ['SPA', 'React', 'React Router', 'Vite', 'Netlify']
}]


export default function Portfolio(): React.ReactNode {
  return <main>
    <h2>
      WebAR @ Sensape
    </h2>
    <p>
      Bei den beiden WebAr Apps habe ich basierend auf einem Design die WebAR-Apps gebaut. Die Apps sind mit React und React Router gebaut. Die App für Lavazza hat zusätzlich noch eine Integration von Tensorflow.js, um den Bildhintergrund zu erkennen und zu tauschen.
    </p>
    {webARItems.map((item) => {
      return <div key={item.link}>
        <a href={item.link}>
          <h3>
            {item.headline}
          </h3>
        </a>
        <p>
          {item.description}
        </p>
        <label>
          Tech:
        </label>
        <ul className="tags">
          {item.tags.map((tag) => {
            return <li className='tag-item' key={tag}>{tag}</li>
          })}
        </ul>
      </div>
    })}
    <h2>
      Privat
    </h2>
    <p>
      Hier sind ein paar Projekte, die ich privat gemacht habe.
    </p>
    {privat.map((item) => {
      return <div key={item.link}>
        <a href={item.link}>
          <h3>
            {item.headline}
          </h3>
        </a>
        <p>
          {item.description}
        </p>
        <p>
          Den Source Code des Projekts findet ihr bei <a href={item.github}>Github</a>
        </p>
        <label>
          Tech:
        </label>
        <ul className="tags">
          {item.tags.map((tag) => {
            return <li className='tag-item' key={tag}>{tag}</li>
          })}
        </ul>
      </div>
    })}
  </main >
}

