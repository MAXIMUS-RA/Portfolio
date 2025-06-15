import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function SplashScreen({ onComplete }) {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp);
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.from("#intro-slider", {
      xPercent: -100,
      duration: 0.8,
      delay: 0.7,
    })
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        stagger: 0.1,
        delay: 0.1,
      })
      .to("#intro-slider", {
        xPercent: -100,
        duration: 0.8,
      })
      .from("#welcome", {
        opacity: 0,
        duration: 0.4,
      })
      .to("#welcome", {
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      })
      .to("#splash-container", {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
      });

    return () => ctx.revert();
  }, [onComplete]);
  return (
    <div
      id="splash-container"
      className="fixed inset-0 z-50 bg-white"
      ref={comp}
    >
      <div className="relative h-screen">
        <div
          id="intro-slider"
          className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
            id="title-1"
          >
            Software Engineer
          </h1>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
            id="title-2"
          >
            Designer
          </h1>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
            id="title-3"
          >
            Freelancer
          </h1>
        </div>

        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1
            id="welcome"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
