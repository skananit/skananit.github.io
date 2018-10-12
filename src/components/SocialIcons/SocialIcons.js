import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SocialIcons = (props, context) => {
  const {
    theme: { colorPrimary }
  } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/skananit"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/shimakanani/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@shima.kanani.t"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-medium" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/resume.pdf"
        style={{ color: colorPrimary }}
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
