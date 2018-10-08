import React, { Component } from "react";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import SkillPage from "@pages/Skills";
import ParallaxBackground from "@components/ParallaxBackground";
import ScrollTop from "@components/ScrollTop";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Browser from "@components/Browser";
import Footer from "@components/Footer";
import { AnimatedBg, Transition } from "scroll-background";
import ResumePage from "./pages/Resume";

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <AnimatedBg>
            <Browser except firefox>
              <ParallaxBackground />
            </Browser>

            <LandingPage />
            <Transition
              height="400px"
              from="#ffffff"
              to="#e8f3ff"
              position={0.2}
            />

            <AboutPage />
            <Transition
              height="400px"
              from="#e8f3ff"
              to="#eaeaea"
              position={0.2}
            />

            <ResumePage />
            <Transition height="400px" from="#eaeaea" to="#f2fff6" />

            <PortfolioPage />
            <Transition height="400px" from="#f2fff6" to="#ffffff" />

            <SkillPage />

            <ScrollTop />

            <Footer />
          </AnimatedBg>
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
