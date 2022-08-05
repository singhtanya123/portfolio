const skills = [
  "HTML",
  "CSS",
  "SCSS/SASS",
  "JavaScript",
  "SQL",
  "Mongodb",
  "RabbitMQ",
];
const frameworks = ["Vue.js", "Material-UI", "Vuetify"];
const library = ["React", "Jest", "FastifyAPI"];
const devTools = ["VSCode", "Git"];
// const devTools = [
//   { name: "VSCode", icon: html },
//   { name: "Git", icon: css },
// ];
function AboutMe({ isDesktop }) {
  return (
    <div class="column display items_center padding">
      <div className="primary-color primary-background-color padding hover border">
        <div class="skills">About me</div>
        <p class="padding-left terary-color font">
          {" "}
          I have been working in Wipro since 2.4. years now. I have worked on
          enhancing applications and build new functionalities and responsive
          sites to work for the clients. I have to interact with business for
          the requirements and the functionality to get the best output as
          clients desired. I have been using
          <span class="footer-icon">
            {" "}
            JavaScript, HTML, React, CSS, Vue.js{" "}
          </span>{" "}
          to build interactive media and adding more standard designs and easy
          to use functionality with css{" "}
          <span class="footer-icon"> Vuetify, Bootstrap Material UI</span>.
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
            <header className="skills primary-color card-container">
              Framework
            </header>
            {frameworks.map((framework, index) => (
              <div key={index} className="font ">
                <ol> - {framework}</ol>
              </div>
            ))}
          </div>
          <div class="card primary-background-color terary-color border padding">
            <header className="skills primary-color card-container">
              Library
            </header>
            {library.map((lib, index) => (
              <div key={index} className="font">
                <ol> - {lib}</ol>
              </div>
            ))}
          </div>
          <div class="card primary-background-color terary-color border padding">
            <header className="skills primary-color card-container">
              Tools
            </header>
            {devTools.map((devTool, index) => (
              <div key={index} className="font">
                <ol>
                  {/* <img
                    src={devTool.icon}
                    height={20}
                    width={20}
                    alt="icons"
                    class="margin-right"
                  />
                  {devTool.name} */}
                  - {devTool}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hobbies */}
      <div class=" primary-background-color terary-color border padding hover margin-top">
        <header className="skills primary-color">Hobbies</header>
        <div class="font">
          <ol>- Dancing</ol>
          <ol>- Painting</ol>
          <ol>- Animes</ol>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
