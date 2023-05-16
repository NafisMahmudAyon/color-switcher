"use client";
import ColorSwitcher from "@/components/ColorSwitcher";
import Template from "@/components/Template";
import Template1 from "@/components/Template1";
import Templates from "@/components/Templates";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#FFFFFF"); // set initial color value to white
  const [prymaryColor, setPrimaryColor] = useState("#181e4b"); // set initial color value to white
  const [secondaryColor, setSecondaryColor] = useState("#df6951"); // set initial color value to white
  const [accentColor, setAccentColor] = useState("#5e6282"); // set initial color value to white
  // const handleColorChange = (newColor) => {
  //   setColor(newColor);
  // };
  const handlePrimaryColorChange = (e) => {
    
    setPrimaryColor(e.target.value);
  };
  const handleSecondaryColorChange = (e) => {
    
    setSecondaryColor(e.target.value);
  };
  const handleAccentColorChange = (e) => {
    
    setAccentColor(e.target.value);
  };
  const handleColorChanges = (primaryColor, secondaryColor, accentColor) => {
    
    setPrimaryColor(primaryColor);
    setSecondaryColor(secondaryColor);
    setAccentColor(accentColor);
  };

  return (
    <div className="flex bg-slate-400 h-[calc(100vh-3.5rem)]">
      {/* Sidebar  */}
      <div className="min-w-[25%] bg-slate-300 pt-4 h-[calc(100vh-3.5rem)] flex justify-center">
        <div className="w-[calc(100%-20px)] bg-slate-600 pt-8 rounded-t-xl rounded-b-xl h-[calc(100%-20px)]">
          
          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <button onClick={() => {
                const primaryColor = "#a5744f";
                const secondaryColor = "#595957";
                const accentColor = "#2b2c29";
                handleColorChanges(primaryColor, secondaryColor, accentColor)
              }}>Use this</button>
            </div>
            <div className="flex justify-center  gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#a5744f]"></div>
              <div className="w-8 h-8 rounded-full bg-[#595957]"></div>
              <div className="w-8 h-8 rounded-full bg-[#2b2c29]"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <button onClick={() => {
                const primaryColor = "#3fbcaa";
                const secondaryColor = "#dc2a24";
                const accentColor = "#1c3147";
                handleColorChanges(primaryColor, secondaryColor, accentColor)
              }}>Use this</button>
            </div>
            <div className="flex justify-center  gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#3fbcaa]"></div>
              <div className="w-8 h-8 rounded-full bg-[#dc2a24]"></div>
              <div className="w-8 h-8 rounded-full bg-[#1c3147]"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme</div>
              <button onClick={() => {
                const primaryColor = "#101557";
                const secondaryColor = "#5837e0";
                const accentColor = "#f4ad2e";
                handleColorChanges(primaryColor, secondaryColor, accentColor)
              }}>Use this</button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#101557]"></div>
              <div className="w-8 h-8 rounded-full bg-[#5837e0]"></div>
              <div className="w-8 h-8 rounded-full bg-[#f4ad2e]"></div>
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
            <div className="sticky top-0 z-[51] pt-8  bg-slate-400">
              <div className="flex gap-6 pb-3 justify-center">

                <div className="text-center">
                  <p>Primary Color</p>
                  <input
                    type="color"
                    value={prymaryColor}
                    onChange={handlePrimaryColorChange}
                  />
                </div>
                <div className="text-center">
                  <p>Secondary Color</p>
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={handleSecondaryColorChange}
                  />
                </div>
                <div className="text-center">
                  <p>Accent Color</p>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={handleAccentColorChange}
                  />
                </div>
                
              </div>
              {/* <ColorSwitcher color={color} /> */}
            </div>
            <div className="h-[calc(100%-150px)] w-[100%] pt-8 ">
              {/* <Template color={color} primaryColor={prymaryColor} secondaryColor={secondaryColor} accentColor={accentColor} /> */}
              {/* <Templates /> */}
              <Template1 primaryColor={prymaryColor} secondaryColor={secondaryColor} accentColor={accentColor} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
