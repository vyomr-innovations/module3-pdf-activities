"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { jsPDF } from "jspdf";

type myProps = {
  isFirstScreen: string;
  setIsfirstScreen: (value: string) => void;
};

const ThirdScreen = ({ setIsfirstScreen, isFirstScreen }: myProps) => {
  const [radioValue, setRadioValue] = useState("");
  const [responses, setResponses] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>, step: string) => {
    setResponses(prev => ({ ...prev, [step]: e.target.value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Express Disagreement Politely", 10, 10);

    doc.setFontSize(14);
    doc.text("Selected Situation:", 10, 20);
    doc.text(radioValue || "No situation selected", 10, 30);

    doc.text("Step 1: Acknowledge the ideas of others", 10, 50);
    doc.text(responses.step1 || "No response", 10, 60);

    doc.text("Step 2: Explain why you disagree", 10, 80);
    doc.text(responses.step2 || "No response", 10, 90);

    doc.text("Step 3: Disagree in a polite manner", 10, 110);
    doc.text(responses.step3 || "No response", 10, 120);

    doc.text("Step 4: Suggest an alternative proposal as a compromise", 10, 140);
    doc.text(responses.step4 || "No response", 10, 150);

    doc.save("disagreement_response.pdf");
  };

  return (
    <div className="grid grid-cols-12 place-items-center gap-5 w-[800px] p-1">
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
        Apply what you have learned: Express disagreement politely
      </h2>

      <form className="col-span-12 w-full flex justify-start p-5 items-center flex-col gap-3 bg-violet-200 min-h-[300px] rounded-lg">
        <h2 className="text-xl text-black font-semibold">
          Select any one situation and create your response
        </h2>

        <div className="flex flex-col gap-3 w-[400px]">
          <label className="flex gap-2 items-start cursor-pointer">
            <input
            className="w-[20px] h-[20px] cursor-pointer"
              type="radio"
              name="situation"
              onChange={() =>
                setRadioValue("You disagree that emotionally intelligent people are not strong.")
              }
            />
            <span className="text-xl text-black ">
              You disagree that emotionally intelligent people are not strong.
            </span>
          </label>
          <label className="flex gap-2 items-start  cursor-pointer">
            <input
            className="w-[20px] h-[20px] cursor-pointer"
              type="radio"
              name="situation"
              onChange={() =>
                setRadioValue("You disagree that emotional intelligence has no role in leadership.")
              }
            />
            <span className="text-xl text-black">
              You disagree that emotional intelligence has no role in leadership.
            </span>
          </label>
        </div>

        {/* Table Head */}
        <div className="grid grid-cols-12 w-full gap-2 place-items-center mt-4">
          <div className="col-span-4 text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            S.no.
          </div>
          <div className="col-span-4 text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Steps to Disagree
          </div>
          <div className="col-span-4 text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Write your response here
          </div>
        </div>

        {/* Step 1 */}
        <div className="grid grid-cols-12 w-full gap-2 place-items-center">
          <div className="col-span-4 min-h-[60px] flex justify-center items-center  text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            1
          </div>
          <div className="col-span-4  min-h-[60px] flex justify-center items-center text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Acknowledge the ideas of others
          </div>
          <div className="col-span-4 p-1 rounded-lg w-full">
            <textarea
              className="text-black min-h-[60px] flex justify-center items-center  text-lg border text-center border-black rounded-lg w-full"
              placeholder="Write here..."
              onChange={(e) => handleInputChange(e, "step1")}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-12 w-full gap-2 place-items-center">
          <div className="col-span-4 min-h-[60px] flex justify-center items-center text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            2
          </div>
          <div className="col-span-4  min-h-[60px] flex justify-center items-center text-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Explain why you disagree
          </div>
          <div className="col-span-4 p-1  rounded-lg w-full">
            <textarea
              className="text-black text-lg  min-h-[60px] flex justify-center items-center border text-center border-black rounded-lg w-full"
              placeholder="Write here..."
              onChange={(e) => handleInputChange(e, "step2")}
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-12 w-full gap-2 place-items-center">
          <div className="col-span-4 text-center min-h-[60px] flex justify-center items-center text-white bg-violet-900 p-1 rounded-lg w-full">
            3
          </div>
          <div className="col-span-4 text-center min-h-[60px] flex justify-center items-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Disagree in a polite manner
          </div>
          <div className="col-span-4 p-1 rounded-lg w-full">
            <textarea
              className="text-black text-lg min-h-[60px] flex justify-center items-center border text-center border-black rounded-lg w-full"
              placeholder="Write here..."
              onChange={(e) => handleInputChange(e, "step3")}
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-12 w-full gap-2 place-items-center">
          <div className="col-span-4 text-center min-h-[60px] flex justify-center items-center text-white bg-violet-900 p-1 rounded-lg w-full">
            4
          </div>
          <div className="col-span-4 text-center min-h-[60px] flex justify-center items-center text-white bg-violet-900 p-1 rounded-lg w-full">
            Suggest an alternative proposal as a compromise
          </div>
          <div className="col-span-4 p-1 rounded-lg w-full">
            <textarea
              className="text-black text-lg min-h-[60px] flex justify-center items-center border text-center border-black rounded-lg w-full"
              placeholder="Write here..."
              onChange={(e) => handleInputChange(e, "step4")}
            />
          </div>
        </div>

        {/* Generate PDF Button */}
        <button
          type="button"
          onClick={generatePDF}
          className="mt-5 px-5 py-2 border border-violet-800 text-violet-800  text-lg rounded-lg hover:rounded-xl cursor-pointer"
        >
          save as PDF
        </button>
      </form>

      {/* Navigation */}
      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
          onClick={() => setIsfirstScreen("secoundScreen")}
          className={`${
            isFirstScreen == "first" ? "" : "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          }`}
        >
          <FaArrowLeft
            className={`${
              isFirstScreen == "first" ? "hidden" : "block"
            } text-[40px] cursor-pointer text-black`}
          />
        </div>

      
      </div>
    </div>
  );
};

export default ThirdScreen;
