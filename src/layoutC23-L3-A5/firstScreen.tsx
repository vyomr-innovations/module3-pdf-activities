import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ListData from "@/layoutC23-L3-A5/listData.json"
type myProps = {
    isFirstScreen:string
    setIsfirstScreen: (value: string) => void;
};
const FirstScreen = ({ setIsfirstScreen,isFirstScreen }: myProps) => {
  return (
    <div className="grid grid-cols-12 place-items-center gap-5  w-[900px]  p-1">
      <h2 className="col-span-12 text-3xl text-center text-black font-bold">
How to say no      </h2>
     
     <div className="col-span-12 w-full flex justify-start p-5 items-center flex-col gap-3 bg-violet-200 min-h-[300px] rounded-lg">
      <h2 className="text-2xl text-black font-semibold">Read the steps to express disagreement politely</h2>
      <ul className="list-disc space-y-5 p-3 w-[600px]">
        {
          ListData.map((item,index)=>(

            <li key={index} className="text-xl text-black">{item}</li>
          ))
        }
      </ul>
      
     </div>

      <div className="col-span-12 w-full flex justify-between items-center mt-5">
        <div
       
          className={` ${isFirstScreen == "first" ?"" :"border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"}  `}
        >
          <FaArrowLeft className={` ${isFirstScreen == "first" ?"hidden" :"block"} text-[40px]  cursor-pointer text-black`} />
        </div>

        <div
         onClick={()=>setIsfirstScreen("secoundScreen")}
          className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 `}
        >
          <FaArrowRight className={` text-[40px]  cursor-pointer text-black`} />
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
