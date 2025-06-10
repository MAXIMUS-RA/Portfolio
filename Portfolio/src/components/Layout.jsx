import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Intro from "./Intro";
import SkillsSection from "./SkillsSection";
import AboutMe from "./AboutMe";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="mx-24">
      <div className="bg-[#ffffff]">
        <Header />
        <Intro/>
        <SkillsSection/>
        <AboutMe/>
        <PortfolioSection/>
        <ContactSection/>
        <Footer/>
      </div>{" "}
    </div>
  );
}

export default Layout;
