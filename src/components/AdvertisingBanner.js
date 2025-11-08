import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { products } from "@/productsId/ProductsId";
import Image from "next/image";

import arrow from '../assets/svg/arrow.svg'

export default function AdvertisingBanner() {
  const filter = products.filter((p) => p.id === 11);
  const filterOne = products.filter((p) => p.id === 1);
  const filterFour = products.filter((p) => p.id === 18);
  const filterSeven = products.filter((p) => p.id === 19);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={300}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
        style={{
          "--swiper-pagination-color": "#FF8B14",
        }}
      >
        <SwiperSlide className=" container m-auto px-4 my-18 lg:mx-50">
          {filter.map((p) => (<div key={p.id} className=" flex flex-col lg:flex-row px-4 lg:mr-12 pb-4 bg-lightGray rounded-2xl">
            <Image src={p.image}  alt="image" className="h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl shadow-[0_0_25px_10px_#00000032] relative bottom-8 lg:-right-12"/>
            <div className="flex flex-col justify-center lg:gap-6">
              <h4 className="text-xl lg:text-4xl font-semibold">{p.title}</h4>
              <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-8 mt-4">
                <p className="text-primary text-xl lg:text-3xl font-medium">قیمت: {p.price.toLocaleString("fa-IR")}</p>
                <span className="text-[#00000045] line-through lg:text-2xl">قیمت: {p.oldPrice.toLocaleString("fa-IR")}</span>
              </div>
              <div className="flex gap-2 lg:gap-4 my-2">
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#a848de]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#ececec]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#828282]"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-primary text-xs lg:text-xl font-medium lg:ml-4">با گارانتی الماس پایتخت همانند گارانتی اپل</p>
                <button className="w-23 h-9 lg:h-11 lg:w-41 bg-primary text-white rounded-sm font-medium">خرید کنید</button>
                <button className="w-6 h-7 lg:h-11 lg:w-11 flex items-center justify-center bg-primary opacity-50 rounded-lg">
                  <Image src={arrow} alt="arrow" className="lg:w-5"/>
                </button>
              </div>
            </div>
          </div>)) }
        </SwiperSlide>
        <SwiperSlide className=" container m-auto px-4 my-18 lg:mr-90">
          {filterOne.map((p) => (<div key={p.id} className=" flex flex-col lg:flex-row px-4 lg:mr-12 pb-4 bg-lightGray rounded-2xl">
            <Image src={p.image}  alt="image" className="h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl shadow-[0_0_25px_10px_#00000032] relative bottom-8 lg:-right-12"/>
            <div className="flex flex-col justify-center lg:gap-6">
              <h4 className="text-xl lg:text-4xl font-semibold">{p.title}</h4>
              <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-8 mt-4">
                <p className="text-primary text-xl lg:text-3xl font-medium">قیمت: {p.price.toLocaleString("fa-IR")}</p>
                <span className="text-[#00000045] line-through lg:text-2xl">قیمت: {p.oldPrice.toLocaleString("fa-IR")}</span>
              </div>
              <div className="flex gap-2 lg:gap-4 my-2">
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#a848de]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#ececec]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#828282]"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-primary text-xs lg:text-xl font-medium lg:ml-4">با گارانتی الماس پایتخت همانند گارانتی اپل</p>
                <button className="w-23 h-9 lg:h-11 lg:w-41 bg-primary text-white rounded-sm font-medium">خرید کنید</button>
                <button className="w-6 h-7 lg:h-11 lg:w-11 flex items-center justify-center bg-primary opacity-50 rounded-lg">
                  <Image src={arrow} alt="arrow" className="lg:w-5"/>
                </button>
              </div>
            </div>
          </div>)) }
        </SwiperSlide>
        <SwiperSlide className="container  m-auto px-4 my-18 lg:mr-90">
          {filterFour.map((p) => (<div key={p.id} className=" flex flex-col lg:flex-row px-4 lg:mr-12 pb-4 bg-lightGray rounded-2xl">
            <Image src={p.image}  alt="image" className="h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl shadow-[0_0_25px_10px_#00000032] relative bottom-8 lg:-right-12"/>
            <div className="flex flex-col justify-center lg:gap-6">
              <h4 className="text-xl lg:text-4xl font-semibold">{p.title}</h4>
              <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-8 mt-4">
                <p className="text-primary text-xl lg:text-3xl font-medium">قیمت: {p.price.toLocaleString("fa-IR")}</p>
                <span className="text-[#00000045] line-through lg:text-2xl">قیمت: {p.oldPrice.toLocaleString("fa-IR")}</span>
              </div>
              <div className="flex gap-2 lg:gap-4 my-2">
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#a848de]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#ececec]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#828282]"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-primary text-xs lg:text-xl font-medium lg:ml-4">با گارانتی الماس پایتخت همانند گارانتی اپل</p>
                <button className="w-23 h-9 lg:h-11 lg:w-41 bg-primary text-white rounded-sm font-medium">خرید کنید</button>
                <button className="w-6 h-7 lg:h-11 lg:w-11 flex items-center justify-center bg-primary opacity-50 rounded-lg">
                  <Image src={arrow} alt="arrow" className="lg:w-5"/>
                </button>
              </div>
            </div>
          </div>)) }
        </SwiperSlide>
        <SwiperSlide className=" container  m-auto px-4 my-18 lg:mr-90">
          {filterSeven.map((p) => (<div key={p.id} className=" flex flex-col lg:flex-row px-4 lg:mr-12 pb-4 bg-lightGray rounded-2xl">
            <Image src={p.image}  alt="image" className="h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl shadow-[0_0_25px_10px_#00000032] relative bottom-8 lg:-right-12"/>
            <div className="flex flex-col justify-center lg:gap-6">
              <h4 className="text-xl lg:text-4xl font-semibold">{p.title}</h4>
              <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-8 mt-4">
                <p className="text-primary text-xl lg:text-3xl font-medium">قیمت: {p.price.toLocaleString("fa-IR")}</p>
                <span className="text-[#00000045] line-through lg:text-2xl">قیمت: {p.oldPrice.toLocaleString("fa-IR")}</span>
              </div>
              <div className="flex gap-2 lg:gap-4 my-2">
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#a848de]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#ececec]"></div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-[#828282]"></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-primary text-xs lg:text-xl font-medium lg:ml-4">با گارانتی الماس پایتخت همانند گارانتی اپل</p>
                <button className="w-23 h-9 lg:h-11 lg:w-41 bg-primary text-white rounded-sm font-medium">خرید کنید</button>
                <button className="w-6 h-7 lg:h-11 lg:w-11 flex items-center justify-center bg-primary opacity-50 rounded-lg">
                  <Image src={arrow} alt="arrow" className="lg:w-5"/>
                </button>
              </div>
            </div>
          </div>)) }
        </SwiperSlide>
      </Swiper>
    </>
  );
}
