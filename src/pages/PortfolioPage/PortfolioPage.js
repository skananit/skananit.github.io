import React from "react";
import PropTypes from "prop-types";
import PortfolioItem from "@components/PortfolioItem";
import ScrollToNext from "@components/ScrollToNext";
import portfolioItems from "./portfolio-items";

import "./style.scss";

const PortfolioPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>PORTFOLIO</h1>
        <p>(a selection of my recent projects that I'm not too ashamed of)</p>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${"#2964c4"};
                color: ${"#ffffff"};
              }
              .portfolio-item a {
                color: ${"#ffffff"};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <br />
      <ScrollToNext pageSelector=".skills-page" />
    </div>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
