const skills = ["HTML", "CSS", "SCSS/SASS", "JavaScript", "SQL", "Python"];
const frameworks = ["Vue.js", "Material-UI", "Vuetify"];
const library = ["React", "Numpy", "Panda"];
function AboutMe() {
  return (
    <div>
      <div className="primary-color primary-background-color padding">
        <div>About me</div>
        <p class="padding-left">
          {" "}
          blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </div>

      {/* Skills */}

      <div class="grid-container margin-tb">
        <div class="card primary-background-color terary-color border padding">
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
      </div>
      {/* Hobbies */}
      <div class=" primary-background-color terary-color border padding">
        <header className="skills primary-color">Hobbies</header>
        <div class="padding-left"> Dancing || Painting || Animes</div>
      </div>
    </div>
  );
}

export default AboutMe;
