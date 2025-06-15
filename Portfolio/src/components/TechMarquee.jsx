import React from "react";

const TechMarquee = () => {
  const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Express", color: "#000000" },
    { name: "Docker", color: "#2496ED" },
    { name: "Vercel", color: "#000000" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Python", color: "#3776AB" },
    { name: "Git", color: "#F05032" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Redux", color: "#764ABC" },
    { name: "CSS", color: "#1572B6" },
    { name: "HTML", color: "#E34F26" },
    { name: "WebSockets", color: "#4A90E2" },
    { name: "REST API", color: "#007ACC" },
    { name: "PHP", color: "#777BB4" },

  ];

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 via-white to-slate-50 py-6 border-y border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-marquee-slow whitespace-nowrap">
        <div className="flex items-center space-x-12 mx-6">
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center space-x-12 group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
              {index < technologies.length - 1 && (
                <div className="w-px h-4 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-12 mx-6">
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center space-x-12 group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
              {index < technologies.length - 1 && (
                <div className="w-px h-4 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
