import React from "react";
import Typed from "react-typed";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page z-index-2">
        <div className="width-100-percent flex-center flex-direction-col text-center main-title-wrapper ">
          <Typed
            strings={["Hi, I'm Shima!"]}
            className="margin-30 width-100-percent font-family-inter font-weight-500 main-title"
            typeSpeed={60}
            showCursor={false}
          />
          <Typed
            strings={[
              "a product enthusiust who codes ",
              "a fullstack engineer ",
              "with a business background ",
              "based in Toronto",
            ]}
            className="font-wight-100 font-family-raleway flex-center flex-direction-row font-size-20 width-100-percent "
            typeSpeed={40}
            backSpeed={60}
            startDelay={1700}
            loop
            showCursor={true}
          />
        </div>
        <span className="flex-center flex-direction-col margin-bottom-20 arrow">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="font-size-40 margin-0 arrow-icon"
          />
          <p style={{ fontSize: "13px", marginTop: "0px" }}>scroll down</p>
        </span>
      </div>
    );
  }
}

export default LandingPage;
