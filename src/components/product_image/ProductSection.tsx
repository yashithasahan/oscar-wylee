"use client";

import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import MagnifyingGlass from "@/public/Icons/magnifying_glass.svg";
import { ColorPicker } from "./ColorPicker";
import { FrameDetails } from "./FrameDetails";

import Glass from "@/public/products/marco_280-americano-45d-optical.jpg";
import { Price } from "./Price";

// Sample Product Details
const product = {
  name: "Marco",
  price: "$199",
  image: Glass,
};
export const ProductSection: React.FC = () => {
  const dots = [0, 1, 2, 3, 4, 5]; // Number of dots
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-regular flex flex-col gap-2 my-6">
      {/* Title Section Mobile */}
      <section className="flex md:hidden flex-col justify-center gap-1 items-center ">
        <h2>{product.name}</h2>
        <div className="h-[1.25px] w-[60%] bg-black"></div>
        <h2>2 pairs from {product.price}</h2>
        <span className="text-xs">Discount auto-applied at checkout</span>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Image */}
        <section className="relative md:col-span-2  h-min">
          <Image
            className="w-full h-auto py-10 "
            src={product.image}
            height={300}
            alt="oscar_wylee"
          />
          <button className="absolute flex justify-center items-center gap-2 bg-gray-100  bottom-2 right-0 md:right-8 border-2 md:border-0 border-black rounded-lg px-4 py-1 text-sm font-semibold ">
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

        <section className="flex flex-col gap-2 md:col-span-1 ">
          {" "}
          <section className="md:flex hidden flex-col justify-start gap-1 items-start ">
            <h2>2 pairs from {product.price}</h2>
            <span className="text-xs">Discount auto-applied at checkout</span>
          </section>
          <div className="flex flex-col text-end md:border-t border-t-0 md:border-b border-b-0 border-gray-300 py-2 w-full ">
            {/* Title Section (Desktop) */}
            <h2 className="text-start hidden md:block mb-4 mt-4 text-2xl">
              {product.name}
            </h2>
            {/* Component to pick the colors */}
            <ColorPicker />
          </div>
          {/* Price Section */}
          <Price />
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
