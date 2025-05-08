"use client";
import jsPDF from "jspdf";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type myProps = {
  isFirstScreen: string;
  setIsfirstScreen: (value: string) => void;
};
const FourthScreen = ({ setIsfirstScreen, isFirstScreen }: myProps) => {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const marginTop = 20;
    const leftMargin = 20;
    const pageHeight = doc.internal.pageSize.height;
  
    let y = marginTop;
  
    // Title
    doc.setFontSize(18);
    doc.text(
      "Be empathetic, fearless, and more responsible.",
      doc.internal.pageSize.width / 2,
      y,
      {
        align: "center",
      }
    );
  
    y += 15; // space after title
  
    const addItem = (text: string, index: number) => {
      const lines = doc.splitTextToSize(`${index + 1}. ${text}`, 170);
  
      if (y + lines.length * lineHeight > pageHeight - 20) {
        doc.addPage();
        y = marginTop;
      }
  
      doc.setFontSize(12);
      doc.text(lines, leftMargin, y);
      y += lines.length * lineHeight + 5;
    };
  
    list.forEach((item, index) => {
      addItem(item, index);
    });
  
    doc.save("responsible.pdf");
  };
  

  const handleAdd = () => {
    setList((prev) => [...prev, inputValue]);
    setInputValue("");
  };
  return (
    <div
     
      className="grid grid-cols-12 place-items-center gap-10  w-[800px]  p-1"
    >
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
        Be a Leader: Be empathetic, fearless, and more responsible.
      </h2>

      <div className="col-span-6 w-full  p-2">
        <label htmlFor="first" className="text-2xl text-black ">
          What actions you’d undertake to show the qualities of empathy,
          fearlessness and responsibility
        </label>

        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write Here ...... "
          className="min-h-[50px] my-2 rounded-lg text-center text-black text-xl p-2 outline-black border border-[#282727] w-full"
          id="first"
        />

        <div className="col-span-12 flex justify-center items-center flex-col gap-5 ">
          <button
            disabled={inputValue.length === 0}
            onClick={handleAdd}
            className={`${
              inputValue.length === 0
                ? "cursor-not-allowed bg-violet-500"
                : "cursor-pointer bg-violet-900"
            } text-lg   text-white px-8 py-2 rounded-lg`}
          >
            {list.length == 0 ? "  Add" : "Add more"}
          </button>
        </div>
      </div>

      <form    onSubmit={handleSubmit(onSubmit)} className="col-span-6 w-full  flex flex-col gap-3 justify-center items-center p-2">
        <ul className="space-y-4 p-5 w-full list-disc bg-violet-200 rounded-lg h-[200px] overflow-y-scroll ">
          {list.map((item, index) => (
            <li key={index} className="text-black text-lg">
              {item}
            </li>
          ))}
        </ul>
        {list.length !== 0 ? (
          <button
            className={` border border-violet-900   text-lg   text-violet-900 cursor-pointer px-8 py-2 rounded-lg`}
          >
            save as pdf
          </button>
        ) : (
          ""
        )}
      </form>

      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
          onClick={() => setIsfirstScreen("ThirdScreen")}
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
          className={`${
            isFirstScreen == "FourthScreen" ? "hidden" : "block"
          } border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
        >
          <FaArrowRight className={` text-[40px]  cursor-pointer text-black`} />
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;
