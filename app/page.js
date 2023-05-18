"use client";
import ColorSwitcher from "@/components/ColorSwitcher";
import ColorsFetching from "@/components/ColorsFetching";
import Template from "@/components/Template";
import Template1 from "@/components/Template1";
import Templates from "@/components/Templates";
import { useState } from "react";

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "http://localhost:4001/color-palette"
//   );
//   const data = await res.json();

//   return {
//     props: {
//       colors: data,
//     },
//   };
// };

const colors = [
  {
    id: 1,
    primaryColor: "#a5744f",
    secondaryColor: "#595957",
    accentColor: "#2b2c29",
  },
  {
    id: 2,
    primaryColor: "#3fbcaa",
    secondaryColor: "#dc2a24",
    accentColor: "#1c3147",
  },
  {
    id: 3,
    primaryColor: "#101557",
    secondaryColor: "#5837e0",
    accentColor: "#f4ad2e",
  },
  {
    id: 4,
    primaryColor: "#a07694",
    secondaryColor: "#87a7d2",
    accentColor: "#c9d6e1",
  },
  {
    id: 5,
    primaryColor: "#0458f8",
    secondaryColor: "#393e49",
    accentColor: "#d0d8db",
  },
  {
    id: 6,
    primaryColor: "#f0c575",
    secondaryColor: "#eb1222",
    accentColor: "#2f35da",
  },
  {
    id: 7,
    primaryColor: "#ab755f",
    secondaryColor: "#434441",
    accentColor: "#427274",
  },
  {
    id: 8,
    primaryColor: "#a5744f",
    secondaryColor: "#595957",
    accentColor: "#2b2c29",
  },
  {
    id: 2,
    primaryColor: "#f0dab1",
    secondaryColor: "#f77813",
    accentColor: "#1c3147",
  },
  {
    id: 3,
    primaryColor: "#101557",
    secondaryColor: "#5837e0",
    accentColor: "#f4ad2e",
  },
  {
    id: 4,
    primaryColor: "#a07694",
    secondaryColor: "#87a7d2",
    accentColor: "#c9d6e1",
  },
  {
    id: 5,
    primaryColor: "#0458f8",
    secondaryColor: "#393e49",
    accentColor: "#d0d8db",
  },
  {
    id: 6,
    primaryColor: "#f0c575",
    secondaryColor: "#eb1222",
    accentColor: "#2f35da",
  },
  {
    id: 7,
    primaryColor: "#ab755f",
    secondaryColor: "#434441",
    accentColor: "#427274",
  },
  
];

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
  const styleProps = (props) => {
    const style = {
      "backgroundColor": props.color
    }

  }
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
  const codeString =
    "--primary-color : " +
    pColor +
    "; " +
    "--secondary-color :" +
    sColor +
    "; " +
    "--accent-color :" +
    aColor +
    ";";

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
      const letters = "0123456789ABCDEF";
      let color = "#";

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

          <div>
            {colors &&
              colors.map((color) => (
                <div
                  className="border-b-2 border-solid border-gray-800 "
                  key={color.id}
                >
                  <div className="flex justify-between py-2 px-4 bg-slate-400">
                    <div> Color Scheme - {color.id}</div>
                    <button
                      onClick={() => {
                        const primaryColor = `${color.primaryColor}`;
                        const secondaryColor = `${color.secondaryColor}`;
                        const accentColor = `${color.accentColor}`;
                        handleColorChanges(
                          primaryColor,
                          secondaryColor,
                          accentColor
                        );
                      }}
                    >
                      {" "}
                      use this
                    </button>
                  </div>
                  <div
                    className="flex  justify-center gap-2 py-3 px-4"
                    onClick={() => {
                      const primaryColor = `${color.primaryColor}`;
                      const secondaryColor = `${color.secondaryColor}`;
                      const accentColor = `${color.accentColor}`;
                      handleColorChanges(
                        primaryColor,
                        secondaryColor,
                        accentColor
                      );
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full bg-[${color.primaryColor}]`}
                      title={`${color.primaryColor}`}
                    ></div>
                    <div
                      className={`w-8 h-8 rounded-full bg-[${color.secondaryColor}]`}
                      title={`${color.secondaryColor}`}
                    ></div>
                    <div
                      className={`w-8 h-8 rounded-full bg-[${color.accentColor}]`}
                      title={`${color.accentColor}`}
                    ></div>
                  </div>
                </div>
              ))}
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
                    title={primaryColor}
                    onChange={handlePrimaryColorChange}
                  />
                </div>
                <div className="text-center">
                  <p>Secondary Color</p>
                  <input
                    type="color"
                    value={secondaryColor}
                    title={secondaryColor}
                    onChange={handleSecondaryColorChange}
                  />
                </div>
                <div className="text-center">
                  <p>Accent Color</p>
                  <input
                    type="color"
                    value={accentColor}
                    title={accentColor}
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
