import "../css/Home.css";
import Ben from "../img/selfienobg.png";
import linkedInIco from "../img/linkedinico.png";
import githubIco from "../img/githubico.png";
import mailIco from "../img/mailico.png";
import React from "react";
import { ReactComponent as LinkedInSVG } from "../img/linkedin.svg";
import { ReactComponent as GitHubSVG } from "../img/github.svg";
import { ReactComponent as MailSVG } from "../img/mail.svg";

function Home() {
  return (
    <div className="home-page-container">
      <div className="home-text-container">
        <div className="home-intro-text-container text-bg">
          <p className="home-intro-text">
            Hello! I'm <br />
            <b>Ben De Cruz</b>,
          </p>
        </div>
        <div className="home-body-text-container text-bg">
          <p className="home-body-text-title">
            an up & coming <br />
            <b>Full Stack Developer!</b>
          </p>
          <p className="home-body-text-title show-775px">
            <b>Full Stack Developer!</b>
          </p>

          <p className="home-body-text">
            Welcome to my Portfolio site! Hopefully this site & my projects
            convey my abilities accurately to you, and I hope that they are fit
            to the position you are looking to fill, or that I have applied for.
          </p>
        </div>
        <div className="social-icons-container">
          <a href="https://www.linkedin.com/in/bendecruz/">
            <LinkedInSVG />
          </a>
          <a href="https://github.com/bendecruz745/">
            <GitHubSVG />
          </a>
          <a href="mailto:contact@bendecruz.com">
            <MailSVG />
          </a>
        </div>
      </div>
      <img src={Ben} alt="It is indeed me, Ben" className="ben-picture" />
    </div>
  );
}

export default Home;
