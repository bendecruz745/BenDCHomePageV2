import "../css/Home.css";
import Ben from "../img/selfienobg.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="home-text-container"></div>
        <img src={Ben} alt="It is indeed me, Ben" className="ben-picture" />
      </div>
    </div>
  );
}

export default Home;
