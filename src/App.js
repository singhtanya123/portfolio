import { useState, useEffect } from "react";
import "../src/styles/customstyles.css";
import "../src/styles/commonStyles.css";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Work from "./Work/Work";
import Education from "./Education/Education";
import Contact from "./Footer/Contact";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  const checkResolution = () => setIsDesktop(window.innerWidth > 1000);

  useEffect(() => {
    checkResolution();

    window.addEventListener("resize", checkResolution);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Dashboard isDesktop={isDesktop} />
          </Route>

          <Route path="/about" exact>
            <AboutMe isDesktop={isDesktop} />
          </Route>

          <Route path="/work" exact>
            <Work isDesktop={isDesktop} />
          </Route>

          <Route path="/education" exact>
            <Education isDesktop={isDesktop} />
          </Route>

          <Route path="/Contact" exact>
            <Contact isDesktop={isDesktop} />
          </Route>
        </Switch>
        <Footer />
      </header>
    </div>
  );
}

export default App;
