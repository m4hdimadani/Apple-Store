import Image from "next/image"

import vision from "../assets/images/vision-pro.webp"
import apple from '../assets/svg/apple.svg'

function InformationBanner() {
  return (
    <div className="container m-auto px-6 mt-20 mb-10 flex flex-col  lg:flex-row gap-14 lg:gap-4">
        <div className="relative h-37 lg:h-137 w-full lg:w-3/5 bg-linear-30 from-[#72AAFF] via-[#004fc6c8] to-[#004FC6] rounded-[10px]">
            <div>
                <div className="flex items-center gap-1">
                    <p className="text-2xl lg:text-6xl text-white font-medium h-6 lg:h-10">Vision Pro</p>
                    <Image src={apple} alt="apple" className="size-6 lg:size-12 "/>
                </div>
                <div>
                    <p className="text-sm text-white font-medium h-6 lg:text-4xl ">جربه دنیای متفاوت</p>
                </div>
                <div>
                    <button>خرید کنید</button>
                </div>
            </div>
            <Image src={vision} alt="vision" className="absolute -bottom-2 lg:bottom-10 left-2 w-40 lg:w-96 h-50 lg:h-112 "/>
        </div>
        <div className="relative h-37 lg:h-137 w-full lg:w-2/5 bg-linear-30 from-[#9A5BFF00]  to-[#9A5BFF] rounded-[10px]"></div>
    </div>
  )
}

export default InformationBanner