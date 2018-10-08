import React from "react";
import PropTypes from "prop-types";
import ResumeItem from "@components/ResumeItem";
import ScrollToNext from "@components/ScrollToNext";
import resumeItems from "./resume-items";

import "./style.scss";

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="resume-page">
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>PROFESSIONAL TIMELINE</h1>
        {/* <p>(a selection of my recent projects that I'm not too ashamed of)</p> */}
        <div className="resume-wrapper">
          <style jsx="true">
            {`
              .resume-item {
                background-color: ${"#ffffff"};
                color: ${textAlternate};
              }
              .resume-item a {
                color: ${textAlternate};
              }
              .resume-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {resumeItems.map((item, i) => (
            <ResumeItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <br />
      <ScrollToNext pageSelector=".resume-page" />
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;
