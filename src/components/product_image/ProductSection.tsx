"use client";

import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import MagnifyingGlass from "@/public/Icons/magnifying_glass.svg";
import { ColorPicker } from "./ColorPicker";
import { FrameDetails } from "./FrameDetails";

import Glass from "@/public/products/marco_280-americano-45d-optical.jpg";

// Sample Product Details
const product = {
  name: "Marco 280",
  description: "Marco 280 is an American optical glass",
  price: "$199",
  image: Glass,
};
export const ProductSection: React.FC = () => {
  const dots = [0, 1, 2, 3, 4, 5]; // Number of dots
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-regular flex flex-col gap-2">
      {/* Title Section */}
      <section className="flex flex-col justify-center gap-1 items-center ">
        <h2>{product.name}</h2>
        <div className="h-[1.25px] w-[60%] bg-black"></div>
        <h2>2 pairs from {product.price}</h2>
        <span className="text-xs">Discount auto-applied at checkout</span>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Image */}
        <section className="relative sm:col-span-2">
          <Image
            className="w-full h-auto py-10"
            src={product.image}
            height={300}
            alt="oscar_wylee"
          />
          <button className="absolute flex justify-center items-center gap-2 bg-gray-100  bottom-2 right-0 border-2 border-black rounded-lg px-4 py-1 text-sm font-semibold ">
            Zoom
            <Image
              src={MagnifyingGlass}
              alt="magnifying_glass"
              className="h-4 w-min"
            ></Image>
          </button>
          {/* Dots Indicator */}
          <div className="flex space-x-2 mt-4 justify-center">
            {dots.map((index) => (
              <span
                key={index}
                className={`  h-2 w-2 sm:h-3 sm:w-3 cursor-pointer rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2 sm:col-span-1 ">
          {/* Component to pick the colors */}
          <ColorPicker />

          {/* Purchase */}
          <PrimaryButton>Prescription</PrimaryButton>
          <SecondaryButton>Book an eye test</SecondaryButton>
        </section>
      </div>

      {/* Frame Details */}
      {/* TODO : Pass the details as props */}
      <FrameDetails />
    </div>
  );
};
