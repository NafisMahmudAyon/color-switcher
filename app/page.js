"use client";
import ColorSwitcher from "@/components/ColorSwitcher";
import Template from "@/components/Template";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#FFFFFF"); // set initial color value to white
  // const handleColorChange = (newColor) => {
  //   setColor(newColor);
  // };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleColorChanges = (props) => {
    setColor(props);
  };

  return (
    <div className="flex bg-slate-400 h-[calc(100vh-3.5rem)]">
      {/* Sidebar  */}
      <div className="min-w-[25%] bg-slate-300 pt-4 h-[calc(100vh-3.5rem)] flex justify-center">
        <div className="w-[calc(100%-20px)] bg-slate-600 pt-8 rounded-t-xl rounded-b-xl h-[calc(100%-20px)]">
          
          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <button onClick={() => handleColorChanges("#4287f5")}>Use this</button>
            </div>
            <div className="flex gap-2 py-3 px-4">
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-red-400">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <div>Use this</div>
            </div>
            <div className="flex gap-2 py-3 px-4">
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-red-400">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <div>Use this</div>
            </div>
            <div className="flex gap-2 py-3 px-4">
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
              <div className="w-8 h-8 bg-black"></div>
            </div>
          </div>

        </div>
      </div>
      {/* main content  */}
      <div className="min-w-[75%] bg-slate-300 pt-4 h-[calc(100vh-3.5rem)] relative flex justify-center overflow-auto">
        <div className="w-[calc(100%-20px)] bg-slate-600 rounded-t-xl rounded-b-xl h-[calc(100%-20px)] overflow-auto">
          {/* apple ui  */}
          <div className="h-8  rounded-t-xl sticky top-0 left-0 z-[52] bg-slate-500 flex gap-2 items-center px-4">
            <div className="w-3 h-3 bg-[#ed6a5e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#f4be4f] rounded-full"></div>
            <div className="w-3 h-3 bg-[#61c454] rounded-full"></div>
          </div>
          <main className="w-full relative">
            <div className="sticky top-0 z-[51] pt-8 h-[150px] bg-slate-400">
              <div className="">
                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                />
                <ColorSwitcher color={color} />
              </div>
            </div>
            <div className="h-[calc(100%-150px)] overflow-y-scroll">
              <Template color={color} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
