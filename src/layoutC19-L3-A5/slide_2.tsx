"use client";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TextOutComesCompo, { TextOutcomesRefType } from "./slide2Option";
import Problem from "./problem";
import { jsPDF } from "jspdf";

type myProps = {
  setIsFirstSlide: (val: string) => void;
};

const Slide2 = ({ setIsFirstSlide }: myProps) => {
  const textOutcomeRef = useRef<TextOutcomesRefType>(null);

const handleGeneratePDF = () => {
  const doc = new jsPDF();
  const outcomes = textOutcomeRef.current?.getOutcomes() || [];
  const options = [
    "Tell them that they shouldn’t because they would lose you as a friend",
    "Tell them that you can stay in touch and remain friends while crying your heart out",
    "Tell them that you can stay in touch and remain friends while withholding your tears and keeping it for afterwards",
  ];

  const finalOutcomes = [
    "They might feel guilty for being a bad friend",
    "They might start crying too and feel less excited about the trip",
    "They might not show their true feelings too thus leaving something unsaid before parting ways",
  ];

  let y = 20;
  const maxY = 270;

  doc.setFontSize(18);
  doc.text("Problem Solving with POOCH", 105, y, { align: "center" });

  y += 15;
  doc.setFontSize(14);
  doc.text("Problem:", 10, y);
  y += 10;

  const problemText = "Expressing your feelings to a friend moving away";
  const problemLines = doc.splitTextToSize(problemText, 180);
  problemLines.forEach((line:string) => {
    if (y > maxY) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 10, y);
    y += 7;
  });

  y += 5;

  options.forEach((opt, index) => {
    const optionLines = doc.splitTextToSize(`Option ${index + 1}: ${opt}`, 180);
    const outcomeLines = doc.splitTextToSize(`Outcome: ${outcomes[index] || "..."}`, 180);

    const blockHeight = (optionLines.length + outcomeLines.length) * 7 + 10;

    if (y + blockHeight > maxY) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(13);
    optionLines.forEach((line:string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    doc.setFontSize(12);
    outcomeLines.forEach((line:string) => {
      doc.text(line, 10, y);
      y += 7;
    });

    y += 5;
  });

  // ======================== Solution Section ========================
  const solutionBlock = finalOutcomes.map(
    (line, i) => `Outcome ${i + 1}: ${line}`
  );

  const solutionLines = doc.splitTextToSize(solutionBlock.join("\n"), 180);
  const solutionHeight = solutionLines.length * 7 + 10;

  if (y + solutionHeight > maxY) {
    doc.addPage();
    y = 20;
  }

  y += 10;
  doc.setFontSize(14);
  doc.text("Solution:", 10, y);
  y += 10;

  doc.setFontSize(12);
  solutionLines.forEach((line:string) => {
    if (y > maxY) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 10, y);
    y += 7;
  });

  // ======================== Save ========================
  doc.save("outcomes.pdf");
};



  return (
    <div className="flex  justify-start items-center h-full flex-col gap-3 p-5 min-h-screen bg-[#F8FAFC]">
      <h3 className="text-lg font-bold text-black">
        Problem Solving with POOCH
      </h3>
      <div className="shadow-lg h-full  border border-black  rounded-lg flex justify-center items-center max-w-[80%] flex-col p-5">
        <div className=" flex justify-center items-center h-full flex-col gap-10  p-3   ">
          <h5 className="text-black font-medium text-xl  text-center">
            Here the problem, options and outcomes are listed. You have to
            select the option.
          </h5>

          <div className="grid grid-cols-12 w-full h-full gap-3">
            <div className="col-span-5 h-full w-full ">
              <Problem  text=" Expressing your feelings to a friend moving away" />
            </div>
            <div className="col-span-7 h-full w-full ">
              <TextOutComesCompo
                ref={textOutcomeRef}
                opt1="Tell them that they shouldn’t because they would lose you as a friend"
                opt2="Tell them that you can stay in touch and remain friends while crying your heart out"
                opt3="Tell them that you can stay in touch and remain friends while withholding your tears and keeping it for afterwards"
                out1=""
                out2=""
                out3=""
              />
            </div>
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
            onClick={() => setIsFirstSlide("Slide_1")}
            className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          >
            <FaArrowLeft className="text-[40px] cursor-pointer text-black" />
          </div>

          <div
            onClick={() => setIsFirstSlide("Slide_3")}
            className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          >
            <FaArrowRight className="text-[40px] cursor-pointer text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
