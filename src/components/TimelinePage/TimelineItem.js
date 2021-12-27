import React, { useState, useEffect } from "react";
import "./styles.css";
import Radium from "radium";
import { bounce } from "react-animations";
import { Slide } from "react-reveal";

const TimelineItem = ({ idx, role, logo, date, description, href }) => {
  const [loaded, onLoad] = useState(false);
  useEffect(() => {
    onLoad(true);
  }, [loaded]);
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };

  return (
    <Slide bottom>
      <div className="card resume-card padding-20 border-radius-20">
        <div className="flex-center margin-bottom-20 timeline-item-header">
          <img className="image resume-social-logo" src={logo}></img>
          <div className="flex-direction-col">
            <div className="font-weight-700 font-family-inter font-size-15 line-height-1 timeline-item-title">
              {role}
            </div>
            <div className="font-wight-100 font-family-inter font-size-12 timeline-item-date">
              {date}
            </div>
          </div>
        </div>
        <div className="font-wight-100 font-family-raleway font-size-15 text-center">
          {description}
        </div>
      </div>
    </Slide>
  );
};

export default TimelineItem;
