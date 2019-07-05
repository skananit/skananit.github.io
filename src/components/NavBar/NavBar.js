import React, { Component } from "react";
import PropTypes from "prop-types";
import { toElement as scrollToElement } from "@utils/scroll";

import "./styles.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    // this.handleScroll = this.handleScroll.bind(this);
    // this.state = {
    //   isSticky: false
    // };
  }
  render() {
    let classes;
    function handleScroll() {
      if (window.scrollY > 0) {
        console.log("scrolled");
        classes = "fixed-nav";
        console.log(classes);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return (
      <nav className={classes}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
