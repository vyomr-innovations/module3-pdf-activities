"use client";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { jsPDF } from "jspdf";
import { TextOutcomesRefType } from "./slide3Option";
import Problem from "./problem";
import Slide3Options from "./slide3Option";

type myProps = {
  isFirstSlide:string
  setIsFirstSlide: (val: string) => void;
};

const Slide3 = ({ setIsFirstSlide,isFirstSlide }: myProps) => {
  const textOutcomeRef = useRef<TextOutcomesRefType>(null);

const handleGeneratePDF = () => {
  const doc = new jsPDF();
  const options = textOutcomeRef.current?.getOptions() || [];
  const outcomes = textOutcomeRef.current?.getOutcomes() || [];

  // 👇 Your fixed Options and Outcomes
  const fixedOptions = [
    "Tell them that it’s okay but stop talking to them as a result",
    "Tell them a story of your own that is uncomfortable too",
    "Say nothing and be a good listener, but communicate ineffectively afterwards.",
  ];

  const finalOutcomes = [
    "They may not trust you or even others regarding being vulnerable",
    "They may feel seen but may not be as good at understanding as you were and judge you instead",
    "They may feel confused about the authenticity of your friendship",
  ];

  let y = 20;
  const maxY = 270;

  doc.setFontSize(18);
  doc.text("Problem Solving with POOCH", 105, y, { align: "center" });

  y += 15;
  doc.setFontSize(14);
  doc.text("Problem:", 10, y);
  y += 10;

  const problemText = "Story sharing that makes you uncomfortable";
  const problemLines = doc.splitTextToSize(problemText, 180);
  problemLines.forEach((line: string) => {
    if (y > maxY) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 10, y);
    y += 7;
  });

  y += 5;

  // ========== Student-entered Options & Outcomes ==========
  options.forEach((opt, index) => {
    const optionLines = doc.splitTextToSize(`Option ${index + 1}: ${opt}`, 180);
    const outcomeLines = doc.splitTextToSize(`Outcome: ${outcomes[index] || "..."}`, 180);

    const blockHeight = (optionLines.length + outcomeLines.length) * 7 + 10;

    if (y + blockHeight > maxY) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(13);
    optionLines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    doc.setFontSize(12);
    outcomeLines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    y += 5;
  });

  // ========== Fixed Solution Section ==========
  if (y + 50 > maxY) {
    doc.addPage();
    y = 20;
  }

  y += 10;
  doc.setFontSize(14);
  doc.text("Solution:", 10, y);
  y += 10;

  fixedOptions.forEach((opt, i) => {
    const optionLines = doc.splitTextToSize(`Option ${i + 1}: ${opt}`, 180);
    const outcomeLines = doc.splitTextToSize(`Outcome ${i + 1}: ${finalOutcomes[i]}`, 180);

    const blockHeight = (optionLines.length + outcomeLines.length) * 7 + 10;
    if (y + blockHeight > maxY) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(13);
    optionLines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    doc.setFontSize(12);
    outcomeLines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    y += 5;
  });

  doc.save("options-and-their-outcomes.pdf");
};


  return (
    <div className="flex justify-start items-center h-full flex-col gap-3 p-5 min-h-screen bg-[#F8FAFC]">
      <h3 className="text-lg font-bold text-black">Problem Solving with POOCH</h3>

      <div className="shadow-lg border border-black rounded-lg flex flex-col items-center max-w-[80%] p-5 w-full">
        <h5 className="text-black font-medium text-xl text-center mb-5 py-5">
        Here the problem is given. You have to list 3 possible options and their outcomes and select one option.
        </h5>

       
          <div className="grid grid-cols-12 w-full h-full gap-3">
            <div className="col-span-5 h-full w-full ">
              <Problem  text=" Story sharing that makes you uncomfortable" />
            </div>
            <div className="col-span-7 h-full w-full ">
            <Slide3Options
              ref={textOutcomeRef}
              opt1=""
              opt2=""
              opt3=""
              out1=""
              out2=""
              out3=""
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <button
            onClick={handleGeneratePDF}
            className="px-8 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div
            onClick={() => setIsFirstSlide("Slide_2")}
            className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          >
            <FaArrowLeft className="text-[40px] cursor-pointer text-black" />
          </div>

          <div
          
            className={` ${
                isFirstSlide == "Slide_3" ? "hidden" : "block"
              } border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90`}
          >
            <FaArrowRight className="text-[40px] cursor-pointer text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
