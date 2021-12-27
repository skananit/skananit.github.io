import React from "react";
import portfolioData from "./portfolio-items";
import "./styles.css";
import PortfolioItem from "./PortfolioItem";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="flex-center flex-direction-col portfolio-container">
          <h1 className="title-font margin-30 line-height-1 portfolio-title">
            I design + build products that simplify complex problems.
          </h1>
        </div>
        <div style={{ zIndex: "2", backgroundColor: "white" }}>
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
              color={data.color}
              key={idx}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PortfolioPage;
