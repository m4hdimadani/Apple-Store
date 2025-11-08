import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
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
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            {Bestp.map((i) => (<div key={i.id}>{
                <div>
                    <Image src={i.image} alt="image"/>
                </div>
            }</div>))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BestProductsSwiper;
