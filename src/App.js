import React from "react";
import "./App.css";
import TimelinePage from "./components/TimelinePage/TimelinePage.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage.js";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutPage />
      <PortfolioPage />
      <TimelinePage />
    </div>
  );
}

export default App;
