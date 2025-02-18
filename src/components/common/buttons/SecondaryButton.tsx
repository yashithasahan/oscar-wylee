import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children }) => {
  return (
    <button
      className="w-full border border-black text-black font-semibold py-3 shadow-lg hover:bg-gray-100 transition duration-300"
      onClick={() => {}}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
