function Education() {
  return (
    <div>
      <div className="grid-container margin ">
        {/* 10th */}
        <div className="card padding">
          <h4 className="skills primary-color card-container">High School</h4>
          <div className="font">
            <ol>2012 CBSE</ol>
            <ol>St. John's Sr. Sec. School</ol>
            <ol>7.6</ol>
          </div>
        </div>
        {/* 12th */}
        <div className="card padding">
          <h4 className="skills primary-color card-container">Intermediate</h4>
          <div className="font">
            <ol>2014 CBSE</ol>
            <ol>St. John's Sr. Sec. School</ol>
            <ol>PCM (Science)</ol>
            <ol>8.42</ol>
          </div>
        </div>
        {/* Bachelor Degree */}
        <div className="card padding">
          <h4 className="skills primary-color card-container">Graduation</h4>
          <div className="font">
            <ol>2015-2019</ol>
            <ol>GLA University</ol>
            <ol>B.Tech ( Computer Science & Engineering) </ol>
            <ol>7.45</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
