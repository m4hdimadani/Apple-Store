import Image from "next/image";
import React, { useState } from "react";
import hamburger from "../assets/svg/hamburger.svg";
import Logo from "../assets/svg/app-store.svg";
import HamburgerModal from "@/modal/HamburgerModal";
import ShopingCard from "../assets/svg/shopping-cart.svg";

function Header() {
  const [hambur, setHambur] = useState(false);
  const [bascet, setBascet] = useState("");

  

  const hamburgerHandler = () => {
    setHambur(true);
  };

  const bascetHandler = () => {
   
  };

  return (
    <div>
      <div className="h-13 md:h-[70px] bg-primary flex items-center justify-center">
        <p className="text-sm md:text-base text-white font-semibold">
          تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون
        </p>
      </div>
      <div className="max-lg:shadow-[0_0_20px_-5px_#0000001A] lg:border-b border-[#E6E6E6] h-10">
        <div className="container">
          <div>
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
            <div className="flex items-center gap-1 text-primary font-medium md:gap-5">
              <Image className="w-8 md:13px" src={Logo} alt="logo" />
              <p className="w-5 leading-4 md:w-fit md:text-[30px]">اپل استور</p>
            </div>
            <div>
              <div>
                <button onClick={bascetHandler}>
                  <Image src={ShopingCard} alt="bascets" />
                </button>
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
