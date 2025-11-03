import Image from "next/image";
import Link from "next/link";

import appleWatch from "../assets/svg/apple-watch.svg";
import airPods from "../assets/svg/icons8-airpods-pro-100.png";
import iPad from "../assets/svg/ipad.svg";
import iPhone from "../assets/svg/iphone.svg";
import MagSafe from "../assets/svg/magsafe.svg";
import HomePod from "../assets/svg/homepod.svg";
import appleTv from "../assets/svg/apple-tv.svg";

function Category() {
  return (
    <div>
      <div className="container m-auto flex flex-wrap justify-center md:justify-between gap-x-3 gap-y-5 mt-8 md:bg-lightGray rounded-2xl md:py-7 md:px-10 lg:px-36">
        <div>
          <Link href="/Products/apple-watch" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={appleWatch} alt="appleWatch" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              اپل واچ
            </span>
          </Link>
        </div>
        <div>
          <Link href="/Products/AirPods" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={airPods} alt="airPods" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              ایرپاد
            </span>
          </Link>
        </div>
        <div>
          <Link href="/Products/iPad" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={iPad} alt="iPad" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              {" "}
              آیپد
            </span>
          </Link>
        </div>
        <div>
          <Link href="/Products/iPhone" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={iPhone} alt="iPhone" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              {" "}
              آیفون
            </span>
          </Link>
        </div>
        <div>
          <Link href="/Products/MagSafe charger" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={MagSafe} alt="MagSafe" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              {" "}
              شارژر مگ سیف
            </span>
          </Link>
        </div>
        <div>
          <Link href="/Products/HomePod" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
            <Image src={HomePod} alt="HomePod" className="w-8 md:w-11" />
            <span className="text-xs md:text-base font-medium text-[#747474]">
              {" "}
              هوم پاد
            </span>
          </Link>
        </div>
        <Link href="/Products/Apple Tv" className="w-20 md:w-fit h-20 flex flex-col items-center justify-center gap-2 bg-lightGray rounded-lg">
          <Image src={appleTv} alt="appleTv" className="w-8 md:w-11" />
          <span className="text-xs md:text-base font-medium text-[#747474]">
            {" "}
            اپل تی وی
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Category;
