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
            <div className="image-container">
              <div
                className="portfolio-item"
                key={idx}
                style={{
                  backgroundImage: "url(" + data.background + ")"
                }}
                href={data.code}
              >
                <h3
                  style={{ color: "black", fontWeight: "900", fontSize: "3vw" }}
                >
                  {data.project}
                </h3>
                <div className="shutter-out-horizontal">MORE</div>

                <div className="icon-row">
                  {data.icons.map((icons, idx) => (
                    <FontAwesomeIcon icon={icons} key={idx} className="icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PortfolioPage;
