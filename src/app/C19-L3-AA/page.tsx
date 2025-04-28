"use client";
import jsPDF from "jspdf";
import React from "react";
import { Controller, useForm } from "react-hook-form";
type formData = {
  first: string;
  seco: string;
  third: string;
  four: string;
  five: string;
  sixeth: string;
  seven: string;
};
const Page = () => {
  const { handleSubmit, control } = useForm<formData>();

  const onSubmit = (data: formData) => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const marginTop = 20;
    const leftMargin = 20;
    const pageHeight = doc.internal.pageSize.height;

    let y = marginTop;

    // Title
    doc.setFontSize(18);
    doc.text("About me", doc.internal.pageSize.width / 2, y, {
      align: "center",
    });

    y += 15; // space after title

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

      doc.setFontSize(12);
      doc.text(labelLines, leftMargin, y);
      y += labelLines.length * lineHeight;

      doc.text(valueLines, leftMargin, y);
      y += valueLines.length * lineHeight + 5;
    };

    addField("Describe your morning routine:", data.first);
    addField("Describe what you eat for your meals:", data.seco);
    addField("How do you practice kindness?:", data.third);
    addField("What do you do when people are kind to you?:", data.four);
    addField("How do you handle hostility?:", data.five);
    addField("Who’s your best friend and why?:", data.sixeth);
    addField("Who would you take with you to an exciting event of the day? Why?:", data.seven);

    doc.save("About-me.pdf");
  };

  const renderInput = (name: keyof formData) => (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <textarea
          {...field}
          className="w-full placeholder:text-center placeholder:text-gray-500 outline-none text-black text-center  border-b border-black"
          placeholder="write here"
        />
      )}
    />
  );
  return (
    <div className="min-h-screen p-5 flex justify-start items-center flex-col gap-10 bg-[#F8FCFA]">
      <h4 className="text-4xl text-black text-center ">Thank you note</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-around  items-center border border-black shadow-black shadow-md rounded-lg  p-5 w-[800px] gap-10 "
      >
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="first"
          >
        Describe your morning routine
          </label>
          {renderInput("first")}
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="seco"
          >
         Describe what you eat for your meals 
          </label>

          {renderInput("seco")}
        </div>
        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="third"
          >
          How do you practice kindness?

          </label>

          {renderInput("third")}
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="four"
          >
        What do you do when people are kind to you?

          </label>

          {renderInput("four")}
        </div>
        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
         How do you handle hostility?
          </label>

          {renderInput("five")}
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
       Who’s your best friend and why?

          </label>

          {renderInput("sixeth")}
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
     Who would you take with you to an exciting event of the day? Why?

          </label>

          {renderInput("seven")}
        </div>

        <div>
          <button className="cursor-pointer bg-violet-900 text-white px-5 py-2 rounded-lg text-lg">
            save as pdf
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
