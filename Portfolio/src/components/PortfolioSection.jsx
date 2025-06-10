import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Ahuse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://placehold.co/555x400",
      link: "#",
      featured: false
    },
    {
      id: 2,
      title: "App Dashboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://placehold.co/555x400",
      link: "#",
      featured: false
    },
    {
      id: 3,
      title: "Easy Rent",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://placehold.co/555x400",
      link: "#",
      featured: true
    }
  ];

  return (
    <section className="w-full py-32">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        {/* Title Section */}
        <div className="max-w-4xl">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-800 font-['Roboto'] leading-loose">
              Recent Projects
            </h3>
            <h2 className="text-7xl font-bold text-gray-800 font-['Roboto'] leading-tight">
              My Portfolio
            </h2>
          </div>
        </div>

        {/* Dribbble Button */}
        <div className="flex-shrink-0">
          <button className="btn-border">
            <span className="text-sm font-normal font-['Roboto'] whitespace-nowrap">
              Visit My Dribbble
            </span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item bg-slate-50 rounded-xl flex flex-col overflow-hidden h-full"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover portfolio-image"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col gap-8 flex-grow">
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-gray-800 font-['Roboto'] leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg font-normal text-gray-700 font-['Roboto'] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* CTA Link */}
              <div className="mt-auto">
                <a
                  href={project.link}
                  className="portfolio-link inline-flex items-center gap-4 pb-2.5"
                >
                  <span className="text-sm font-semibold text-black font-['Roboto']">
                    View In Dribbble
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