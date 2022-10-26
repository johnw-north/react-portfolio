

function About() {
    return (
      <div className="about">
        <div className="about__skills">
          <h1 className="skills__title">SKILLS</h1>
          <div className="skills__list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>Rest API</li>
              <li>SQL</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
        <div className="about__bio">
          <h1 className="bio__title">ABOUT ME</h1>
          <p>
          As a self-taught software engineer, I focus on developing meaningful, personal projects involving a large set of technical skills and project management implementation to acquire the experience that I would have had in formal education.
          During my free time, I like to delve into new technologies. This has led to me working on Virtual Reality projects and moving into the software developer industry for the last 3 years. Becoming a developer means there is always something new to learn and the satisfaction of bug free code drives accomplishment.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;