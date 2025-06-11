
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OptionCompo from "./slide1Option";
import Problem from "./problem";
type myProps = {

  setIsFirstSlide: (val: string) => void;
};
const Slide1 = ({ setIsFirstSlide }: myProps) => {
  return (
    <div className="flex  justify-start items-center h-full flex-col gap-3 p-5 min-h-screen bg-[#F8FAFC]">
      <h3 className="text-lg font-bold text-black">
        Problem Solving with POOCH
      </h3>
      <div className="shadow-lg h-full  border border-black  rounded-lg flex justify-center items-center max-w-[80%] flex-col p-5">
        <div className=" flex justify-center items-center h-full flex-col gap-10  p-3   ">
          <h5 className="text-black font-medium text-xl  text-center">
           Here the problem, options and outcomes are listed. You have to select the option.
          </h5>

          <div className="grid grid-cols-12 w-full h-full gap-3">
            <div className="col-span-5 h-full w-full ">
              <Problem  text="Comforting a friend upset about failing a test" />
            </div>
            <div className="col-span-7 h-full w-full ">
              <OptionCompo 
              
              opt1="Tell them it’s their fault because they didn’t study"
              opt2="Tell them it’s okay and they can do better next time"
              opt3="Say nothing and be a good listener"
              out1="They might not approach you for comfort next time"
              out2="They might feel an inferiority complex and think that it’s actually not okay"
              out3="They might feel guilty for being a bad friend"
              
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 w-full flex justify-between items-center mt-5">
          <div
            onClick={() => setIsFirstSlide("Slide_0")}
            className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
          >
            <FaArrowLeft
              className={` text-[40px]  cursor-pointer text-black`}
            />
          </div>

          <div
            onClick={() => setIsFirstSlide("Slide_2")}
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

export default Slide1;
