import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="padding " id="navbar">
      <div>
        <li className=" secondary-color ">
          <Link to="/">
            <img src={logo} height={60} width={60} alt="icons" />
          </Link>
        </li>
        <ul className="secondary-color right grid-container font">
          <li>
            <Link to="/about" className="grid-item">
              <span className="navbarTitle">A</span>bout Me
            </Link>
          </li>
          <li>
            <Link to="/Work" className="grid-item">
              <span className="navbarTitle">W</span>ork
            </Link>
          </li>
          <li>
            <Link to="/Education" className="grid-item">
              <span className="navbarTitle">E</span>ducation
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="grid-item ">
              <span className="navbarTitle">C</span>ontact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
