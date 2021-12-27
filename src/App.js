import React from "react";
import "./App.css";
import TimelinePage from "./components/TimelinePage/TimelinePage.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage.js";
import ContactPage from "./components/ContactPage/ContactPage.js";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <PortfolioPage />
      <TimelinePage />
      <ContactPage />
    </div>
  );
}

export default App;
