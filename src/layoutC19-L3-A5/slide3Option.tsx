"use client";
import { forwardRef, useImperativeHandle, useState } from "react";

type OptionProps = {
  opt1: string;
  opt2: string;
  opt3: string;
  out1: string;
  out2: string;
  out3: string;
};

export type TextOutcomesRefType = {
  getOutcomes: () => string[];
  getOptions: () => string[];
};

const Slide3Options = forwardRef<TextOutcomesRefType, OptionProps>(
  ({ opt1, opt2, opt3 }, ref) => {
    // const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
    const [options, setOptions] = useState<string[]>([opt1, opt2, opt3]);
    const [outComes, setOutComes] = useState<string[]>(["", "", ""]);

    // const handleSelect = (index: number) => {
    //   setSelectedIndex((prev) =>
    //     prev.includes(index)
    //       ? prev.filter((i) => i !== index)
    //       : [...prev, index]
    //   );
    // };

    const handleOptionChange = (index: number, value: string) => {
      const updatedOptions = [...options];
      updatedOptions[index] = value;
      setOptions(updatedOptions);
    };

    const handleOutcomeChange = (index: number, value: string) => {
      const updatedOutcomes = [...outComes];
      updatedOutcomes[index] = value;
      setOutComes(updatedOutcomes);
    };

    useImperativeHandle(ref, () => ({
      getOutcomes: () => outComes,
      getOptions: () => options,
    }));

    return (
      <div className="grid grid-cols-12 gap-2 w-full place-items-center">
        <div className="col-span-6 w-full  text-center  ">
        <h4 className="text-black text-center text-xl font-bold">Options</h4>
      </div>
      <div className="col-span-6 w-full text-center ">
        <h4 className="text-black text-center text-xl font-bold">Outcomes</h4>
      </div>

        {/* ============================ Options ============================ */}
        <div className="col-span-6 w-full  flex flex-col gap-3 justify-between items-center">
          {options.map((text, index) => (
           <textarea
          value={text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder="Write Outcomes"
            key={index}
            className={`  min-h-[93px] text-center transition-all duration-200 text-md text-black w-full border border-black p-1  `}
          >
            
          </textarea>
          ))}
        </div>

        {/* ============================ Outcomes ============================ */}
        <div className="col-span-6 w-full flex flex-col gap-3 justify-between items-center">
          {outComes.map((text, index) => (
            <textarea
              key={index}
              value={text}
              onChange={(e) => handleOutcomeChange(index, e.target.value)}
              placeholder="Write Outcome"
              className={` min-h-[93px] text-center transition-all duration-200 text-md text-black w-full border border-black p-1 `}
            />
          ))}
        </div>
      </div>
    );
  }
);

Slide3Options.displayName = "Slide3Options";

export default Slide3Options;
