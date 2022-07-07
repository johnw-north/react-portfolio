import PDF from '../images/CV - John Warren.pdf';

function Header() {
  
  function copyEmail() {
    navigator.clipboard.writeText("johnpaulv8@gmail.com");
  }

    return (
      <div className="header">
        <h1 className="header__logo">JW</h1>
        <div className="react-logo" >
          <h1>REACT</h1>
          <i className="fa-brands fa-react"></i>
          <h1>INSIDE</h1>
        </div>
        <nav className="header__links" >
          <a href="https://github.com/johnw-north">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="https://linkedin.com/in/john-warren-north">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <div className="tooltip">
            <a href={PDF} download>
                <span class="tooltiptext" id="myTooltip">Open CV</span>
                <i class="fa-solid fa-address-card"></i>
              </a>
          </div>
          <div className="tooltip">
            <button className="btn--email" onClick={copyEmail}>
              <span class="tooltiptext" id="myTooltip">Copy email</span>
              <i className="fa-solid fa-at"></i>
            </button>
          </div>
        </nav>     
      </div>
    );
  }
  
  export default Header;