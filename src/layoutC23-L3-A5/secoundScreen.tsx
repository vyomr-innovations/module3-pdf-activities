"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type myProps = {
  isFirstScreen: string;
  setIsfirstScreen: (value: string) => void;
};

const SecoundScreen = ({ setIsfirstScreen, isFirstScreen }: myProps) => {
  return (
    <div className="grid grid-cols-12 place-items-center gap-5 w-[800px] p-1">
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
        What to say?{" "}
      </h2>

      <div className="col-span-12 w-full flex justify-start p-5 items-center flex-col gap-3 bg-violet-200 min-h-[300px] rounded-lg">
        <h2 className="text-xl text-black font-semibold">
          Read how these steps are applied while disagreeing with a peer who
          says that dark-skinned people are not beautiful.
        </h2>
        <div className="border border-black rounded-lg p-2">
          <p className="text-center text-lg text-black ">
            I understand that you’re of the opinion that dark-skinned people are
            not beautiful <span className="font-bold">(acknowledge)</span>, but I do not agree with this
            perspective. I believe that beauty lies in the eyes of the beholder,
            and that all human beings are inherently beautiful regardless of the
            color of their skin <span className="font-bold">(explain)</span>. So I’m sorry but I will not agree
            with you on this opinion <span className="font-bold">(disagree)</span> I wholeheartedly hope that you
            will someday see what I mean and find all people equally beautiful
             <span className="font-bold"> (alternative)</span>.
          </p>
        </div>
      </div>

      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
          onClick={() => setIsfirstScreen("first")}
          className={` ${
            isFirstScreen == "first"
              ? ""
              : "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          }  `}
        >
          <FaArrowLeft
            className={` ${
              isFirstScreen == "first" ? "hidden" : "block"
            } text-[40px]  cursor-pointer text-black`}
          />
        </div>

        <div
          onClick={() => setIsfirstScreen("ThirdScreen")}
          className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
        >
          <FaArrowRight className={` text-[40px]  cursor-pointer text-black`} />
        </div>
      </div>
    </div>
  );
};

export default SecoundScreen;
