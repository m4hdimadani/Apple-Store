import Image from "next/image";
import React, { useState } from "react";

import hamburger from "../assets/svg/hamburger.svg";
import Logo from "../assets/svg/app-store.svg";
import HamburgerModal from "@/modal/HamburgerModal";
import ShopingCard from "../assets/svg/shopping-cart.svg";
import hart from "../assets/svg/heart.svg";
import icon from "../assets/svg/search-normal.svg";

import { useRouter } from "next/navigation";

function Header() {
  const [hambur, setHambur] = useState(false);
  const router = useRouter();

  const hamburgerHandler = () => setHambur(true);
  const bascetHandler = () => router.push("/bascets");
  const productHandler = () => router.push("/Products");

  return (
    <div>
      {/* نوار بالایی */}
      <div className="h-13 md:h-[70px] bg-primary flex items-center justify-center">
        <p className="text-sm md:text-base text-white font-semibold">
          تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون
        </p>
      </div>

      {/* هدر اصلی */}
      <div className="max-lg:shadow-[0_0_20px_-5px_#0000001A] lg:border-b border-[#E6E6E6]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6 px-6 py-6 sm:px-2 lg:py-8">
          <div className="flex items-center justify-between w-full">
            {/* منوی همبرگری برای موبایل */}
            {!hambur ? (
              <button
                className="md:hidden cursor-pointer"
                onClick={hamburgerHandler}
              >
                <Image src={hamburger} alt="hamburger" />
              </button>
            ) : (
              <HamburgerModal />
            )}

            {/* لوگو */}
            <button
              className="cursor-pointer flex items-center gap-1 text-primary font-medium md:gap-5"
              onClick={() => router.push("/")}
            >
              <Image className="md:w-12 md:h-15px" src={Logo} alt="logo" />
              <p className="w-5 leading-4 md:w-fit md:text-[30px]">اپل استور</p>
            </button>

            {/* وسط هدر (دکمه محصولات + سرچ) */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
              {/* دکمه محصولات */}
              <button className="h-11 px-5 flex items-center justify-center gap-3 rounded-full bg-primary" onClick={productHandler}>
                <div className="flex flex-col gap-1">
                  <span className="block h-0.5 w-4 bg-white"></span>
                  <span className="block h-0.5 w-4 bg-white"></span>
                  <span className="block h-0.5 w-4 bg-white"></span>
                </div>
                <span className="text-white">محصولات</span>
              </button>

              {/* باکس سرچ */}
              <div className="flex items-center bg-[#FBFBFB] rounded-full px-4 py-2 w-[400px] max-w-[500px]">
                <input
                  type="text"
                  placeholder="جستجو کنید"
                  className="w-full bg-transparent placeholder:text-[#303030] placeholder:font-medium focus:outline-0"
                />
                <Image src={icon} alt="icon" />
              </div>
            </div>

            {/* آیکون‌های سمت چپ */}
            <div className="flex gap-3 items-center">
              <div className="relative">
                <button onClick={bascetHandler} className="cursor-pointer">
                  <Image src={ShopingCard} alt="bascets" />
                </button>
                <span className="block w-3 h-3 text-center text-[10px] bg-primary rounded-full text-white absolute -top-1 -right-1">
                  0
                </span>
              </div>

              <div className="relative">
                <button onClick={bascetHandler} className="cursor-pointer">
                  <Image src={hart} alt="hart" />
                </button>
                <span className="block w-3 h-3 text-center text-[10px] bg-primary rounded-full text-white absolute -top-1 -right-1">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* سرچ برای موبایل */}
          <div className="w-full flex lg:hidden justify-between bg-[#F1F1F1] py-2.5 px-4 rounded-full">
            <input
              type="text"
              placeholder="جستجو کنید"
              className="placeholder:text-[#282828B2] placeholder:font-light focus:outline-0"
            />
            <Image src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
