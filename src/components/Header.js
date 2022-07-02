

function Header() {
    return (
      <div className="header">
        <h1 className="logo">JW</h1>
        <div className="react-logo" >
          <h1>REACT</h1>
          <i className="fa-brands fa-react"></i>
          <h1>INSIDE</h1>
        </div>
        <nav className="links" >
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