import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioItem = ({
  idx,
  background,
  project,
  description,
  link,
  linkIcon,
  linkLabel,
  technologies
}) => {
  const [clicked, onClicked] = useState(false);

  return (
    <div className="image-container">
      <div
        className="portfolio-item"
        style={{
          backgroundImage: "url(" + background + ")"
        }}
        key={idx}
      >
        {!clicked ? (
          <div className="title-box">
            <h3 className="project-title">{project}</h3>
            <button
              className="shutter-out-horizontal"
              onClick={() => onClicked(!clicked)}
            >
              Learn More
            </button>
          </div>
        ) : (
          <div className="description-box">
            <h3 className="project-title">{project}</h3>
            <p
              style={{
                textAlign: "center",
                width: "80%"
              }}
            >
              {description}
            </p>
            <h4>{"Technologies Used:"}</h4>
            <div className="technologies">
              {technologies.map((technologies, idx) => (
                <div key={idx} className="technology-description">
                  <p
                    style={{
                      textAlign: "center"
                    }}
                  >
                    {technologies.tech}
                  </p>
                  <FontAwesomeIcon icon={technologies.icon} className="icon" />
                </div>
              ))}
            </div>

            <div className="code">
              <p
                style={{
                  fontWeight: "900",
                  textAlign: "center",
                  marginRight: "0.5%",
                  display: "inline"
                }}
              >
                View {linkLabel}
              </p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={linkIcon} className="icon" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
