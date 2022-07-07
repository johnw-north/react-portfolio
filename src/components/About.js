

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
              <li>JAVA</li>
              <li>SQL</li>
              <li>Git</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="about__bio">
          <h1 className="bio__title">ABOUT ME</h1>
          <p>
            I have been programming for 2 years, starting in the virtual reality industry and now expanding my knowledge into web development. My focus is backend development, creating APIs, and working with databases. From having a background in management, I understand how producing organised and clean code is important.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;