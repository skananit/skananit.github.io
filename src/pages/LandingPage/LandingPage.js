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
      <main style={{ color: colorPrimary, background: "#292929" }}>
        <BrowserNotes />
        <br />
        <br />
        <div className="intro-wrapper">
          {/* <div className="intro-name">Hi, I'm Shima!</div> */}
          <img src={"/images/shima.png"} className="shima" />

          <div className="tagline">
            <Typed
              strings={[
                "Software Engineer",
                "Business Student",
                "Aspiring Entrepreneur"
              ]}
              className="tagline"
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>
          <SocialIcons />

          <br />
        </div>
      </main>
      {/* <ScrollToNext pageSelector=".about-page" /> */}
      <Nav />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
