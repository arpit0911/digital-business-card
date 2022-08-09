import "./App.css";
import profilePic from "./images/profile-pic.jpg";
// import twitterLogo from "./images/logo/twitter-logo.svg";
import instagramLogo from "./images/logo/instagram-logo.svg";
// import facebookLogo from "./images/logo/facebook-logo.svg";
// import githubLogo from "./images/logo/github-logo.svg";
import linkedInLogo from "./images/logo/linkedin-logo.svg";
import emailLogo from "./images/logo/email-logo.svg";

const data = {
  name: "Rajat Singh",
  businessName: "Mahik Designs",
  email: "mahikdesigns@gmail.com",
  socialUrl: {
    linkedInLink: "https://www.youtube.com/?bp=wgUCEAE%3D",
    instagramLink: "https://www.instagram.com/mahikdesigns/",
  },
};
function App() {
  return (
    <div className="app">
      <header>
        {/* //TODO: change Image */}
        <img src={profilePic} alt="Profile Image" />
      </header>
      <main>
        <div className="profile-info">
          <h1>{data.name}</h1>
          <h4>{data.businessName}</h4>
          {/* //TODO: add website */}
          <p>website</p>
        </div>
        <div className="contact-info">
          <button
            onClick={() => (window.location.href = `mailto:${data.email}`)}
          >
            <img src={emailLogo} /> Email
          </button>
          {/* //TODO: add linked profile url */}
          <button
            onClick={() => (window.location.href = data.socialUrl.linkedInLink)}
            className="btn-linkedIn"
          >
            <img src={linkedInLogo} /> LinkedIn
          </button>
        </div>
        <div className="about-info">
          <h4>About</h4>
          <p>
            I am a resin artist with particular interest in product making. I
            try to visualize daily use products that can be made with resin and
            bring that to reality. Resin is versatile medium that can be moulded
            to mimic stone and metal material at more affordable cost and low
            weight.
          </p>
          <h4>Products</h4>
          <p>
            Ocean theme trays & coasters , tea light holder, Trinket trays,
            bowl, fruit basket, paintings, wall hangings, customized wall pieces
            and much more
          </p>
        </div>
      </main>

      <footer>
        <a href={data.socialUrl.instagramLink} target="_blank">
          <img src={instagramLogo} alt="instagram logo" />
        </a>
        {/* <img src={twitterLogo} alt="twitter logo" />
        <img src={facebookLogo} alt="twitter logo" />
        <img src={githubLogo} alt="twitter logo" /> */}
      </footer>
    </div>
  );
}

export default App;
