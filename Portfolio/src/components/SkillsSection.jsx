import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks. Creating pixel-perfect designs that work seamlessly across all devices.",
      icon: "⚛️",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Developing robust server-side applications using Node.js, Express, and databases. Creating RESTful APIs and handling complex business logic with security best practices.",
      icon: "🔧",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Designing intuitive user experiences and beautiful interfaces. Proficient in Figma, prototyping, and user research to create designs that users love.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment. Integrating frontend and backend technologies to deliver complete digital solutions.",
      icon: "🚀",
    },
  ];

  return (
    <section id="skills" className="w-full sm:py-24 lg:py-36 fade-in-section">
      <div className="max-w-4xl mb-16 sm:mb-20 lg:mb-28">
        <div className="flex flex-col items-start gap-4 sm:gap-5">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-['Roboto'] leading-relaxed stagger-child">
            My Skills
          </h3>
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-['Roboto'] leading-tight sm:leading-tight lg:leading-[1.2] stagger-child delay-100">
              My Expertise
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 lg:gap-11 w-fit pb-4">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`skill-item py-6 sm:p-8 bg-slate-50 rounded-xl flex flex-col gap-6 sm:gap-8 h-full stagger-child delay-${
              (index + 2) * 100
            } hover:bg-slate-100 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] p-3.5 bg-white rounded-xl shadow-sm flex items-center justify-center skill-icon-container group-hover:shadow-md transition-all duration-300">
                <span className="text-2xl sm:text-3xl skill-icon group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 font-['Roboto'] leading-tight group-hover:text-[#5E3BEE] transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl font-normal text-gray-700 font-['Roboto'] leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
