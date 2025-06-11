import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "Strategy & Direction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Branding & Logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "UI & UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: "✏️",
    },
    {
      id: 4,
      title: "Webflow Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: "💻",
    },
  ];

  return (
    <section className="w-full sm:py-24 lg:py-36 fade-in-section">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-11 w-fit pb-4">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`skill-item py-6 sm:p-8 bg-slate-50 rounded-xl flex flex-col gap-6 sm:gap-8 h-full stagger-child delay-${
              (index + 2) * 100
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] p-3.5 bg-white rounded-xl shadow-sm flex items-center justify-center skill-icon-container">
                <span className="text-2xl sm:text-3xl skill-icon">
                  {skill.icon}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 font-['Roboto'] leading-tight">
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
