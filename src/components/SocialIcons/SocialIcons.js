import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithubSquare,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
library.add(faLinkedin, faGithubSquare, faMedium, faFilePdf);

class SocialIcons extends React.Component {
  render() {
    return (
      <div className="social-icons animate-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/skananit"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shimakanani/"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@shima.kanani.t"
        >
          <FontAwesomeIcon icon={faMedium} className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/16aFQnEs4ZgQiSFPynXP3tkbdFJLWiWhQ/view?usp=sharing"
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            transform="shrink-2"
            className="icon"
          />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
