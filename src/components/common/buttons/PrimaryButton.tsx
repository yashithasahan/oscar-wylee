import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  // TODO: Add onClick
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <button
      className="w-full mb-3 max-w-96 self-center bg-black text-white font-semibold py-3 shadow-custom hover:bg-gray-900 transition duration-300"
      onClick={() => {}}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
