import Image from "next/image";

import Text from "../assets/svg/apple-vision-pro.svg";

import SwapirSlaider from "@/helper/SwapirSlider";
import TripleSlider from "@/helper/SwapirSlider";

function Banner() {
  return (
  
    <div className="my-16 md:my-24">
      <div className="text-center">
        <div className="flex flex-col items-center max-md:gap-2 ">
          <Image
            src={Text}
            alt="text"
            className="w-25 lg:w-70"
          />
        </div>
        <p className="font-medium">اولین نفری باشید که ویژن پرو می‌خرید</p>
        <button className="w-24 h-8 lg:h-9 lg:w-35 border-0 text-sm mt-1  bg-primary text-white rounded lg:rounded-lg md:mt-4 lg:shadow-[0_0_15px_3px_#ff510b] ">خرید کنید</button>
      </div>
      <div className="">
        <TripleSlider />
      </div>
    </div>
  );
}

export default Banner;
