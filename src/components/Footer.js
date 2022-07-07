import PDF from '../images/CV - John Warren.pdf';

function Footer() {  
  
  function copyEmail() {
    navigator.clipboard.writeText("johnpaulv8@gmail.com");
  }
  
  function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
      <div className="footer">
        <button className="footer__up" onClick={toTop}>
          <i class="fa-solid fa-circle-up"></i>
          <h1>BACK TO TOP</h1>
        </button>
        <nav className="footer__links" >
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
  
  export default Footer;