// import { Link,Router } from 'react-router-dom';

function Footer() {
  return (
    <div class="padding-left padding-top max-width primary-background-color terary-color font">
      <div>Tanya Singh</div>
      <div>tanya.tp123@gmail.com</div>
      <div class="right contact social">
        {/* <Router to="/about" class=" padding-lr">Github</Router>  */}
        <a
          href="https://github.com/singhtanya123"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social"
        >
          <i class="fa fa-github footer-icon"></i>
          {` Github`}
        </a>
        <a
          href="https://www.linkedin.com/in/tanya031"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social"
        >
          <i class="fa fa-linkedin footer-icon" aria-hidden="true"></i>
          {` LinkedIn`}
        </a>
        <a
          href="https://www.instagram.com/tanu.aku/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social"
        >
          <i class="fa fa-instagram footer-icon"></i>
          {` Instagram`}
        </a>
      </div>
    </div>
  );
}
export default Footer;
