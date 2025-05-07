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
  six: string;
  seven: string;
  eight: string;
  nine: string;
  ten: string;
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
    doc.text("Journal thoughts, feelings, and experiences", doc.internal.pageSize.width / 2, y, {
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
    addField("How do I feel at the moment?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.first);
    // =========== secound
    addField("What would make me more happy right now?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.secound);
  
    // =========== third
    addField("What is going well?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.third);
  

    // =========== four
    addField("What am I grateful for?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.four);
    
    // =========== five
    addField("What are my priorities at the moment?", "");
    doc.setFontSize(15);
    addField("Answer : ", data.five);

      // =========== six
      addField("What do I love about myself?", "");
      doc.setFontSize(15);
      addField("Answer : ", data.six);

        // =========== seven
        addField("Who or what means the world to me?", "");
        doc.setFontSize(15);
        addField("Answer : ", data.seven);

           // =========== eight
           addField("Have I done something that I thought I could not?", "");
           doc.setFontSize(15);
           addField("Answer : ", data.eight);

             // =========== nine
             addField("What is bothering me?", "");
             doc.setFontSize(15);
             addField("Answer : ", data.nine);

               // =========== ten
               addField("How can I take better care of myself", "");
               doc.setFontSize(15);
               addField("Answer : ", data.ten);
   
    doc.save("Journal.pdf");
  };

  const renderInput = (name: keyof FormData) => (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <textarea
          {...field}
          className="w-full placeholder:text-center placeholder:text-gray-500 outline-none text-black text-center  border  min-h-[80px] rounded-lg border-black"
          placeholder="write here"
        />
      )}
    />
  );

  return (
    <div className="min-h-screen p-5 flex justify-start items-center flex-col gap-8 bg-[#F8FCFA]">
      <h4 className="text-4xl text-black text-center">
      Write a Journal
      </h4>
      <p className="text-lg text-black">
      Answer the following questions and pen down thoughts, feelings, and experiences
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid grid-cols-12 place-items-center border border-black shadow-black shadow-md rounded-lg  p-5 w-[800px] gap-10 "
      >
        {/* =================== What do I want? =============== */}
        <div className=" col-span-6 w-full flex justify-between flex-col items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="first"
          >
          <span className="font-bold">Q1 </span>How do I feel at the moment?
          </label>
          {renderInput("first")}
        </div>

        {/* ===================What would make me more happy right now? =============== */}
        <div className=" col-span-6 w-full flex justify-between flex-col items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="secound"
          >
            <span className="font-bold">Q2 </span>What would make me more happy right now?
          </label>
          {renderInput("secound")}
        </div>

        {/* =================== What is going well?
 =============== */}
        <div className=" col-span-6 w-full flex flex-col justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="third"
          >
            <span className="font-bold">Q3 </span> What is going well?
          </label>
          {renderInput("third")}
        </div>

        {/* ================= What am I grateful for?
 =============== */}
        <div className=" col-span-6 w-full flex flex-col justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="four"
          >
         <span className="font-bold">Q4 </span> What am I grateful for?
          </label>
          {renderInput("four")}
        </div>

        {/* ===================) What are my priorities at the moment?=============== */}
        <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="five"
          >
             <span className="font-bold">Q5 </span> What are my priorities at the moment?
          </label>
          {renderInput("five")}
        </div>


           {/* ===================) Who or what means the world to me? =============== */}
           <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="six"
          >
           <span className="font-bold">Q6 </span> What do I love about myself?
          </label>
          {renderInput("six")}
        </div>
  {/* ===================) Who or what means the world to me? =============== */}
        <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="seven"
          >
           <span className="font-bold">Q7 </span>Who or what means the world to me?
          </label>
          {renderInput("seven")}
        </div>
  {/* ===================) Have I done something that I thought I could not? =============== */}
        <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="eight"
          >
        <span className="font-bold">Q8 </span> Have I done something that I thought I could not?
          </label>
          {renderInput("eight")}
        </div>

         {/* ===================) What is bothering me? =============== */}
         <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="nine"
          >
         <span className="font-bold">Q9 </span>What is bothering me?
          </label>
          {renderInput("nine")}
        </div>


           {/* ===================) How can I take better care of myself=============== */}
           <div className=" col-span-6 w-full flex flex-col  justify-between items-center gap-2">
          <label
            className="text-black text-lg min-w-[300px]  text-left min-h-[50px]"
            htmlFor="ten"
          >
         <span className="font-bold">Q10 </span>How can I take better care of myself
          </label>
          {renderInput("ten")}
        </div>
        <div className="col-span-12">
          <button className="cursor-pointer bg-violet-900 text-white px-5 py-2 rounded-lg text-lg">
            save as pdf
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
