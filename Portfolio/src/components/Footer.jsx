import React from "react";
import { Facebook, Twitter, Instagram, Linkedin,Github } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    "Home",
    "Portfolio",
    "About me",
    "Contact",
    "Testimonials",
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram",link:"https://www.instagram.com/m_x_m200_5/" },
    { icon: Github, href: "#", label: "Github",link:"https://github.com/MAXIMUS-RA" },
  ];


  return (
    <footer className="w-full px-4 sm:px-8 lg:px-20 py-16 lg:py-28 bg-slate-50 fade-in-section">
      <div className="flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
          <div className="flex items-center gap-2 stagger-child ">
            <span className="text-xl font-semibold font-['Roboto'] text-black">
              Portfolio
            </span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-11">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`hover-primary text-base font-normal font-['Roboto'] leading-normal stagger-child delay-150`}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 stagger-child delay-150`}
                >
                  <Icon className="w-5 h-5 text-black" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
