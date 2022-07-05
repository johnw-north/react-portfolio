

function Header() {
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
        <i class="fa-solid fa-address-card"></i>
        <i className="fa-solid fa-at"></i>
        </nav>     
      </div>
    );
  }
  
  export default Header;