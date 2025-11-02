import { Swiper, SwiperSlide } from "swiper/react";

import one from "../assets/images/apple banner/1.jpg";
import tow from "../assets/images/apple banner/2.jpg";
import three from "../assets/images/apple banner/3.jpg";
import four from "../assets/images/apple banner/4.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwapirSlaider() {
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
        className="mySwiper   md:my-3 px-14"
        style={{
          "--swiper-pagination-color": "#FF8B14",
        }}
      >
        <SwiperSlide>
          <Image src={one} alt="one" className="w-[324px] h-[300px] m-auto md:w-[1200px] md:h-[700px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={tow} alt="tow" className="w-[324px] h-[300px] m-auto md:w-[1200px] md:h-[700px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={three} alt="three" className="w-[324px] h-[300px] m-auto md:w-[1200px] md:h-[700px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={four} alt="four" className="w-[324px] h-[300px] m-auto md:w-[1200px] md:h-[700px]"/>
        </SwiperSlide>
        
      
      </Swiper>
    </>
  );
}
