import React from "react";
import { ArrowUpRight } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "eCommerce",
      description:
        "A modern e-commerce web application built with PHP, React Router v7, Postgre SQL,Tailwind.",
      image: "./src/assets/catalog.png",
      link: "https://github.com/MAXIMUS-RA/eCommerce.git",
      featured: false,
    },
    {
      id: 2,
      title: "ToDo Web-App",
      description:
        "A comprehensive todo application with real-time collaboration, drag-and-drop task organization, deadline tracking, and team workspace management.",
      image: "./src/assets/Todo.png",
      link: "https://github.com/MAXIMUS-RA/ToDo.git",
      featured: false,
    },
    {
      id: 3,
      title: "Beautiful Landing Page",
      description:
        "A stunning responsive landing page featuring smooth scroll animations, interactive portfolio gallery, contact forms, and optimized performance.",
      image: "./src/assets/Landing.png",
      link: "https://github.com/MAXIMUS-RA/PromtVerse.git",
      featured: true,
    },
  ];

  return (
    <section className="w-full py-32 fade-in-section">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-16">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-800 font-['Roboto'] leading-loose stagger-child">
              Recent Projects
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 font-['Roboto'] leading-tight stagger-child delay-100">
              My Portfolio
            </h2>
          </div>
        </div>

        <div className="flex-shrink-0 stagger-child delay-200">
          <button className="btn-border">
            <span className="text-sm font-normal font-['Roboto'] whitespace-nowrap">
              <a href="https://github.com/MAXIMUS-RA">Visit My GitHub</a>
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-11">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`portfolio-item bg-slate-50 rounded-xl flex flex-col overflow-hidden h-full stagger-child delay-${
              (index + 3) * 100
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 lg:h-96 object-cover portfolio-image outline"
              />
            </div>

            <div className="p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 flex-grow">
              <div className="flex flex-col gap-4 lg:gap-5">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 font-['Roboto'] leading-tight">
                  {project.title}
                </h3>
                <p className="text-base lg:text-lg font-normal text-gray-700 font-['Roboto'] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={project.link}
                  className="portfolio-link inline-flex items-center gap-4 pb-2.5"
                >
                  <span className="text-sm font-semibold text-black font-['Roboto']">
                    View In GitHub
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 portfolio-arrow" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
