import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children }) => {
  return (
    <button
      className="w-full mb-3 max-w-96 border self-center border-black text-black font-semibold py-3 shadow-custom hover:bg-gray-100 transition duration-300"
      onClick={() => {}}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
