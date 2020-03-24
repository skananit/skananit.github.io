import React from "react";
import Typed from "react-typed";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./styles.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className="counter">
          <Typed
            strings={["Hey, I'm Shima!"]}
            className="main-title"
            typeSpeed={60}
            showCursor={false}
          />
          <Typed
            strings={["full stack developer  . . .", "business student  . . ."]}
            className="tagline"
            typeSpeed={40}
            backSpeed={60}
            startDelay={1700}
            loop
            showCursor={true}
          />
          <span className="social">
            <SocialIcons />
          </span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
