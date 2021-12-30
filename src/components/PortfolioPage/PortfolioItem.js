import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight);

const PortfolioItem = ({
  idx,
  background,
  project,
  description,
  link,
  linkIcon,
  linkLabel,
  technologies,
  color,
}) => {
  return (
    <div className="image-container">
      <div
        className="padding-5 flex-center flex-direction-col border-radius-20 color-white text-center portfolio-item"
        style={{ backgroundImage: "url(" + background + ")" }}
        key={idx}
      >
        <div className="font-weight-700 font-family-inter project-title">
          {project}
        </div>
        <div
          className="flex-center flex-direction-col width-100-percent border-radius-30 justify-content-space-evenly"
          style={{ backgroundColor: color }}
        >
          <div className="font-wight-100 font-family-raleway font-size-15 width-90-percent">
            {description}
          </div>
          <div className="flex-center flex-direaction-row  font-family-raleway font-size-15 margin-bottom-20">
            {linkLabel}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="padding-5 color-white"
            />
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={linkIcon}
                className="font-size-30 color-white"
              />
            </a>
          </div>
          <div className="flex-center flex-direction-row technologies-wrapper">
            {technologies.map((technologies, idx) => (
              <div key={idx} className="margin-15">
                <FontAwesomeIcon
                  icon={technologies.icon}
                  className="font-size-30 color-white"
                />
                <div className="text-center font-family-inter font-size-12 font-wight-800 ">
                  {technologies.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
