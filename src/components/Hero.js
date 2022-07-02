import profilePic from '../images/pill.png';

function Hero() {
    return (
      <div className="hero">
        <img src={profilePic} alt="Profile Picture" />
        <div className="container">
          <h1 className="name">JOHN WARREN</h1>
          <h2 className="job">Software Developer</h2>      
        </div>
      </div>
    );
  }
  
  export default Hero;