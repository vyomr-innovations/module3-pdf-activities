import React from "react";

const Problem = ({text}:{text:string}) => {
  return (
    <div className="grid grid-cols-12 gap-2 w-full h-full place-items-center">
      <div className="col-span-12 w-full  text-center  ">
        <h4 className="text-black text-center text-xl font-bold">Problem</h4>
      </div>
      <div className="col-span-12 w-full text-center border border-black min-h-[303px] h-full flex justify-center items-center  ">
        <p className="text-black text-center text-lg font-medium  ">
        {text}
        </p>
      </div>
    </div>
  );
};

export default Problem;
