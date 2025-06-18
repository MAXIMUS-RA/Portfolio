import React, { useEffect, useState } from "react";
import BtnPrimary from "./BtnPprimary";
import RotatingText from "../TextAnimation/RotatingText/RotatingText";
import Stack from "../Stack/Stack";

const images = [
  { id: 1, img: "images/IMG_3701.jpg" },
  { id: 2, img: "images/IMG_6712.jpg" },
];

function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="py-16 md:py-20 lg:py-24 xl:py-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 overflow-hidden">
      <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div>
            <span className="text-gray-800 text-base md:text-lg lg:text-xl font-semibold font-['Roboto'] leading-loose block mb-3 md:mb-4 animate-slide-up">
              Hey, I am Max
            </span>
            <div className="animate-slide-up-delay-1">
              <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Roboto'] leading-tight">
                <div className="flex items-center gap-4 ml-14 md:justify-start sm:ml-1 ">
                  I create{" "}
                  <RotatingText
                    texts={[
                      "React apps",
                      "websites",
                      "сustom CMS",
                      "solutions",
                    ]}
                    mainClassName="w-fit auto text-[#5E3BEE] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden "
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />{" "}
                </div>{" "}
                and brand experience
              </h1>
            </div>
          </div>

          <div className="animate-slide-up-delay-2">
            <p className="text-lg md:text-xl lg:text-2xl font-['Roboto'] leading-relaxed text-gray-700 max-w-lg mx-auto lg:mx-0">
              I’m a full-stack developer from Ukraine, passionate about building scalable web applications and crafting interactive user experiences with modern technologies.
            </p>
          </div>

          <div className="mt-6 mx-10 lg:mt-8 animate-slide-up-delay-3">
            <BtnPrimary><a href="#contact">Get in touch</a></BtnPrimary>
          </div>
        </div>
      </div>

      <div className="flex-1 order-1 lg:order-2 relative">
        <div
          className="floating-image animate-slide-up-delay-2"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <Stack
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 500, height: 600 }}
            cardsData={images}
          />
        </div>

        <div className="absolute top-10 left-10 w-16 h-16 bg-indigo-100 rounded-full floating-element opacity-60 animate-slide-up-delay-3"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-100 rounded-full floating-element-delay opacity-40 animate-slide-up-delay-3"></div>
        <div className="absolute top-1/2 left-0 w-8 h-8 bg-pink-100 rounded-full floating-element-slow opacity-50 animate-slide-up-delay-2"></div>
      </div>
    </section>
  );
}

export default Intro;
