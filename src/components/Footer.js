import linkedInIco from "../img/linkedinico.png";
import githubIco from "../img/githubico.png";
import mailIco from "../img/mailico.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons-container">
        <a href="https://www.linkedin.com/in/bendecruz/">
          <img src={linkedInIco} alt="Ben's LinkedIn profile" />
        </a>
        <a href="https://github.com/bendecruz745/">
          <img src={githubIco} alt="Ben's Github profile" />
        </a>
        <a href="mailto:contact@bendecruz.com">
          <img src={mailIco} alt="Send an email to Ben" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
