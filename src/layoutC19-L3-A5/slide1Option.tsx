import React, { useState } from "react";
type OptionProps = {
  opt1: string;
  opt2: string;
  opt3: string;
  out1: string;
  out2: string;
  out3: string;
};
const OptionCompo = ({ opt1, opt2, opt3, out1, out2, out3 }: OptionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const options = [opt1, opt2, opt3];
  const outcomes = [out1, out2, out3];

  const handleSelect = (index: number) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i != index) : [...prev, index]
    );
  };

  return (
    <div className="grid grid-cols-12 gap-2 w-full  place-items-center">
      <div className="col-span-6 w-full  text-center  ">
        <h4 className="text-black text-center text-xl font-bold">Options</h4>
      </div>
      <div className="col-span-6 w-full text-center ">
        <h4 className="text-black text-center text-xl font-bold">Outcomes</h4>
      </div>
      {/* ============================ Options ===================================== */}
      <div className="col-span-6 w-full text-center min-h-[220px]  h-full flex justify-between items-center flex-col gap-3  ">
        {options.map((item, index) => (
          <h3
            onClick={() => handleSelect(index)}
            key={index}
            className={`${
              selectedIndex.includes(index)
                ? "bg-blue-300 shadow-sm shadow-black "
                : ""
            }min-h-[42%] active:scale-90 active:rounded-lg transition-all duration-200 text-md text-black w-full border border-black p-1 cursor-pointer py-2 `}
          >
            {item}
          </h3>
        ))}
      </div>
      {/* ============================ Outcomes ===================================== */}

      <div className="col-span-6 w-full text-center  min-h-[220px] h-full flex justify-between items-center flex-col gap-3  ">
        {outcomes.map((item, index) => (
          
          <h3
            key={index}
            className={`${
              selectedIndex.includes(index)
                ? "bg-green-300 shadow-sm shadow-black "
                : ""
            } min-h-[42%]  transition-all duration-200 text-md text-black w-full border border-black p-1  `}
          >
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default OptionCompo;
