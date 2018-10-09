import React from "react";
import PropTypes from "prop-types";

import "./style";

const ParallaxBackground = (props, context) => {
  const {
    theme: { colorPrimary }
  } = context;

  return (
    <div className="parallax" style={{ color: "#85a7f2" }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

ParallaxBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParallaxBackground;
