import { Swiper, SwiperSlide } from "swiper/react";

import one from "../assets/images/apple banner/hardware_base__ecl2v43j73o2_large__1_-removebg-preview 1.jpg";
import tow from "../assets/images/apple banner/Enclosure-removebg-preview 3.jpg";
import three from "../assets/images/apple banner/Enclosure-removebg-preview 3 (2).jpg";
import five from "../assets/images/apple banner/light_seal-removebg-preview 2.jpg";


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
        className="mySwiper my-8  md:my-16 px-14"
        style={{
          "--swiper-pagination-color": "#FF8B14",
        }}
      >
        <SwiperSlide>
          <Image src={one} alt="one" className="w-[324px] h-[150px] m-auto  md:w-[1200px] md:h-[485px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={tow} alt="tow" className="w-[224px] h-[100px] m-auto  md:w-[900px] md:h-[400px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={three} alt="three" className="w-[224px] h-[100px] m-auto  md:w-[900px] md:h-[400px]"/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={five} alt="five" className="w-[224px] h-[100px] m-auto  md:w-[900px] md:h-[400px]"/>
        </SwiperSlide>
        
      
      </Swiper>
    </>
  );
}
