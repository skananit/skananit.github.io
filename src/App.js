import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import SkillPage from '@pages/Skills';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import Footer from '@components/Footer';
import { AnimatedBg, Transition } from 'scroll-background';
import ResumePage from './pages/Resume';
import ParticlesBackground from '@components/ParticlesBackground';
import NavBar from './components/NavBar';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Nav />
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ResumePage />
          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
