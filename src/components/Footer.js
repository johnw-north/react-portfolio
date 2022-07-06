// const btnEmail = document.querySelector('.btn--email')

// btnEmail.addEventListener('click', () => {
//     navigator.clipboard.writeText("johnpaulv8@gmail.com")
// })

function Footer() {  
    return (
      <div className="footer">
        <div className="footer__up">
          <i class="fa-solid fa-circle-up"></i>
          <h1>BACK TO TOP</h1>
        </div>
        <nav className="footer__links" >
          <a href="https://github.com/johnw-north">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="https://linkedin.com/in/john-warren-north">
            <i className="fa-brands fa-linkedin"></i>
          </a>          
          <div className="tooltip">
            <button className="btn--cv">
              <span class="tooltiptext" id="myTooltip">Open CV</span>
              <i class="fa-solid fa-address-card"></i>
            </button>
          </div>
          <div className="tooltip">
            <button className="btn--email">
              <span class="tooltiptext" id="myTooltip">Copy email</span>
              <i className="fa-solid fa-at"></i>
            </button>
          </div>
        </nav>     
      </div>
    );
  }
  
  export default Footer;