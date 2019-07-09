import React, { Component } from "react";
import PropTypes from "prop-types";
import { toElement as scrollToElement } from "@utils/scroll";

import "./style.scss";

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { social }
    } = this.context;
    return (
      <div className="scroll-to-next" onClick={e => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: social }}>
          <div className="scroll-text">Click Me</div>
          <button className="fas fa-chevron-down " href="#" />
        </div>
      </div>
    );
  }
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToNext.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToNext;
