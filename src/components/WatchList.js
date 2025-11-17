import arrow from "../assets/svg/arrow--left.svg";
import nike from "../assets/images/nike-watch.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import { products } from "@/productsId/ProductsId";
import Image from "next/image";

function WatchList() {
  const watch = products.filter((i) => i.category === "apple-watch");

  return (
    <div >
      <div className="container m-auto px-6 mt-10">
        <p className="text-[18px] md:text-3xl font-semibold">انواع اپل واچ</p>
      </div>
      <div className=" flex  md:flex-row gap-4 pr-6 my-6 md:mr-45 ">
        <div className="flex flex-col gap-3 w-32 md:w-82 shrink-0">
          <div className="bg-primary py-16 h-fit md:py-1 px-6 rounded-[10px] md:h-[350px]">
            <Image src={nike} alt="nike" className="min-w-25 md:min-w-32" />
          </div>
          <div>
            <button className="w-full flex-1 flex items-center justify-center gap-2 bg-[#FF510C0D] rounded-[10px] text-sm md:text-3xl text-primary font-medium">
              <p>مشاهده همه</p>
              <Image src={arrow} alt="arrow" className="w-4 md:w-6 " />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <section>
            <div className="w-full md:pr-10">
              <Swiper
                slidesPerView={2}
                freeMode
                breakpoints={{
                  365: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3.6 , spaceBetween:-50},
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
                style={{
                  "--swiper-pagination-color": "#FF8B14",
                }}
              >
                {watch.map((i) => (
                  <SwiperSlide key={i.id} >
                    <div className="bg-[#f8f8f8] rounded-2xl shadow-sm hover:shadow-md transition duration-200 p-3 md:p-4 flex flex-col h-[280px] md:h-[350px] md:w-[300px]  cursor-pointer">
                      <div className="bg-white rounded-xl flex flex-col items-center justify-center flex-1 p-4">
                        <div className="flex justify-center gap-2 mb-3">
                          <span className="w-3 h-3 rounded-full bg-[#ffda79]" />
                          <span className="w-3 h-3 rounded-full bg-[#ececec]" />
                          <span className="w-3 h-3 rounded-full bg-[#828282]" />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <Image
                            src={i.image}
                            alt={i.title}
                            className="w-24 md:w-28 lg:w-32 object-contain h-28 md:h-36"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col divide-y divide-gray-200 mt-2">
                        <h5 className="text-sm md:text-base text-center font-semibold text-gray-700 py-2 line-clamp-2 h-[48px] md:h-[54px]">
                          {i.title}
                        </h5>
                        <p className="text-center py-2 text-orange-500 text-sm md:text-base font-medium">
                          {i.price.toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                      <div>
                        <button className="absolute bottom-3 left-3 md:bottom-3 md:left-30 w-6 h-6 md:w-10 md:h-10 text-white bg-primary text-xl md:text-3xl rounded-md md:rounded-lg flex items-center justify-center shadow-sm hover:scale-105 transition-transform -m-1 cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
