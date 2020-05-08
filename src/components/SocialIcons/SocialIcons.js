import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
library.add(faLinkedinIn, faGithub, faPaperPlane, faBookReader);

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
          href="https://bookshelf.website/shimakanani"
        >
          <FontAwesomeIcon
            icon={faBookReader}
            className="single-icon"
            style={{
              fontSize: "35px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:shima.kanani.t@gmail.com"
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            transform="shrink-3"
            className="single-icon"
          />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
