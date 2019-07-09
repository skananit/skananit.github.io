import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SocialIcons = (props, context) => {
  const {
    theme: { social }
  } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/skananit"
        style={{ color: social }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/shimakanani/"
        style={{ color: social }}
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@shima.kanani.t"
        style={{ color: social }}
      >
        <i className="fab fa-medium" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/16aFQnEs4ZgQiSFPynXP3tkbdFJLWiWhQ/view?usp=sharing"
        style={{ color: social }}
      >
        <i className="far fa-file-pdf" />
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
