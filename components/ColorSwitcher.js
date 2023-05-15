"use client"
import { useState } from "react";

function ColorSwitcher(props) {
    const [color, setColor] = useState("#FFFFFF"); // set initial color value to white
    // const handleColorChange = (newColor) => {
    //   setColor(newColor);
    // };
    const handleColorChange = (e) => {
      setColor(e.target.value)
    }
    const styles = {
        "background": props.color,
        "--color-secondary": color,
        "--color-accent": color,
      };
    
  
    return (
      <div className="">
        <button
          onClick={() => handleColorChange("#F87171")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("#60A5FA")}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        >
          Blue
        </button>
        <button
          onClick={() => handleColorChange("#34D399")}
          className="bg-green-500 text-white px-4 py-2 rounded ml-4"
        >
          Green
        </button>
        {/* your main content goes here */}
        <input type="color" value={props.color} onChange={handleColorChange} />
        <div className="" style={styles}>

        <h1 className={`text-3xl text-[#8230d5] w-[100%]`}>hellobcvbcvb</h1>
        </div>
      </div>
    );
  }
  
  export default ColorSwitcher;
  