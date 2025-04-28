"use client";
import jsPDF from "jspdf";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  first: string;
  secound: string;
  third: string;
  four: string;
  five: string;
  sixth: string;
  seven: string;
  eight: string;
};

const Page = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const marginTop = 20;
    const leftMargin = 20;
    const pageHeight = doc.internal.pageSize.height;

    let y = marginTop;

    doc.setFontSize(18);
    doc.text("Best solution", doc.internal.pageSize.width / 2, y, {
      align: "center",
    });

    y += 15;

    const addField = (label: string, value: string) => {
      const labelLines = doc.splitTextToSize(label, 170);
      const valueLines = doc.splitTextToSize(value, 170);

      if (
        y + (labelLines.length + valueLines.length) * lineHeight >
        pageHeight - 20
      ) {
        doc.addPage();
        y = marginTop;
      }

      if (label) {
        doc.setFontSize(15);
        doc.text(labelLines, leftMargin, y);
        y += labelLines.length * lineHeight;
      }

      doc.text(valueLines, leftMargin, y);
      y += valueLines.length * lineHeight + 3;
    };

    // Individual lines for each
        // =================
    addField("Describe the problem", "");
    doc.setFontSize(15);
    addField("Answer : ", data.first);
    // =================
    addField("Positive consequence", "");
    doc.setFontSize(15);
    addField("Situation 1 : ", data.secound);
    addField("Situation 2 : ", data.third);
    addField("Situation 3 : ", data.four);

    addField("Negative consequence", "");
    doc.setFontSize(15);
    addField("Situation 1 : ", data.five);
    addField("Situation 2 : ", data.sixth);
    addField("Situation 3 : ", data.seven);


            // =================
            addField("Best solution", "");
            doc.setFontSize(15);
            addField("Answer : ", data.eight);

    doc.save("Best_solution.pdf");
  };

  const renderInput = (name: keyof FormData) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <textarea
          {...field}
          className="w-full placeholder:text-center placeholder:text-gray-500 outline-none text-black text-center min-h-[100px]  border-b border-black"
          placeholder="write here"
        />
      )}
    />
  );
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-8 bg-[#F8FCFA] p-5">
      <h4 className="text-4xl text-black text-center">Best solution</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-around  items-center border border-black shadow-black shadow-md rounded-lg  p-5 w-[800px] gap-10 "
      >
        {/* ===================  =============== */}
        <div className="grid grid-cols-12 w-full place-items-center gap-2 ">
          <div className="col-span-12 w-full flex flex-col gap-2 border p-2 rounded-lg ">
            <label
              htmlFor="first"
              className="text-white  bg-violet-800 text-center py-1 rounded-lg"
            >
              Describe the problem{" "}
            </label>
            {renderInput("first")}
          </div>
          {/* ===================  =============== */}
          <>
            <div className="col-span-3 w-full flex flex-col  gap-2  p-2 rounded-lg ">
              <h3 className="bg-white text-center p-1 rounded-lg text-[15px] min-h-[50px]"></h3>
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2 border p-2 rounded-lg ">
              <h3 className="text-white  bg-violet-800 text-center p-1 rounded-lg text-[15px] min-h-[50px]">
                Situation 1 Kind/hostile{" "}
              </h3>
            </div>
            <div className="col-span-3 w-full flex flex-col gap-2  border p-2 rounded-lg ">
              <h4 className="text-white  bg-violet-800 text-center p-1 rounded-lg text-[15px] min-h-[50px]">
                Situation 2{" "}
              </h4>
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2   border p-2 rounded-lg ">
              <h4 className="text-white  bg-violet-800 text-center p-1 rounded-lg text-[15px] min-h-[50px]">
                Situation 3 [ideal scenario]
              </h4>
            </div>
          </>
 {/* ===================  =============== */}
          <>
            <div className="col-span-3 w-full flex flex-col  gap-2 border p-2 rounded-lg ">
              <h4 className="text-white  bg-violet-800 text-center p-1 rounded-lg text-[15px] min-h-[50px]">
                Positive consequence
              </h4>
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2 border p-2 rounded-lg ">
              {renderInput("secound")}
            </div>
            <div className="col-span-3 w-full flex flex-col gap-2  border p-2 rounded-lg ">
              {renderInput("third")}
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2   border p-2 rounded-lg ">
              {renderInput("four")}
            </div>
          </>

 {/* ===================  =============== */}

          <>
            <div className="col-span-3 w-full flex flex-col  gap-2 border p-2 rounded-lg ">
              <h4 className="text-white  bg-violet-800 text-center p-1 rounded-lg text-[15px] min-h-[50px]">
              Negative consequence
              </h4>
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2 border p-2 rounded-lg ">
              {renderInput("five")}
            </div>
            <div className="col-span-3 w-full flex flex-col gap-2  border p-2 rounded-lg ">
              {renderInput("sixth")}
            </div>
            <div className="col-span-3 w-full flex flex-col  gap-2   border p-2 rounded-lg ">
              {renderInput("seven")}
            </div>
          </>

 {/* ===================  =============== */}
 <div className="col-span-12 w-full flex flex-col gap-2 border p-2 rounded-lg ">
            <label
              htmlFor="first"
              className="text-white  bg-violet-800 text-center py-1 rounded-lg"
            >
             Best solution
            </label>
            {renderInput("eight")}
          </div>
        </div>

        <div>
          <button className="cursor-pointer bg-violet-900 text-white  px-5 py-2 rounded-lg text-lg">
            save as pdf
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
