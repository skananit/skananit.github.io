import React, { Component } from "react";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import SkillPage from "@pages/Skills";
import ScrollTop from "@components/ScrollTop";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Browser from "@components/Browser";
import Footer from "@components/Footer";
import { AnimatedBg, Transition } from "scroll-background";
import ResumePage from "./pages/Resume";
import ParticlesBackground from "@components/ParticlesBackground";

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <div
          style={{
            position: "absolute",
            zIndex: "0",
            width: "100%"
          }}
        >
          <ParticlesBackground />
        </div>
        <ThemeSwitcher>
          <AnimatedBg>
            <Browser except firefox />
            {/* <ParallaxBackground /> */}

            <LandingPage style={{ zIndex: "1" }} />

            <Transition
              height="400px"
              from="#ffffff"
              to="#eaf4ff"
              position={0.2}
            />

            <AboutPage />
            <Transition
              height="400px"
              from="#eaf4ff"
              to="#f2f2f2"
              position={0.2}
            />

            <ResumePage />
            <Transition height="400px" from="#f2f2f2" to="#eaf4ff" />

            <PortfolioPage />
            <Transition height="400px" from="#eaf4ff" to="#ffffff" />

            <SkillPage />

            <ScrollTop />

            <Footer />
          </AnimatedBg>
        </ThemeSwitcher>
        {/* </Particles> */}
      </div>
    );
  }
}

export default App;
