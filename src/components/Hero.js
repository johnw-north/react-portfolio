import profilePic from '../images/pill.png';

function Hero() {
    return (
      <div className="hero">
        <img src={profilePic} alt="Profile Pic" />
        <div className="hero__container">
          <h1 className="hero__name">JOHN WARREN</h1>
          <h2 className="hero__job">Software Developer</h2>      
        </div>
      </div>
    );
  }
  
  export default Hero;