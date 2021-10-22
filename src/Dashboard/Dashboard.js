import dashboardHi from "../assets/dashboardHi.png";

import dashboard1 from "../assets/dashboard1.png";
function Dashboard({ isDesktop }) {
  return (
    <div class="dashboard">
      {/* {isDesktop && <Link to="/abc">Click here</Link>}
      => <a href="/abc">Click here</a> */}
      <div class="dashLogo">I'm Tanya.</div>
      <div class="dashLogo dashLogo-subTitle">a web designer</div>
      <img src={dashboard1} height={400} width={400} alt="icons" />
      <div class="dashboard-home ">
        <img src={dashboardHi} height={100} width={100} alt="icons" />
        <div class="dashLogo-subTitle"> Hi. </div>
        <p class="dash-para font primary-color">
          I'm a web designer/developer based in Uttar Pradesh,Firozabad. I have
          a passion for web design and love to create for web and mobile
          devices.
        </p>
      </div>
      <h2 class="terary-color">What I can do</h2>
      <div class="dashboard-aboutme  items_center">
        <div>
          <img src={dashboardHi} height={100} width={100} alt="icons" />
        </div>
        <div>
          <div class=" dashLogo-subTitle ">Design what you want</div>
          <p class="secondary-color font">
            I like to keep it simple. My goals are to focus on content and
            conveying the message that you want to send.
          </p>
        </div>
      </div>
      <div class="dashboard-aboutme  items_center">
        <div>
          <div class=" dashLogo-subTitle ">Develop what you need</div>
          <p class="secondary-color font">
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
