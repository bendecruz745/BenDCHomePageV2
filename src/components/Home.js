import "../css/Home.css";
import Ben from "../img/selfienobg.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="home-text-container">
          <div className="home-intro-text-container text-bg">
            <p className="home-intro-text">
              Hello! I'm <br />
              <b>Ben De Cruz</b>
            </p>
          </div>
          <div className="home-body-text-container text-bg">
            <p className="home-body-text-title">
              <span className="hide-775px">An</span> <span>Up</span>{" "}
              <span>&</span>
              <span>Coming</span>
              <span className="hide-775px">
                <b>Full Stack Developer!</b>
              </span>
            </p>
            <p className="home-body-text-title show-775px">
              <b>Full Stack Developer!</b>
            </p>

            <p className="home-body-text">
              Welcome to my Portfolio site! Hopefully this site & my projects
              convey my abilities accurately to you, and I hope that they are
              fit to the position you are looking to fill, or that I have
              applied for.
            </p>
          </div>
        </div>
        <img src={Ben} alt="It is indeed me, Ben" className="ben-picture" />
      </div>
    </div>
  );
}

export default Home;
