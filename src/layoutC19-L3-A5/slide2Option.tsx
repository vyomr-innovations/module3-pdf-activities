// ✅ Add this at the top
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
};

const TextOutComesCompo = forwardRef<TextOutcomesRefType, OptionProps>(
  ({ opt1, opt2, opt3 }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
    const options = [opt1, opt2, opt3];
    const [outComes, setOutComes] = useState<string[]>(["", "", ""]);

    const handleSelect = (index: number) => {
      setSelectedIndex((prev) =>
        prev.includes(index) ? prev.filter((i) => i != index) : [...prev, index]
      );
    };

    const handleTextareaChange = (index: number, value: string) => {
      const updatedOutcomes = [...outComes];
      updatedOutcomes[index] = value;
      setOutComes(updatedOutcomes);
    };

    useImperativeHandle(ref, () => ({
      getOutcomes: () => outComes,
    }));

    return (
     <div className="grid grid-cols-12 gap-2 w-full  place-items-center">
      <div className="col-span-6 w-full  text-center  ">
        <h4 className="text-black text-center text-xl font-bold">Options</h4>
      </div>
      <div className="col-span-6 w-full text-center ">
        <h4 className="text-black text-center text-xl font-bold">Outcomes</h4>
      </div>
      {/* ============================ Options ===================================== */}
      <div className="col-span-6 w-full text-center   h-full flex justify-between items-center flex-col gap-3  ">
        {options.map((item, index) => (
          <h3
            onClick={() => handleSelect(index)}
            key={index}
            className={`${
              selectedIndex.includes(index)
                ? "bg-blue-300 shadow-sm shadow-black "
                : ""
            } min-h-[40%]  transition-all duration-200 text-[15px] text-black w-full border border-black p-1 cursor-pointer `}
          >
            {item}
          </h3>
        ))}
      </div>
      {/* ============================ Outcomes ===================================== */}

      <div className="col-span-6 w-full text-center  h-full flex justify-between items-center flex-col gap-3  ">
        {outComes.map((text, index) => (
          
          <textarea
          value={text}
              onChange={(e) => handleTextareaChange(index, e.target.value)}
              placeholder="Write Outcomes"
            key={index}
            className={`${
              selectedIndex.includes(index)
                ? "bg-green-300 shadow-sm shadow-black "
                : ""
            } min-h-[40%] text-center transition-all duration-200 text-md text-black w-full border border-black p-1  `}
          >
            
          </textarea>
        ))}
      </div>
    </div>
    );
  }
);
TextOutComesCompo.displayName = "TextOutComesCompo";


export default TextOutComesCompo;





