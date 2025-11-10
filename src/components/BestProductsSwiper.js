import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

import arrow from "../assets/svg/arrow--left.svg";
import { useRouter } from "next/navigation";
import { Bestp } from "@/productsId/Bestp";

function BestProductsSwiper() {
  const router = useRouter();

  const productHandler = () => router.push("/Products/Best-Products");

  return (
    <div>
      <div className="container m-auto px-6 flex justify-between items-center">
        <div>
          <p className="text-[18px] md:text-3xl font-semibold">
            پرفروشترین محصولات
          </p>
        </div>
        <div>
          <button
            onClick={productHandler}
            className="text-sm leading-3 md:text-2xl flex justify-between items-center gap-2"
          >
            مشاهده همه
            <Image src={arrow} alt="arrow" className="md:w-6" />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
        style={{
          "--swiper-pagination-color": "#FF8B14",
        }}
      >
        <div>
          {Bestp.map((i) => (
            <div key={i.id}>
              {
                <div>
                  <SwiperSlide key={i.id} className="h-82 min-w-50  md:min-w-80 md:h-135 ">
                    <div className="  h-82 min-w-50  md:min-w-80 md:h-135 bg-[#f6f6f6] rounded-xl p-3 md:p-3">
                      <div className="bg-white h-55 md:h-75 w-full md:w-80 flex flex-col items-center justify-center rounded-lg ">
                        <div className="flex justify-center gap-2">
                          <div className="w-3 h-3 md:h-5 rounded-full bg-[#ffda79]"></div>
                          <div className="w-3 h-3 md:h-5 rounded-full bg-[#ececec]"></div>
                          <div className="w-3 h-3 md:h-5 rounded-full bg-[#828282]"></div>
                        </div>
                        <Image src={i.image} alt="image" className="w-40 " />
                      </div>
                      <div className="flex flex-col divide-y divide-[#e4e4e4] mt-2">
                        <h5 className="text-sm md:text-[18px] text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                          {i.title}
                        </h5>
                        <p className="text-center py-2 md:text-xl md:py-4">
                          {i.price.toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              }
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default BestProductsSwiper;
