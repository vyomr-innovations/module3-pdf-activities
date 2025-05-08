import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type myProps = {
    isFirstScreen:string
    setIsfirstScreen: (value: string) => void;
};
const ThirdScreen = ({ setIsfirstScreen,isFirstScreen }: myProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="grid grid-cols-12 place-items-center gap-5  w-[800px]  p-1">
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
        Be a Leader: Be empathetic, fearless, and more responsible.
      </h2>
      <div className="col-span-12">
        <Image
          src="/images/prefect.png"
          width={400}
          height={100}
          alt="pdf Image"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-12  p-2">
        <label htmlFor="first" className="text-2xl text-black ">
        You’re the class prefect in charge of earth day. How will you show a sense of responsibility?
        </label>

        <textarea
          placeholder="Write Here ...... "
          className="min-h-[100px] rounded-lg text-center text-black text-xl p-2 outline-black border border-[#282727] w-full"
          id="first"
        />
        <div className="col-span-12 flex justify-center items-center flex-col gap-5 ">
          {!show ? (
            <button
              onClick={() => setShow(true)}
              className="text-lg cursor-pointer bg-violet-900 text-white px-8 py-2 rounded-lg"
            >
              Check
            </button>
          ) : (
            <ul className="list-disc text-left  ">
              <li className="text-black text-lg">Being assertive</li>
              <li className="text-black text-lg">
              Speaking confidently
              </li>
              <li className="text-black text-lg">Communicating clearly</li>
              <li className="text-black text-lg">
              Listening to peers’ suggestions
              </li>
              
                <li className="text-black text-lg">
                Problem-solving</li>
                <li className="text-black text-lg">
                Presenting ideas in a concrete manner</li>
                <li className="text-black text-lg">
                Making effective decisions</li>
                
                  <li className="text-black text-lg">
                  Organizing and fulfilling tasks through team-building.</li>
              
            </ul>
          )}
        </div>
      </div>

      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
         onClick={()=>setIsfirstScreen("secoundScreen")}
       
          className={` ${isFirstScreen == "first" ?"" :"border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"}  `}
        >
          <FaArrowLeft className={` ${isFirstScreen == "first" ?"hidden" :"block"} text-[40px]  cursor-pointer text-black`} />
        </div>

        <div
         onClick={()=>setIsfirstScreen("FourthScreen")}
          className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
        >
          <FaArrowRight className={` text-[40px]  cursor-pointer text-black`} />
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
