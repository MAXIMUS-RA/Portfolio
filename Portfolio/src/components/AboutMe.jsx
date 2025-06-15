import React from "react";
import TechMarquee from "./TechMarquee";

function AboutMe() {
  return (
    <section className="py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-28 fade-in-section">
     

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
              Hi, I'm Max! I'm a full-stack developer from Ukraine, who loves
              turning complex problems into simple, beautiful solutions. With a
              background in both design and development, I bridge the gap
              between what looks good and what works well. My approach combines
              technical expertise with creative thinking to deliver exceptional
              results.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-['Roboto'] leading-relaxed text-gray-700 stagger-child delay-400">
              I specialize in React, Node.js, PHP and modern web technologies, but
              I'm always learning something new. Whether it's building a complex
              web application or optimizing performance, I'm committed to
              delivering quality work that exceeds expectations and drives real
              business value.
            </p>
          </div>

          <div className="stagger-child delay-500 w-[1700px]">
            <TechMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
