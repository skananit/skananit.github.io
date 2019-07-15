import React from "react";
import portfolioData from "./portfolio-items";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="portfolio-container">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content">
          {portfolioData.map((data, idx) => (
            <a
              className="portfolio-item"
              key={idx}
              style={{
                backgroundImage: "url(" + data.background + ")"
              }}
              href={data.code}
            >
              <h3 style={{ backgroundColor: "white" }}>{data.project}</h3>

              <div className="icon-row" style={{ backgroundColor: "white" }}>
                {data.icons.map((icons, idx) => (
                  <FontAwesomeIcon icon={icons} key={idx} className="icon" />
                ))}
              </div>

              <p style={{ textAlign: "center", backgroundColor: "white" }}>
                {data.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default PortfolioPage;
