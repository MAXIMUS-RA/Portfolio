import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import CircularText from "../CircularText/CircularText"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "About me", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between h-16 md:h-20 lg:h-24 items-center">
        <div className="flex items-center gap-2 header-logo">
          <span className="text-lg md:text-xl font-semibold font-['Roboto']">
            Portfolio
          </span>
        </div>

        <nav className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="nav-link text-sm lg:text-base font-normal font-['Roboto']"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <button className="btn-border text-sm lg:text-base">
            Contact Me
          </button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden mobile-menu ${
          isMobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="flex flex-col gap-4 p-4 bg-white border-t">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="nav-link text-base font-normal font-['Roboto'] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-border mt-4 self-start">Contact Me</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
