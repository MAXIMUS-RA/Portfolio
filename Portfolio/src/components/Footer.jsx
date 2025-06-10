import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'Portfolio', 
    'About me',
    'Contact',
    'Testimonials'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service', 
    'Cookies Settings'
  ];

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-20 py-16 lg:py-28 bg-slate-50">
      <div className="flex flex-col gap-16 lg:gap-28">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="./src/assets/react.svg" 
              alt="Logo" 
              className="w-8 h-8 object-cover" 
            />
            <span className="text-xl font-semibold font-['Roboto'] text-black">
              Portfolio
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-11">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover-primary text-base font-normal font-['Roboto'] leading-normal"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-end items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-black" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 lg:gap-11">
          {/* Divider */}
          <div className="w-full h-[1.33px] bg-gray-800/60"></div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <span className="text-black text-sm font-normal font-['Roboto'] leading-tight">
                Made with 💖 by{' '}
              </span>
              <span className="text-black text-sm font-semibold font-['Roboto'] leading-tight">
                Airdokan
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-black text-sm font-normal font-['Roboto'] leading-tight hover:text-gray-600 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;