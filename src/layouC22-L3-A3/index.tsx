"use client";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import jsPDF from "jspdf";
import carectorData from "@/layouC22-L3-A3/data.json";
import GridForm from "@/layouC22-L3-A3/gridForm";
// ✅ Define form data type
type FormData = { [key: string]: string };
const LayoutC22L3A3 = () => {
  const { handleSubmit, control } = useForm<FormData>();

  // ✅ Handles form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    createPdf(data);
  };

  // ✅ PDF Generation Function
  const createPdf = (formData: FormData) => {
    const doc = new jsPDF();
    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft * 2;
    let currentY = 10;

    // ✅ Title
    doc.setFontSize(15);
    doc.text("Fear Ladder Reference", pageWidth / 2, currentY, {
      align: "center",
    });
    currentY += 10;

    // ✅ Loop through character data and add questions + responses
    carectorData.forEach((item) => {
      doc.setFontSize(12);
      doc.text(`${item.questions}`, marginLeft, currentY);
      currentY += 6;

      // ✅ Get response or default value
      const answer = formData[item.name] || "No response provided";

      // ✅ Use splitTextToSize for proper text wrapping
      const eventLines = doc.splitTextToSize(answer, contentWidth);
      doc.text(eventLines, marginLeft, currentY);
      currentY += eventLines.length * 6;

      // ✅ Add some spacing
      currentY += 4;
    });

    doc.save("situation_responses.pdf");
  };

  return (
    <div className="min-w-[800px] min-h-screen bg-[#F8FAFC] p-5">
      <div className="flex flex-col justify-center items-center">
        <div className="text-black text-center rounded-lg p-2">
          <h2 className="text-2xl py-2 font-bold text-black text-center">
            Fear Ladder Reference
          </h2>
        </div>

        {/* ✅ Improved Form Handling */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-[800px]">
          {carectorData.map((item, index) => (
            <div
              key={index}
              className="w-full text-black p-3 my-2 rounded-lg border border-gray-300 flex justify-center items-center flex-col"
            >
              <h2 className="text-xl py-2 font-bold">{item.questions}</h2>
              <Controller
                control={control}
                name={item.name}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Enter your response"
                    maxLength={100}
                    className="p-1 min-w-[400px] min-h-[80px] rounded-md border border-gray-500"
                  />
                )}
              />
            </div>
          ))}

          {/* ✅ Improved Button Styling */}
          <button
            type="submit"
            className="w-full bg-green-600 py-2 px-5 rounded text-white font-semibold hover:bg-green-700 transition-all"
          >
            Save My Responses
          </button>
        </form>
      </div>

      {/* ✅ Step 2 Section */}
      <div className=" flex justify-center items-center ">
        <GridForm />
      </div>
    </div>
  );
};

export default LayoutC22L3A3;
