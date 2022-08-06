import dashboardHi from "../assets/dashboardHi.png";

import dashboard1 from "../assets/dashboard1.png";
function Dashboard({ isDesktop }) {
  return (
    <div className="dashboard">
      {/* {isDesktop && <Link to="/abc">Click here</Link>}
      => <a href="/abc">Click here</a> */}
      <div className="dashLogo">I'm Tanya.</div>
      <div className="dashLogo dashLogo-subTitle">a web designer</div>
      <img src={dashboard1} height={400} width={400} alt="icons" />
      <div className="dashboard-home ">
        <img src={dashboardHi} height={100} width={100} alt="icons" />
        <div className="dashLogo-subTitle"> Hi. </div>
        <p className="dash-para font primary-color">
          I'm a web designer/developer based in Uttar Pradesh,Firozabad. I have
          a passion for web design and love to create for web and mobile
          devices.
        </p>
      </div>
      <h2 className="terary-color">What I can do</h2>
      <div className="dashboard-aboutme  items_center">
        <div>
          <img src={dashboardHi} height={100} width={100} alt="icons" />
        </div>
        <div>
          <div className=" dashLogo-subTitle ">Design what you want</div>
          <p className="secondary-color font">
            I like to keep it simple. My goals are to focus on content and
            conveying the message that you want to send.
          </p>
        </div>
      </div>
      <div className="dashboard-aboutme  items_center">
        <div>
          <div className=" dashLogo-subTitle ">Develop what you need</div>
          <p className="secondary-color font">
            A simple yet responsive website with authentication with standard
            design measures.
          </p>
        </div>
        <div>
          <img src={dashboardHi} height={100} width={100} alt="icons" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
