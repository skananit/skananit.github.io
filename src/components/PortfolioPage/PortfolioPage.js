import React from "react";
import portfolioData from "./portfolio-items";
import "./styles.css";
import PortfolioItem from "./PortfolioItem";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="portfolio-container">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content">
          {portfolioData.map((data, idx) => (
            <PortfolioItem
              idx={idx}
              background={data.background}
              project={data.project}
              description={data.description}
              link={data.link}
              linkLabel={data.linkLabel}
              linkIcon={data.linkIcon}
              technologies={data.technologies}
              key={idx}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PortfolioPage;
