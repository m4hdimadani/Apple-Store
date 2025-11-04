import { Swiper, SwiperSlide } from "swiper/react";

import one from '../assets/images/iphone-14.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function AdvertisingBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
        style={{
          "--swiper-pagination-color": "#FF8B14",
        }}
      >
        <SwiperSlide className=" container m-auto px-6 my-14"> 
            <div>
                <Image src={one} alt="one" className=" h-68 w-full lg:w-107 lg:h-107 object-cover rounded-3xl shadow-[0_0_25px_10px_#00000032]"/>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </>
  );
}
