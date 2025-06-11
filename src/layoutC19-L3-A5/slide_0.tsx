import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type myProps = {
  isFirstSlide: string;
  setIsFirstSlide: (val: string) => void;
};
const Slide0 = ({ setIsFirstSlide, isFirstSlide }: myProps) => {
  return (
    <div className="flex  justify-center items-center flex-col gap-10 p-5 min-h-screen bg-[#F8FAFC]">
      <h3 className="text-lg font-medium text-black">
        Problem Solving with POOCH
      </h3>
      <div className="shadow-lg  rounded-lg flex justify-center items-center max-w-[80%] flex-col p-2">
        <div className=" flex justify-center items-center flex-col gap-5 bg-white  p-3   ">
          <h5 className="text-black font-bold text-xl  text-center">
            For each situation, list options - what might be done? For each
            option, list possible outcome Based on outcomes, select options
          </h5>
          <Image
            className=" "
            src="/C19Images/L3C19A5.JPG"
            width={500}
            height={100}
            alt="L3C19A5 image"
          />
        </div>
        <div className="col-span-12 w-full flex justify-between items-center mt-5">
          <div
            className={` ${
              isFirstSlide == "Slide_0"
                ? ""
                : "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
            }  `}
          >
            <FaArrowLeft
              className={` ${
                isFirstSlide == "Slide_0" ? "hidden" : "block"
              } text-[40px]  cursor-pointer text-black`}
            />
          </div>

          <div
            onClick={() => setIsFirstSlide("Slide_1")}
            className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
          >
            <FaArrowRight
              className={` text-[40px]  cursor-pointer text-black`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide0;
