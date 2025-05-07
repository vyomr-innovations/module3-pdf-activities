"use client";
import jsPDF from "jspdf";
import React from "react";
import { Controller, useForm } from "react-hook-form";
type formData = {
  letter: string;
};
const Page = () => {
    const { handleSubmit, control } = useForm<formData>({
        defaultValues: {
          letter: "Dear Ms./Mr. [Teacher Name],"
        }
      });

  const onSubmit = (data: formData) => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const marginTop = 20;
    const leftMargin = 20;
    const pageHeight = doc.internal.pageSize.height;

    let y = marginTop;

    // Title
    doc.setFontSize(18);
    doc.text("Effective communication", doc.internal.pageSize.width / 2, y, {
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

    addField("", data.letter);

    doc.save("Effective-communication.pdf");
  };
  return (
    <div className="min-h-screen flex justify-start items-center gap-5 bg-[#F8FAFC] p-5 flex-col">
      <div className="flex justify-center items-center gap-3 flex-col">
        <h3 className="text-3xl text-black text-center ">
          Effective communication
        </h3>
        <p className="text-xl font-bold text-black text-center">
          Write a letter to your teacher requesting her to let you be a part of
          the debate team.
        </p>
      </div>

      <div className="bg-violet-200 min-h-[300px] min-w-[800px]  flex  gap-5 flex-col p-4 rounded-lg">
        <h4 className="text-center text-black text-xl ">
          Remember to use your communication skills
        </h4>
        <div className="">
          <h2 className=" text-black  text-2xl font-bold ">
            Key communication skills
          </h2>
          <ul className="list-disc p-5 w-[500px]">
            <li className="text-lg text-black">
              <span className="font-bold">Clear:</span> state your purpose
              clearly
            </li>
            <li className="text-lg text-black">
              <span className="font-bold">Concise:</span>use as few words as
              possible to communicate
            </li>
            <li className="text-lg text-black">
              <span className="font-bold">Courteous:</span>be polite while
              speaking and listening
            </li>
            <li className="text-lg text-black">
              <span className="font-bold">Complete:</span>give all the
              information necessary to achieve clarity in your communication.
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-lg text-black px-2" htmlFor="letter">
          Write a letter to your teacher{" "}
        </label>
        <Controller
          name="letter"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              id="letter"
              className="min-h-[300px] text-black p-3 w-full rounded-lg border-black border"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        <div className="w-full text-center">
          <button type="submit" className="cursor-pointer bg-violet-900 px-8 py-2 rounded-lg text-white">
            submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Page;
