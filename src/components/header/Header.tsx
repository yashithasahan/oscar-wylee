import Image from "next/image";
import React from "react";
import Logo from "@/public/OW-Logo-RGB.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShoppingBag from "@/public/Icons/shopping-bag.svg";

const Header: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-700 flex sm:hidden justify-center p-2">
        <span className="bg-white rounded-full px-10 py-1 text-xss text-primary-blue font-bold">
          BOOK AN EYE TEST
        </span>
      </div>
      <div className="flex sm:hidden p-regular justify-between gap-2 shadow-lg">
        <FontAwesomeIcon icon={faBars} size="lg"></FontAwesomeIcon>
        <Image src={Logo} height={20} alt="oscar_wylee"></Image>
        <Cart />
      </div>
    </div>
  );
};

export default Header;

export const Cart = () => {
  return (
    <div className="relative">
      <Image src={ShoppingBag} alt="shopping_bag" className="h-6 w-min"></Image>
      <span className="absolute flex justify-center items-center text-center -bottom-1 -right-1 h-3 w-3 rounded-full text-xxs text-white bg-black">
        2
      </span>
    </div>
  );
};
