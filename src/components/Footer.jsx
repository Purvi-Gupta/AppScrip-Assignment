function Footer(props) {
  return (
    <>
      <footer>
          <div className="foocon">
            <h1>LOGO</h1>
          </div>
        <div className="footer-cont">
          <div className="foocon">
          <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Login</li>
              <li>Sing Up</li>
              <li>Contact Us</li>
            </ul>
            
          </div>
          <div className="foocon">
          <h2>Programs</h2>
            <ul>
              <li>Affiliate Program</li>
              <li>Ambassador Program</li>
              <li>Partnership Program</li>
            </ul>
            
          </div>
          <div className="foocon">
          <h2>Policy</h2>
            <ul>
              <li>Legal</li>
              <li>DMCA</li>
              <li>USC 2257</li>
              <li>Privacy Policy</li>
              <li>Terms  and Conditions</li>
            </ul>
           
          </div>
        </div>
          <div className="foocon f5">
          <h2>Follow Us</h2>
            <ul>
              <li><img src="/images/facebook.svg"/></li>
              <li><img src="/images/twitter.svg"/></li>
              <li><img src="/images/insta.svg"/></li>
              <li><img src="/images/youtube.svg"/></li>
            </ul>
          </div>
      </footer>
    </>
  );
}
export default Footer;
