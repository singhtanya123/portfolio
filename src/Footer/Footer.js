// import { Link,Router } from 'react-router-dom';

function Footer() {
  return (
    <div className="padding-left padding-top max-width primary-background-color terary-color font">
      <div>Tanya Singh</div>
      <div>tanya.tp123@gmail.com</div>
      <div className="right contact social">
        {/* <Router to="/about" className=" padding-lr">Github</Router>  */}
        <a
          href="https://github.com/singhtanya123"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social"
        >
          <i className="fa fa-github footer-icon"></i>
          {` Github`}
        </a>
        <a
          href="https://www.linkedin.com/in/tanya031"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social"
        >
          <i className="fa fa-linkedin footer-icon" aria-hidden="true"></i>
          {` LinkedIn`}
        </a>
        <a
          href="https://www.instagram.com/tanu.aku/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social"
        >
          <i className="fa fa-instagram footer-icon"></i>
          {` Instagram`}
        </a>
      </div>
    </div>
  );
}
export default Footer;
