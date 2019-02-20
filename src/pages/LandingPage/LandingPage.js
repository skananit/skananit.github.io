import React from "react";
import PropTypes from "prop-types";
import SocialIcons from "@components/SocialIcons";
import Nav from "@components/Nav";
import ScrollToNext from "@components/ScrollToNext";
import BrowserNotes from "@components/BrowserNotes";
import Typing from "react-typing-animation";
import Typed from "react-typed";

import "./style.scss";

const LandingPage = (props, context) => {
  const {
    theme: { bgPrimary, colorPrimary }
  } = context;

  return (
    <div className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        {/* <BrowserNotes /> */}

        <div className="intro-wrapper">
          <div className="intro-name">Hi, I'm Shima!</div>

          <div className="tagline">
            <Typed
              strings={[
                "Full Stack Developer",
                "Ivey Business Student",
                "Innovator",
                "Aspiring Entrepreneur"
              ]}
              className="tagline"
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
