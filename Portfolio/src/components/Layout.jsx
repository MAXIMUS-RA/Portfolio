import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Intro from "./Intro";
import SkillsSection from "./SkillsSection";
import AboutMe from "./AboutMe";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import useScrollAnimation from "./ScrollAnimation";

function Layout() {
  useScrollAnimation(); 

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
      <div className="bg-[#ffffff]">
        <Header />
        <Intro/>
        <SkillsSection/>
        <AboutMe/>
        <PortfolioSection/>
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
