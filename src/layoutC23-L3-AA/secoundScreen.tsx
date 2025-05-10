"use client";
import { Controller, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { jsPDF } from "jspdf";

type myProps = {
  isFirstScreen: string;
  setIsfirstScreen: (value: string) => void;
};

// ✅ Correct form data type
type FormData = {
  first: string;
  secound: string;
  third: string;
};

const SecoundScreen = ({ setIsfirstScreen, isFirstScreen }: myProps) => {
  // ✅ Use typed form
  const { control, handleSubmit } = useForm<FormData>();

  // ✅ Use typed data in function
  const generatePDF = (data: FormData) => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(18);
    const title = "My Bill of Rights";
    const textWidth = doc.getTextWidth(title);
    const x = (pageWidth - textWidth) / 2;
    doc.text(title, x, 20);

    doc.setFontSize(14);
    const margin = 20;
    let y = 40;
    const lineSpacing = 10;
    const inputs = [
      `1. I have the right to ${data.first}`,
      `2. I have the right to ${data.secound}`,
      `3. I have the right to ${data.third}`,
    ];

    inputs.forEach((text) => {
      const splitText = doc.splitTextToSize(text, pageWidth - margin * 2);
      if (y + splitText.length * lineSpacing > doc.internal.pageSize.getHeight()) {
        doc.addPage();
        y = 20;
      }
      doc.text(splitText, margin, y);
      y += splitText.length * lineSpacing + 5;
    });

    doc.save("bill_of_rights.pdf");
  };

  return (
    <form
      onSubmit={handleSubmit(generatePDF)}
      className="grid grid-cols-12 place-items-center gap-5 w-[800px] p-1"
    >
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
        Create 3 sentences for your bill of rights
      </h2>

      <div className="col-span-12 w-full flex justify-start p-5 items-center flex-col gap-3 bg-violet-200 min-h-[300px] rounded-lg">
        <ul className="list-disc space-y-5 p-3 w-[500px]">
          <li className="text-xl text-black">
            I have the right to{" "}
            <Controller
              name="first"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  className="text-black text-lg outline-none px-3 border-b min-w-[100px] placeholder:text-center border-black "
                  id="first"
                  {...field}
                />
              )}
            />
          </li>

          <li className="text-xl text-black">
            I have the right to{" "}
            <Controller
              name="secound"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  className="text-black text-lg outline-none px-3 border-b min-w-[100px] placeholder:text-center border-black "
                  id="secound"
                  {...field}
                />
              )}
            />
          </li>

          <li className="text-xl text-black">
            I have the right to{" "}
            <Controller
              name="third"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  className="text-black text-lg outline-none px-3 border-b min-w-[100px] placeholder:text-center border-black "
                  id="third"
                  {...field}
                />
              )}
            />
          </li>
        </ul>
        <button
          type="submit"
          className="px-5 py-2 bg-violet-900 text-white rounded-lg cursor-pointer"
        >
          Save as PDF
        </button>
      </div>

      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
          onClick={() => setIsfirstScreen("first")}
          className={`${
            isFirstScreen == "first"
              ? ""
              : "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
          }`}
        >
          <FaArrowLeft
            className={`${
              isFirstScreen == "first" ? "hidden" : "block"
            } text-[40px]  cursor-pointer text-black`}
          />
        </div>
      </div>
    </form>
  );
};

export default SecoundScreen;
