import Button from "./Button";

function Navbar() {

    return (
      <>
       <nav>
        <div className="logo">LOGO</div>
        {/* <div id="menu-icon" class='bx bx-menu'></div> */}

        <ul className="navlist">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#project">Our Blog</a></li>
            <li><a href="#contact">Support</a></li>
            <li><a href="#contact">Affilate</a></li>
            <li><a href="#contact">Programs</a></li>
        </ul>
        <div className="navButtons">
        <a href="#">Link</a>
        <Button name="Sing Up"/>
        </div>
    </nav>
      </>
    );
  }
  
  export default Navbar;