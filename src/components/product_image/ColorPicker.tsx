import { useState } from "react";

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
      <div className="flex flex-col md:flex-col-reverse justify-start items-start gap-4">
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
      </div>
      {/* Price */}
    </div>
  );
};
