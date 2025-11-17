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
    <section className="my-10">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center mb-6">
        <p className="text-lg md:text-2xl font-semibold text-gray-800">
          پرفروش‌ترین محصولات
        </p>
        <button
          onClick={productHandler}
          className="text-sm md:text-lg flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
        >
          مشاهده همه
          <Image src={arrow} alt="arrow" className="w-4 md:w-5" />
        </button>
      </div>
      <div className="overflow-x-auto ">
        <section >
          <div className="w-full md:pr-55">
            <Swiper
              slidesPerView={2}
              freeMode
              breakpoints={{
                365: { slidesPerView: 1.5, spaceBetween: 10 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 4.8, spaceBetween: 60 },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper w-full"
              style={{
                "--swiper-pagination-color": "#FF8B14",
              }}
            >
              {Bestp.map((i) => (
                <SwiperSlide key={i.id}>
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
                      <button className="absolute bottom-3 left-3 md:bottom-4 md:left-15 w-6 h-6 md:w-10 md:h-10 text-white bg-primary text-xl md:text-3xl rounded-md md:rounded-lg flex items-center justify-center shadow-sm hover:scale-105 transition-transform -m-1 cursor-pointer">
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
    </section>
  );
}

export default BestProductsSwiper;
