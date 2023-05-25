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
              <span>An</span> <span>Up</span> <span>&</span>
              <span>Coming</span>
              <span>
                <b>Full Stack Developer</b>
              </span>
            </p>
            <p className="home-body-text">
              Welcome to my Portfolio site! Hopefully the content within shows
              that my ability is suitable for the position you are looking to
              fill, and that my projects can convey that ability when you check
              them out.
            </p>
          </div>
        </div>
        <img src={Ben} alt="It is indeed me, Ben" className="ben-picture" />
      </div>
    </div>
  );
}

export default Home;
