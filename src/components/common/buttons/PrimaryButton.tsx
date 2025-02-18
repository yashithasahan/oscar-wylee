import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <button
      className="w-full bg-black text-white font-semibold py-3 shadow-md hover:bg-gray-900 transition duration-300"
      onClick={() => {}}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
