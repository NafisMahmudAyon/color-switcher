"use client";
import ColorSwitcher from "@/components/ColorSwitcher";
import Template from "@/components/Template";
import Template1 from "@/components/Template1";
import Templates from "@/components/Templates";
import { useState } from "react";

export default function Home() {
  const [concateColor, setConcateColor] = useState(""); // set initial color value to white
  const [primaryColor, setPrimaryColor] = useState("#181e4b"); // set initial color value to white
  const [secondaryColor, setSecondaryColor] = useState("#df6951"); // set initial color value to white
  const [accentColor, setAccentColor] = useState("#5e6282"); // set initial color value to white
  const [copied, setCopied] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");
  // const handleColorChange = (newColor) => {
  //   setColor(newColor);
  // };
  const pColor = primaryColor;
  const sColor = secondaryColor;
  const aColor = accentColor;
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
// copy code 
  const codeString = "--primary-color : " + pColor + "; " + "--secondary-color :" + sColor + "; " + "--accent-color :" + aColor + ";";

  const copyText = () => {
    navigator.clipboard.writeText(`${codeString}`);
    setCopied(true);
    setButtonText("Copied!");
    setTimeout(() => {
      setCopied(false);
      setButtonText("Copy");
    }, 2000);
  };
// copy code end 

// RandomColorGenerator
function RandomColorGenerator() {
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    

    return color;
      

  }
  
  // function secColorGenerator() {
  //   let colors = generateRandomColor();

  //   if (colors == priColor) {
  //     colors = generateRandomColor();
  //   }
    
  //   else {
  //     colors
  //   }

    
  // }
  const priColor = generateRandomColor();
  const secColor = generateRandomColor(); 
  const accColor = generateRandomColor(); 
  handleColorChanges(priColor, secColor, accColor);
}
  // RandomColorGenerator end


  return (
    <div className="flex bg-slate-400 h-[calc(100vh-3.5rem)]">
      {/* Sidebar  */}
      <div className="min-w-[25%] bg-slate-300 pt-4 h-[calc(100vh-3.5rem)] flex justify-center shadow-xl shadow-black">
        <div className="w-[calc(100%-20px)] bg-slate-600  rounded-t-xl rounded-b-xl h-[calc(100%-20px)]">
        <div className="h-8  rounded-t-xl sticky top-0 left-0 z-[52] bg-slate-500 flex gap-2 items-center px-4">
            <div className="w-3 h-3 bg-[#ed6a5e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#f4be4f] rounded-full"></div>
            <div className="w-3 h-3 bg-[#61c454] rounded-full"></div>
          </div>
          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 1</div>
              <button
                onClick={() => {
                  const primaryColor = "#a5744f";
                  const secondaryColor = "#595957";
                  const accentColor = "#2b2c29";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex justify-center  gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#a5744f]"></div>
              <div className="w-8 h-8 rounded-full bg-[#595957]"></div>
              <div className="w-8 h-8 rounded-full bg-[#2b2c29]"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 2</div>
              <button
                onClick={() => {
                  const primaryColor = "#3fbcaa";
                  const secondaryColor = "#dc2a24";
                  const accentColor = "#1c3147";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex justify-center  gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#3fbcaa]"></div>
              <div className="w-8 h-8 rounded-full bg-[#dc2a24]"></div>
              <div className="w-8 h-8 rounded-full bg-[#1c3147]"></div>
            </div>
          </div>

          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 3</div>
              <button
                onClick={() => {
                  const primaryColor = "#101557";
                  const secondaryColor = "#5837e0";
                  const accentColor = "#f4ad2e";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#101557]"></div>
              <div className="w-8 h-8 rounded-full bg-[#5837e0]"></div>
              <div className="w-8 h-8 rounded-full bg-[#f4ad2e]"></div>
            </div>
          </div>


          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 4</div>
              <button
                onClick={() => {
                  const primaryColor = "#a07694";
                  const secondaryColor = "#87a7d2";
                  const accentColor = "#c9d6e1";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#a07694]"></div>
              <div className="w-8 h-8 rounded-full bg-[#87a7d2]"></div>
              <div className="w-8 h-8 rounded-full bg-[#c9d6e1]"></div>
            </div>
          </div>


          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 5</div>
              <button
                onClick={() => {
                  const primaryColor = "#0458f8";
                  const secondaryColor = "#393e49";
                  const accentColor = "#d0d8db";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#0458f8]"></div>
              <div className="w-8 h-8 rounded-full bg-[#393e49]"></div>
              <div className="w-8 h-8 rounded-full bg-[#d0d8db]"></div>
            </div>
          </div>


          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 6</div>
              <button
                onClick={() => {
                  const primaryColor = "#f0c575";
                  const secondaryColor = "#eb1222";
                  const accentColor = "#2f35da";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#f0c575]"></div>
              <div className="w-8 h-8 rounded-full bg-[#eb1222]"></div>
              <div className="w-8 h-8 rounded-full bg-[#2f35da]"></div>
            </div>
          </div>


          <div className="border-b-2 border-solid border-gray-800 ">
            <div className="flex justify-between py-2 px-4 bg-slate-400">
              <div> Color Scheme - 7</div>
              <button
                onClick={() => {
                  const primaryColor = "#ab755f";
                  const secondaryColor = "#434441";
                  const accentColor = "#427274";
                  handleColorChanges(primaryColor, secondaryColor, accentColor);
                }}
              >
                Use this
              </button>
            </div>
            <div className="flex  justify-center gap-2 py-3 px-4">
              <div className="w-8 h-8 rounded-full bg-[#ab755f]"></div>
              <div className="w-8 h-8 rounded-full bg-[#434441]"></div>
              <div className="w-8 h-8 rounded-full bg-[#427274]"></div>
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
          <div className="w-full relative">
            <div className="sticky top-0 z-[51] pt-8  bg-slate-400">
              <div className="flex gap-6 pb-3 justify-center">
                <div className="text-center">
                  <p>Primary Color</p>
                  <input
                    type="color"
                    value={primaryColor}
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
            <div className="flex justify-center py-3 bg-slate-400 border-t-2 border-neutral-800">

              <button
                onClick={copyText}
                className="px-4 py-2 mr-4 mt-4 font-semibold  rounded-md shadow-md bg-cyan-800 hover:bg-cyan-900 hover:shadow-cyan-700 "
              >
                {copied ? "Copied!" : buttonText}
              </button>
              <button
                onClick={RandomColorGenerator}
                className="px-4 py-2 mt-4  font-semibold  rounded-md shadow-md bg-cyan-800 hover:bg-cyan-900 hover:shadow-cyan-700 "
              >
                Generate Color
              </button>
            </div>
          </div>
          <div className="h-fit w-[100%] pt-8 ">
            {/* <Template color={color} primaryColor={primaryColor} secondaryColor={secondaryColor} accentColor={accentColor} /> */}
            {/* <Templates /> */}
            <Template1
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              accentColor={accentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
