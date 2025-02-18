import Image from "next/image";
import React from "react";
import Logo from "@/public/OW-Logo-RGB.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-700 flex sm:hidden justify-center p-2">
        <span className="bg-white rounded-full px-10 py-1 text-xxs text-primary-blue font-black">
          BOOK AN EYE TEST
        </span>
      </div>
      <div className="flex sm:hidden p-regular justify-between gap-2 shadow-lg">
        <FontAwesomeIcon icon={faBars} size="lg"></FontAwesomeIcon>
        <Image src={Logo} height={16} alt="oscar_wylee"></Image>
        <FontAwesomeIcon icon={faShoppingBag} size="lg" />
      </div>
    </div>
  );
};

export default Header;
