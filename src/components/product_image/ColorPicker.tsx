import Image from "next/image";
import { useState } from "react";
import ZipLogo from "@/public/extra/zip_log.svg";

export const ColorPicker = () => {
  const colors = [
    { name: "Clear Crystal", hex: "#000000" },
    { name: "Brown", hex: "#642d20" },
    { name: "Light Pink", hex: "#f8d7d4" },
    { name: "Silver", hex: "#d3d3d3" },
    { name: "Blue", hex: "#a1d6f5" },
    { name: "Beige", hex: "#d5b28e" },
    { name: "Yellow", hex: "#fce79c" },
    { name: "Sky Blue", hex: "#c2e2f0" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex flex-col items-start space-y-3 mb-4">
      {/* Selected Color Name */}
      <h2 className="text-sm">
        <span className="text-black font-bold">Color:</span>{" "}
        <span className="text-gray-700 ">{selectedColor.name}</span>
      </h2>

      {/* Color Selection Grid */}
      <div className="flex flex-wrap gap-6 ">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
              ${
                selectedColor.name === color.name
                  ? "border-black shadow-md scale-110"
                  : "border-gray-300"
              }`}
            onClick={() => setSelectedColor(color)}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: color.hex,
                boxShadow:
                  selectedColor.name === color.name
                    ? "0 2px 5px rgba(0,0,0,0.3)"
                    : "none",
              }}
            ></div>
          </button>
        ))}
      </div>
      {/* Price */}
      <div className="flex flex-col text-end border-t border-b border-gray-300 py-2 w-full justify-end">
        {/* Price */}
        <p className="mb-0 text-2xl font-bold text-black ">From $199.00</p>

        {/* ZIP Pay Option */}
        <p className="mt-1 gap-1 text-gray-700 flex flex-row  text-end justify-end items-center">
          or ZIP it from <span className="font-bold text-black">$10/week</span>{" "}
          with
          <Image
            src={ZipLogo}
            alt="ZIP"
            className="inline-block h-4 ml-1 w-min"
          />
        </p>

        {/* <p className="mt-1 flex flex-wrap items-center justify-end gap-1 text-gray-700 text-end">
  or ZIP it from 
  <span className="font-bold text-black">$10/week</span> with
  <Image
    src={ZipLogo}
    alt="ZIP"
    className="inline-block h-4 w-auto ml-1"
  />
</p>
 */}
      </div>
    </div>
  );
};
