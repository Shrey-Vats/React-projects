import { useState } from "react";

function App() {
  const [bg, setBg] = useState<string>("bg-[#000000]");

  return (
    <div className={`flex flex-col h-screen ${bg}`}>
      <div className="p-3 border-t fixed w-full bottom-10  flex items-center justify-center gap-2">
        <div className="w-auto p-4 bg-white shadow-2xl rounded-4xl flex items-center justify-center gap-4 ">
          <button
            onClick={() => setBg("bg-[#FF0000]")}
            className="w-50 h-[50px] rounded-4xl text-white bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => setBg("bg-[#FFFF00]")}
            className="w-50 h-[50px] rounded-4xl text-white bg-yellow-500"
          >
            Red
          </button>
          <button
            onClick={() => setBg("bg-[#008000]")}
            className="w-50 h-[50px] rounded-4xl text-white bg-green-700"
          >
            Red
          </button>
          <button
            onClick={() => setBg("bg-[#0000FF]")}
            className="w-50 h-[50px] rounded-4xl text-white bg-blue-800"
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
