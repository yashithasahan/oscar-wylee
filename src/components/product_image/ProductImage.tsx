"use client";
import Glass from "@/public/products/marco_280-americano-45d-optical.jpg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";

export const ProductImage: React.FC = () => {
  const dots = [0, 1, 2, 3, 4, 5]; // Number of dots
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="px-regular">
      {/* Title Section */}
      <section className="flex flex-col justify-center gap-1 items-center ">
        <h2>MARCO</h2>
        <div className="h-[1.25px] w-[40%] bg-black"></div>
        <h2>2 pairs from $199</h2>
        <span className="text-xs">Discount auto-applied at checkout</span>
      </section>
      {/* Image */}
      <section className="relative">
        <Image
          className="w-full h-auto"
          src={Glass}
          height={300}
          alt="oscar_wylee"
        />
        <button className="absolute bottom-2 right-0 border-2 border-black rounded-lg px-4 py-1 text-sm ">
          Zoom <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </section>
      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-4 justify-center">
        {dots.map((index) => (
          <span
            key={index}
            className={`h-1 w-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      {/* colors */}
      <ColorPicker />
    </div>
  );
};

const ColorPicker = () => {
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
      <h2 className="text-xs">
        <span className="text-black font-bold">Color:</span>{" "}
        <span className="text-gray-700 ">{selectedColor.name}</span>
      </h2>

      {/* Color Selection Grid */}
      <div className="flex flex-wrap justify-start gap-4">
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
        <h2 className="text-2xl font-bold text-black ">From $199.00</h2>

        {/* ZIP Pay Option */}
        <p className="text-gray-700 mt-2">
          or ZIP it from <span className="font-bold text-black">$10/week</span>{" "}
          with
          {/* <Image
            src="/zip-logo.png"
            alt="ZIP"
            className="inline-block h-4 ml-1"
          /> */}
        </p>
      </div>
      {/* Purchase */}
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
};

export default ColorPicker;
