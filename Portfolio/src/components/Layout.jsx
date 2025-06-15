import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Intro from "./Intro";
import SkillsSection from "./SkillsSection";
import AboutMe from "./AboutMe";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import useScrollAnimation from "./ScrollAnimation";
import Waves from "../Waves/Waves";
import SplashScreen from "./SplashScreen";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useScrollAnimation();

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Waves
          lineColor="#D4CFDE"
          backgroundColor="transparent"
          waveSpeedX={0.008}
          waveSpeedY={0.004}
          waveAmpX={25}
          waveAmpY={12}
          friction={0.96}
          tension={0.006}
          maxCursorMove={90}
          xGap={20}
          yGap={50}
          className="fixed inset-0 z-0"
          style={{ pointerEvents: "none" }}
        />

        <div className="relative z-10 px-4 sm:px-8 lg:px-16 xl:px-20">
          <Header />
        </div>

        <div className="relative z-10 px-4 sm:px-8 lg:px-16 xl:px-20">
          <div className="bg-[#ffffff]/0">
            <Intro />
            <SkillsSection />
            <AboutMe />
            <PortfolioSection />
            <ContactSection />
          </div>
        </div>

        <div className="relative z-10 inset-x-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
