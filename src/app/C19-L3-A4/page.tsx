"use client";
import jsPDF from "jspdf";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  first: string;
  secound: string;
  third: string;
  four: string;
  five: string;
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
    doc.text("The Two Skits", doc.internal.pageSize.width / 2, y, {
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
    addField("What is the one thing you really want from your parents?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.first);
    addField("suggestion : ", "(Time/object/permission/holiday with friends)");
    // =========== secound
    addField("Why do you really want it?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.secound);
    addField(
      "suggestion : ",
      "(Connect it to something they’d appreciate. It would help with school, a project, rapport, making friends)"
    );
    // =========== third
    addField("How would you go about getting it?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.third);
    addField(
      "suggestion : ",
      "(Make sure to include pointers about responsive behavior- not staying out too late, being kind, spending within budget)"
    );

     // =========== four
     addField("What impact would it have in the long term?", "");
     doc.setFontSize(15);
     addField("Answer : ", data.four);
     addField(
       "suggestion : ",
       " (career, passion, lasting friendships, positive emotional well-being)"
     );
      // =========== five
      addField("What would happen if you don’t get it?", "");
      doc.setFontSize(15);
      addField("Answer : ", data.five);
      addField(
        "suggestion : ",
        "  (Loss of interest/impact on grades/impact of emotional health)"
      );
    doc.save("Persuasion.pdf");
  };

  const renderInput = (name: keyof FormData) => (
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
    <div className="min-h-screen p-5 flex justify-start items-center flex-col gap-8 bg-[#F8FCFA]">
      <h4 className="text-4xl text-black text-center">Exercise of Persuasion</h4>
      <p className="text-lg text-black">Think about convincing your parents for something and answer the questions below
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-around  items-center border border-black shadow-black shadow-md rounded-lg  p-5 w-[800px] gap-10 "
      >
        {/* =================== What do I want? =============== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="first"
          >
            What do I want?
          </label>
          {renderInput("first")}
        </div>

        {/* =================== Why do I really want it? =============== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="secound"
          >
            Why do I really want it?
          </label>
          {renderInput("secound")}
        </div>

        {/* =================== How would I go about getting it?
 =============== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="third"
          >
            How would I go about getting it?
          </label>
          {renderInput("third")}
        </div>

        {/* ===================How will it help in the long term?
 =============== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="four"
          >
            How will it help in the long term?
          </label>
          {renderInput("four")}
        </div>

        {/* ===================What would happen if I don’t get it?=============== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
            What would happen if I don’t get it?
          </label>
          {renderInput("five")}
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
