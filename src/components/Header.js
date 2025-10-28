import Image from "next/image";
import React, { useState } from "react";
import hamburger from "../assets/svg/hamburger.svg";
import Logo from "../assets/svg/app-store.svg";
import HamburgerModal from "@/modal/HamburgerModal";
import ShopingCard from "../assets/svg/shopping-cart.svg";
import hart from "../assets/svg/heart.svg"
import { useRouter } from "next/navigation";

function Header() {
  const [hambur, setHambur] = useState(false);

  const router = useRouter();

  const hamburgerHandler = () => {
    setHambur(true);
  };

  const bascetHandler = () => {
    router.push("/bascets");
  };

  return (
    <div>
      <div className="h-13 md:h-[70px] bg-primary flex items-center justify-center">
        <p className="text-sm md:text-base text-white font-semibold">
          تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون
        </p>
      </div>
      <div className="max-lg:shadow-[0_0_20px_-5px_#0000001A] lg:border-b border-[#E6E6E6]  ">
        <div className="container m-auto px-6 py-6 sm:px-2 lg:py-8 ">
          <div className="flex items-center justify-between ">
            {!hambur ? (
              <div>
                <button
                  className="md:hidden cursor-pointer"
                  onClick={hamburgerHandler}
                >
                  <Image src={hamburger} alt="hamburger" />
                </button>
              </div>
            ) : (
              <HamburgerModal />
            )}
            <div className="">
              <button className="cursor-pointer flex items-center pr-25  gap-1 text-primary font-medium md:gap-5" onClick={() => {router.push("/")}}>
                <Image className="md:w-12 md:15px" src={Logo} alt="logo" />
                <p className="w-5 leading-4 md:w-fit md:text-[30px]">
                  اپل استور
                </p>
              </button>
            </div>
            <div className="md">
              <div></div>
              <div></div>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <button onClick={bascetHandler} className="cursor-pointer">
                  <Image src={ShopingCard} alt="bascets" />
                </button>
                <span className="block w-3 h-3 text-center text-[10px] bg-primary rounded-full text-white absolute -top-1 -right-1">0</span>
              </div>
              <div className="relative">
                <button onClick={bascetHandler} className="cursor-pointer">
                  <Image src={hart} alt="hart" />
                </button>
                <span className="block w-3 h-3 text-center text-[10px] bg-primary rounded-full text-white absolute -top-1 -right-1">0</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
