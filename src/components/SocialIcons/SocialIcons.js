import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faGithub,
  faMediumM
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";
library.add(faLinkedinIn, faGithub, faMediumM, faFile);

class SocialIcons extends React.Component {
  render() {
    return (
      <div className="social-icons animate-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/skananit"
        >
          <FontAwesomeIcon icon={faGithub} className="single-icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shimakanani/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="single-icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@shima.kanani.t"
        >
          <FontAwesomeIcon icon={faMediumM} className="single-icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/16aFQnEs4ZgQiSFPynXP3tkbdFJLWiWhQ/view?usp=sharing"
        >
          <FontAwesomeIcon
            icon={faFile}
            transform="shrink-3"
            className="single-icon"
          />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
