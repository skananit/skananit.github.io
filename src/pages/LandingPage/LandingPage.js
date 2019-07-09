import React from "react";
import PropTypes from "prop-types";
import SocialIcons from "@components/SocialIcons";
import ScrollToNext from "@components/ScrollToNext";
import Typed from "react-typed";

import "./style.scss";

const LandingPage = (props, context) => {
  const {
    theme: { bgPrimary, colorPrimary }
  } = context;

  return (
    <div className="landing-page">
      <div className="container">
        <img src="/images/pexels.jpeg" />
        <div className="counter">
          <Typed
            strings={["Hey, I'm Shima!"]}
            className="main-title"
            typeSpeed={60}
            showCursor={false}
          />
          <Typed
            strings={[
              "a software engineer . . .",
              "a business student . . . ",
              "and aspiring entrepreneur"
            ]}
            className="tagline"
            typeSpeed={40}
            backSpeed={60}
            startDelay={3000}
            loop
            showCursor={false}
          />
          <span className="icons">
            <SocialIcons />
          </span>
          <span className="scroll">
            <ScrollToNext pageSelector=".about-page" />
          </span>
        </div>
      </div>
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
