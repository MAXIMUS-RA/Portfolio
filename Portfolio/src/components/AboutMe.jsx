import React from "react";

function AboutMe() {
  return (
    <div className="py-32 flex items-center gap-28">
      <div className="flex-1">
        <img
          src="./src/assets/About Me.png"
          alt="Person illustration"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex-1 h-[527px] w-[790px]">
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-gray-800 text-xl font-semibold font-['Roboto'] leading-loose block mb-4">
              About
            </span>
            <div className="">
              <span className="text-gray-800 text-7xl font-bold font-['Roboto'] block">
                About Me
              </span>
            </div>{" "}
          </div>
          <div className=" flex flex-col gap-14">
            <span className=" text-2xl  font-['Roboto'] leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </span>
            <span className=" text-2xl  font-['Roboto'] leading-9 ">
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
