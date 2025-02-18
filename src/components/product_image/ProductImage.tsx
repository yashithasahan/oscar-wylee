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
    <div className="p-regular flex flex-col gap-2">
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
      {/* Purchase */}
      <PrimaryButton>Prescription</PrimaryButton>
      <SecondaryButton>Book an Eye Test</SecondaryButton>
      {/* Frame Details */}
      <FrameDetails />
    </div>
  );
};

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
    </div>
  );
};

export const FrameDetails = () => {
  return (
    <div className="mt-12 w-full border relative border-black rounded-2xl p-6 flex gap-2 sm:gap-4 sm:flex-row flex-col justify-center items-center ">
      {/* Title with line on both sides */}
      <div className="absolute right-0 left-0 top-0 -translate-y-1/2   flex items-center justify-center mb-4">
        <h2 className="mx-4 text-lg font-bold text-black text-center bg-white px-2">
          About the <br /> Frames
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center my-4">
        A classic brow-line glasses, reimagined. Marco has spring hinges and an
        adjustable nose fit for maximum comfort (and style). Now available in
        small.
      </p>

      <div className="flex flex-col sm:gap-4">
        {/* Material */}
        <h3 className="text-center font-bold text-black mb-4">
          Made from Acetate
        </h3>

        {/* Frame Fit and Measurements Table */}
        <div className="grid grid-cols-2 border border-black text-black font-semibold text-center divide-x divide-black">
          <div>
            <div className="p-3">FRAME FIT</div>
            <div className="pb-3 font-normal">WIDE</div>
          </div>
          <div>
            <div className="p-3">MEASUREMENTS</div>

            <div className="pb-3 font-normal ">56 - 19 - 148</div>
          </div>
        </div>

        {/* Extra Information */}
        <p className="text-gray-600 text-xs text-center mt-4">
          These measurements mean lens width, bridge, and temple length in
          millimeters (mm). They can be found on the inside of the temple arm.
          If you already have a pair that you like, you can compare it to these
          measurements.
        </p>
        <div className="hidden sm:block text-xs   border border-gray-400  p-4 max-w-3xl mx-auto text-center">
          {/* Regular Text */}
          <p className="text-gray-700  mb-2">
            Filter category 3 - General purpose sunglasses. High protection
            against sunglare. Good UV Protection. Not suitable for driving in
            twilight, at night, or under dull conditions.
          </p>

          {/* Bold Important Text */}
          <p className="text-black font-bold">
            This frame comes with polarised lenses. An additional $100 will be
            added to your order total for prescription orders.
          </p>
        </div>
      </div>
    </div>
  );
};
