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
        <h1 style={{ color: "black" }}>Portfolio</h1>
        {/* <p>
          <i>a selection of my recent projects that I'm not too ashamed of</i>
        </p> */}
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${"white"};
                color: ${"black"};
              }
              .portfolio-item__title {
                color: ${"black"};
              }
              .portfolio-item__icon {
                color: ${"black"};
              }
              .portfolio-item__desc {
                color: ${"black"};
              }
              .portfolio-item a {
                color: ${"black"};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${"black"};
                color: ${"black"};
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <br />
      {/* <ScrollToNext pageSelector=".skills-page" /> */}
    </div>
  );
};
PortfolioPage.contextTypes = {
  theme: PropTypes.any
};
export default PortfolioPage;
