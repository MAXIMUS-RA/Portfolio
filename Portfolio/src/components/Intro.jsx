import React from "react";
import BtnPrimary from "./BtnPprimary";

function Intro() {
  return (
    <div className="py-32 flex items-center">
      <div className="flex-1 h-[527px] w-[790px]">
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-gray-800 text-xl font-semibold font-['Roboto'] leading-loose block mb-4">
              Hey, I am Max
            </span>
            <div className="">
              <span className="text-gray-800 text-7xl font-bold font-['Roboto'] block">
                I create{" "}
                <span className="text-indigo-600 text-7xl font-bold font-['Roboto'] leading-[89.60px]">
                  product design
                </span>{" "}
                and brand experience
              </span>
            </div>{" "}
          </div>
          <div className="mr-36">
            <span className=" h-20  text-2xl  font-['Roboto'] leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </div>
        </div>
        <div>
          <div className="mt-14">
            <BtnPrimary>Get in touch</BtnPrimary>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src="./src/assets/img-people.svg"
          alt="Person illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Intro;
