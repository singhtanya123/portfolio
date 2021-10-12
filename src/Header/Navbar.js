import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="padding" id="navbar">
      <li class=" secondary-color ">
        <Link to="/" class="navbarLogo">
          <span>T</span>anya
        </Link>
      </li>
      <ul class="secondary-color right  grid-container font ">
        <li>
          <Link to="/about" class="grid-item">
            <span class="navbarTitle">A</span>bout Me
          </Link>
        </li>
        <li>
          <Link to="/Work" class="grid-item">
            <span class="navbarTitle">W</span>ork
          </Link>
        </li>
        <li>
          <Link to="/Education" class="grid-item">
            <span class="navbarTitle">E</span>ducation
          </Link>
        </li>
        <li>
          <Link to="/Contact" class="grid-item ">
            <span class="navbarTitle">C</span>ontact
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
