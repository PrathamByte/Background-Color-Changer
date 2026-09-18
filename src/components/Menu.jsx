import React from "react";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next"

function Menu() {
  const [color, setColor] = useState("wheat");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center md:bottom-10 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("#DC143C");
            }}
            style={{ backgroundColor: "#DC143C" }}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("green");
            }}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => {
              setColor("grey");
            }}
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => {
              setColor("yellow");
            }}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("lavender")}
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => setColor("white")}
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
