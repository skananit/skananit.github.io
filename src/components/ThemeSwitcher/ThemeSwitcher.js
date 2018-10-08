import React, { Component } from "react";
import PropTypes from "prop-types";

import { getThemes } from "./themes";

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    // const allThemes = getThemes();
    // const firstTimeThemes = allThemes.filter(theme => theme.firstTime === true);
    this.state = {
      theme: {
        name: "red",
        colorPrimary: "#3e76d1",
        colorAlternate: "#FAFAFA",
        colorHighlight: "#cfe6f9",
        textPrimary: "#202121",
        navAlpha: "rgba(250, 250, 250, 0.75)"
      }
      // theme: firstTimeThemes[Math.floor((Math.random() * (firstTimeThemes.length)))]
    };

    this.switchTheme = this.switchTheme.bind(this);
  }

  getChildContext() {
    return {
      theme: this.state.theme,
      switchTheme: this.switchTheme
    };
  }

  getRandomTheme = () => {
    const currentTheme = this.state.theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  switchTheme = () => {
    const randomTheme = this.getRandomTheme();
    this.setState({
      theme: randomTheme
    });
  };

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-switcher">
        <style jsx="true">
          {`
            body {
              background-color: ${theme.bgPrimary};
              body,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              ol,
              ul {
                color: ${theme.textPrimary};
              }
            }
          `}
        </style>
        {children}
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
};

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default ThemeSwitcher;
