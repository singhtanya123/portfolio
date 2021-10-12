import css from "../assets/css.png";
import html from "../assets/html.png";

const skills = ["HTML", "CSS", "SCSS/SASS", "JavaScript", "SQL", "Python"];
const frameworks = ["Vue.js", "Material-UI", "Vuetify"];
const library = ["React", "Numpy", "Panda"];
const devTools = [
  { name: "VSCode", icon: html },
  { name: "Git", icon: css },
];
function AboutMe({ isDesktop }) {
  return (
    <div class="column display items_center padding">
      <div className="primary-color primary-background-color padding hover border">
        <div>About me</div>
        <p class="padding-left terary-color font">
          {" "}
          blaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaaa aaaaa
          aaaaaaa aaaaaaa aaaaaaaa aaaaaaaa
        </p>
      </div>
      {/* Skills */}
      {isDesktop && (
        <div class="grid-container margin">
          <div class="card primary-background-color terary-color border padding ">
            <header className="skills primary-color card-container">
              Languages
            </header>
            {skills.map((skill, index) => (
              <div key={index} className="font">
                <ol> - {skill}</ol>
              </div>
            ))}
          </div>
          <div class="card primary-background-color terary-color border padding">
            <header className="skills primary-color">Framework</header>
            {frameworks.map((framework, index) => (
              <div key={index} className="font ">
                <ol> - {framework}</ol>
              </div>
            ))}
          </div>
          <div class="card primary-background-color terary-color border padding">
            <header className="skills primary-color">Library</header>
            {library.map((lib, index) => (
              <div key={index} className="font">
                <ol> - {lib}</ol>
              </div>
            ))}
          </div>
          <div class="card primary-background-color terary-color border padding">
            <header className="skills primary-color">Library</header>
            {devTools.map((devTool, index) => (
              <div key={index} className="font">
                <ol>
                  <img
                    src={devTool.icon}
                    height={20}
                    width={20}
                    alt="icons"
                    class="margin-right"
                  />
                  {devTool.name}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hobbies */}
      <div class=" primary-background-color terary-color border padding hover margin-top">
        <header className="skills primary-color">Hobbies</header>
        <div>
          <ol>- Dancing</ol>
          <ol>- Painting</ol>
          <ol>- Animes</ol>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
