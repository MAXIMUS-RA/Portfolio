import React from "react";

function AboutMe() {
  return (
    <section className="py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-28 fade-in-section">
      <div className="flex-1 order-2 lg:order-1">
        <div className="stagger-child">
          <img
            src="./src/assets/About Me.png"
            alt="Person illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain mx-auto lg:mx-0"
          />
        </div>
      </div>

      <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div>
            <span className="text-gray-800 text-lg lg:text-xl font-semibold font-['Roboto'] leading-loose block mb-4 stagger-child delay-100">
              About
            </span>
            <div className="stagger-child delay-200">
              <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Roboto'] leading-tight">
                About Me
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="text-base md:text-lg lg:text-xl font-['Roboto'] leading-relaxed text-gray-700 stagger-child delay-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-['Roboto'] leading-relaxed text-gray-700 stagger-child delay-400">
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
