"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/OW-Logo-RGB.svg";
import UserIcon from "@/public/Icons/user.svg";
import SearchIcon from "@/public/Icons/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShoppingBag from "@/public/Icons/shopping-bag.svg";
import { CustomIcon } from "../common/icon/CustomIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Glasses", href: "/glasses" },
  { name: "Sunglasses", href: "/sunglasses" },
  { name: "Locations", href: "/" },
  { name: "Eye Test Info", href: "/eye-test-info" },
  { name: "Offers", href: "/offers" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header>
      {/* Eye Test Button (Mobile) */}
      <div className="bg-blue-700 flex lg:hidden justify-center p-2">
        <span className="bg-white rounded-full px-10 py-1 text-xss text-primary-blue font-bold">
          BOOK AN EYE TEST
        </span>
      </div>

      {/* Main Navigation */}
      <div className="shadow-custom">
        <nav className="flex p-regular justify-between items-center gap-2 max-w-6xl mx-auto">
          {/* Mobile Menu Icon */}
          <div className="block md:hidden">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>

          {/* Logo */}
          <Image
            height={16}
            src={Logo}
            alt="Oscar Wylee Logo w-auto flex "
            priority
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-4 text-sm font-semibold">
            {links.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <span
                  className={`hover:text-black cursor-pointer pb-1 ${
                    pathname === link.href
                      ? "text-primary border-b-2 border-primary-blue"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/*Eye Test Button (Desktop) */}
          <button className="hidden lg:flex bg-white border border-primary-blue rounded-full px-8 py-1 text-primary-blue text-xss font-bold hover:bg-primary-blue hover:text-white transition-all">
            BOOK AN EYE TEST
          </button>
          <div className="flex gap-2">
            {/* Icons */}
            <CustomIcon icon={SearchIcon} alt="search"></CustomIcon>
            <CustomIcon icon={UserIcon} alt="user"></CustomIcon>
            {/* Shopping Cart */}
            <Cart />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

export const Cart = () => {
  return (
    <div className="relative">
      {/* <Image src={ShoppingBag} alt="shopping_bag" className="h-6 w-min"></Image> */}
      <CustomIcon icon={ShoppingBag} alt="shopping_bag"></CustomIcon>
      <span className="absolute flex justify-center items-center text-center -bottom-1 -right-0 h-3 w-3 rounded-full text-xxs text-white bg-black">
        2
      </span>
    </div>
  );
};
