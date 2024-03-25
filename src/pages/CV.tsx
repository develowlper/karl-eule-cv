
const personaData = {
  name: 'Daniel Schulz',
  address: 'Leipzig, Germany',
  email: 'd.schulz [at] hello-sunshine.dev',

}

export default function CV() {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>{personaData.name}</h1>
        <p>{personaData.address} | <a href={personaData.email}>{personaData.email}</a></p>
        {/* <p>[LinkedIn Profile] | [GitHub Profile] | [Personal Website]</p> */}
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h2>Professional Summary</h2>
        <p>
          As an adept software engineer specializing in web development, I carry a proven track record of crafting high-quality, innovative solutions that leverage the power of modern web technologies like React, TypeScript, and Node.js. Stemming from a strong academic background with a Master's in Computer Visualistics and a Bachelor's in Computer Science, I have honed my skills through diverse roles that ranged from creating Olympic timing software using C# and WPF to developing engaging front-end experiences for global brands. With an analytical approach to problem-solving and a keen eye for user-centric design, my portfolio showcases a suite of applications that are as intuitive as they are impactful.
        </p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2> Career Goals</h2>
        <p>
          My passion lies in the art of creation and innovation within the tech sphere. I find profound satisfaction in architecting new solutions from the ground up, meticulously designing systems that are not only efficient and scalable but also elegantly simple. One of my foremost professional goals is to continue pushing the boundaries of what's possible in web development, demonstrating that even the most sophisticated functionalities can be manifested through clear, concise, and accessible design. I strive to take on projects that challenge me to step out of my comfort zone, allowing me to grow as a developer and as a mentor to peers who share the desire to transform intricate concepts into seamlessly executed realities.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>
          Work Experience
        </h2>
        <article style={{ marginBottom: '15px', pageBreakInside: 'avoid' }} >
          <h3>
            Web Developer, Sensape, Leipzig — 2019-Present
          </h3>
          <ul>
            <li>
              Specialize in front-end development with a focus on creating engaging user experiences.
            </li>
            <li>
              Utilize TypeScript, Node.js, and React to build and maintain web applications.
            </li>
          </ul>
        </article>
        <article style={{ marginBottom: '15px', pageBreakInside: 'avoid' }}>
          <h3>
            Freelancer, Self-Employed, Leipzig — Jul 2018-Dec 2018 | Jan 2015-Jun 2015
          </h3>
          <ul>
            <li
            >
              Provided web development services on a project basis.
            </li>
            <li>
              Specialize in front-end development with a focus on creating engaging user experiences.
            </li>
            <li>
              Utilize JavaScript, Node.js, and React to build and maintain web applications.
            </li>
          </ul>
        </article>
        <article style={{ marginBottom: '15px', pageBreakInside: 'avoid' }}>
          <h3>
            Web Developer, Sofistiq, Leipzig — 2016-2018
          </h3>
          <ul>
            <li>
              Involved in the full-stack web development cycle with a concentration on robust front-end interfaces.
            </li>
          </ul>
        </article>
        <article style={{ marginBottom: '15px', pageBreakInside: 'avoid' }}>
          <h3>
            Software Developer, ST Sportservice, Leipzig — 2014-2015
          </h3>
          <ul>
            <li>
              Developed software solutions for olympic timing using C# and WPF.
            </li>
            <li>
              Contributed to the development of reliable and efficient applications for competitive sports environments.
            </li>
          </ul>
        </article>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Education</h2>
        <ul>
          <li>
            Master of Science in Computer Visualistics, OvGU Magdeburg (2010-2013)
          </li>
          <li>
            Bachelor of Science in Computer Science, MLU Halle-Wittenberg (2006-2010)
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Skills</h2>
        <p>TypeScript, JavaScript, Node.js, React, Remix, Next.js, Git, Hosting, CI/CD, Gitlab, Github, MongoDB, Mongoose, FeathersJS</p>
      </section>
    </div>
  );
}
