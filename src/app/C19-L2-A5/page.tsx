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
    doc.text("Thank You Note", doc.internal.pageSize.width / 2, y, {
      align: "center",
    });

    y += 15; // space after title

    const addField = (label: string, value: string) => {
        const labelLines = doc.splitTextToSize(label, 170);
        const valueLines = doc.splitTextToSize(value, 170);
      
        if (y + (labelLines.length + valueLines.length) * lineHeight > pageHeight - 20) {
          doc.addPage();
          y = marginTop;
        }
      
        doc.setFontSize(12);
        doc.text(labelLines, leftMargin, y);
        y += labelLines.length * lineHeight;
      
        doc.text(valueLines, leftMargin, y);
        y += valueLines.length * lineHeight + 5;
      };
      

    addField("Dear:", data.first);
    addField("Thank you for doing:", data.seco);
    addField("I'm so thankful to you because:", data.third);
    addField("It made me feel:", data.four);
    addField("I hope that we can:", data.five);
    addField("Lovingly/Sincerely:", data.sixeth);
    addField("Your Name:", data.seven);

    doc.save("thank-you-note.pdf");
  };

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
            Dear
          </label>
          <Controller
            name="first"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="first"
                placeholder="(name)"
                {...field}
              />
            )}
          />
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="seco"
          >
            Thank you for doing
          </label>

          <Controller
            name="seco"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="seco"
                placeholder="[state what - a nice thing/being so nice]."
                {...field}
              />
            )}
          />
        </div>
        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="third"
          >
            I’m so thankful to you because{" "}
          </label>

          <Controller
            name="third"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="third"
                placeholder="[describe action]"
                {...field}
              />
            )}
          />
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="four"
          >
            It made me feel
          </label>

          <Controller
            name="four"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="four"
                placeholder="[describe how it made you feel]"
                {...field}
              />
            )}
          />
        </div>
        {/* ========== */}
        <div className="  w-full flex justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
            I hope that we can
          </label>

          <Controller
            name="five"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="five"
                placeholder="[describe what you want]"
                {...field}
              />
            )}
          />
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-center items-center gap-2">
          <Controller
            name="sixeth"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[500px] placeholder:text-center border-black "
                id="sixeth"
                placeholder="[Lovingly (for close people/ sincerely (for respectful salutation]"
                {...field}
              />
            )}
          />
        </div>

        {/* ========== */}
        <div className="  w-full flex justify-center items-center gap-2">
          <Controller
            name="seven"
            control={control}
            render={({ field }) => (
              <textarea
                className="text-black text-lg outline-none border-b min-w-[350px] placeholder:text-center border-black "
                id="seven"
                placeholder=""
                {...field}
              />
            )}
          />
          <label
            className="text-black text-lg min-w-[300px]  text-center"
            htmlFor="five"
          >
            your name.
          </label>
        </div>


        <div><button className="cursor-pointer bg-violet-900 text-white px-5 py-2 rounded-lg text-lg">save as pdf</button></div>
      </form>
    </div>
  );
};

export default Page;
