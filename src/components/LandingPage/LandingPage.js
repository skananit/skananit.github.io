import React from "react";
import Typed from "react-typed";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

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
            strings={["a full stack developer", "with a business background "]}
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
        <span className="arrow">
          <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          <p style={{ fontSize: "13px", marginTop: "0px" }}>scroll down</p>
        </span>
      </div>
    );
  }
}

export default LandingPage;
