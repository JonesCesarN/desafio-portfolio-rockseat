import logo from "./logo.svg";
import "./App.css";
import briefcase from "./assets/svg/briefcase.svg";
import folder from "./assets/svg/folder.svg";
import gitBranch from "./assets/svg/git-branch.svg";
import github from "./assets/svg/github.svg";
import globe from "./assets/svg/globe.svg";
import instagram from "./assets/svg/instagram.svg";
import linkedin from "./assets/svg/linkedin.svg";
import mapPin from "./assets/svg/map-pin.svg";
import mail from "./assets/svg/mail.svg";
import star from "./assets/svg/star.svg";
import twitter from "./assets/svg/twitter.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex", gap: 5 }}>
          <img src={briefcase} alt="briefcase" />
          <img src={folder} alt="folder" />
          <img src={gitBranch} alt="gitBranch" />
          <img src={github} alt="github" />
          <img src={globe} alt="globe" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={mapPin} alt="mapPin" />
          <img src={mail} alt="mail" />
          <img src={star} alt="star" />
          <img src={twitter} alt="twitter" />
        </div>
      </header>
    </div>
  );
}

export default App;
