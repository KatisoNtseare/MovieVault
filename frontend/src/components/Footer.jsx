import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Footer() {
  const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer>
      <h2>MovieVault</h2>
      <div className="columns">
        <div className="column">
          <h3>Movies</h3>
          <ul>
            <li><Link to="/Action">Action</Link></li>
            <li><Link to="/Drama">Drama</Link></li>
            <li><Link to="/Comedy">Comedy</Link></li>
            <li><Link to="/Horror">Horror</Link></li>
          </ul>
        </div>

        <div className="column">
          <h3>Shows</h3>
          <ul>
            <li><Link to="/Crime">Crime</Link></li>
            <li><Link to="/Documentary">Documentary</Link></li>
            <li><Link to="/RealityShows">Reality</Link></li>
            <li><Link to="/Thriller">Thrillers</Link></li>
          </ul>
        </div>

        <div className="column">
          <h3>Year</h3>
          <ul> 
            <li><Link to="/Movies2024">2024</Link></li>
            <li><Link to="/Movies2023">2023</Link></li>
            <li><Link to="/Movies2022">2022</Link></li>
            <li><Link to="/Movies2021">2021</Link></li>
          </ul>
        </div>
      </div>

      <div className="input">
        <h3>Subscribe</h3>
        <input type="text" placeholder="Email" />
      </div>
      <p>© 2025 MovieVault. All rights reserved. 
        <br></br>By using this site, you agree to our
        <Link to="/TermsAndConditions">Terms of Service</Link>
      </p>
    </footer>
  );
}

export default Footer;
