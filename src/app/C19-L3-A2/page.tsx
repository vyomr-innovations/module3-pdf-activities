"use client";
import jsPDF from "jspdf";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  character1: string;
  character2: string;
  cause1: string;
  cause2: string;
  where1: string;
  where2: string;
  when1: string;
  when2: string;
  about1: string;
  about2: string;
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
        doc.setFontSize(12);
        doc.text(labelLines, leftMargin, y);
        y += labelLines.length * lineHeight;
      }

      doc.text(valueLines, leftMargin, y);
      y += valueLines.length * lineHeight + 5;
    };

    // Individual lines for each
    addField("Who are the 2 characters? You and", "");
    addField(" kind to me", data.character1);
    addField("hostile to me", data.character2);

    addField("What caused this?", "");
    addField("kind to me", data.cause1);
    addField("hostile to me", data.cause2);

    addField("Where?", "");
    addField("kind to me ", data.where1);
    addField("hostile to me", data.where2);

    addField("When?", "");
    addField("kind to me", data.when1);
    addField("hostile to me", data.when2);

    addField(
      "What is it really about? (friendship/greed/trust/empathy)\nDescribe beginning, middle, end",
     ""
    );
    addField("kind to me", data.about1);
    addField("hostile to me", data.about2);

    doc.save("two-skits.pdf");
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
    <div className="min-h-screen p-5 flex justify-start items-center flex-col gap-10 bg-[#F8FCFA]">
      <h4 className="text-4xl text-black text-center">The two skits</h4>

      <div className="grid grid-cols-12 w-full place-items-center gap-1">
        <div className="col-span-4 bg-violet-900 p-1 rounded-lg w-full text-white text-center text-lg">
          Questions
        </div>
        <div className="col-span-4 bg-violet-900 p-1 rounded-lg w-full text-white text-center text-lg">
          When others are kind to me
        </div>
        <div className="col-span-4 bg-violet-900 p-1 rounded-lg w-full text-white text-center text-lg">
          When others are hostile to me
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 w-full gap-1 place-items-center"
      >
        {/* Who are the 2 characters */}
        <div className="col-span-4 w-full border p-1 rounded-lg text-center text-black">
          Who are the 2 characters? You and
        </div>
        <div className="col-span-4 w-full">{renderInput("character1")}</div>
        <div className="col-span-4 w-full">{renderInput("character2")}</div>

        {/* What caused this */}
        <div className="col-span-4 w-full border p-1 rounded-lg text-center text-black">
          What caused this?
        </div>
        <div className="col-span-4 w-full">{renderInput("cause1")}</div>
        <div className="col-span-4 w-full">{renderInput("cause2")}</div>

        {/* Where */}
        <div className="col-span-4 w-full border p-1 rounded-lg text-center text-black">
          Where?
        </div>
        <div className="col-span-4 w-full">{renderInput("where1")}</div>
        <div className="col-span-4 w-full">{renderInput("where2")}</div>

        {/* When */}
        <div className="col-span-4 w-full border p-1 rounded-lg text-center text-black">
          When?
        </div>
        <div className="col-span-4 w-full">{renderInput("when1")}</div>
        <div className="col-span-4 w-full">{renderInput("when2")}</div>

        {/* What is it really about */}
        <div className="col-span-4 w-full border p-1 rounded-lg text-center text-black">
          What is it really about? (friendship/greed/trust/empathy) Describe the
          beginning, middle, end
        </div>
        <div className="col-span-4 w-full">{renderInput("about1")}</div>
        <div className="col-span-4 w-full">{renderInput("about2")}</div>

        <div className="col-span-12 mt-5">
          <button
            type="submit"
            className="bg-violet-900 text-white px-5 py-2 rounded-lg"
          >
            Save as PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
