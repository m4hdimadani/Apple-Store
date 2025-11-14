import Image from "next/image"

import vision from "../assets/images/vision-pro.webp"
import apple from '../assets/svg/apple.svg'
import purple from '../assets/images/purple-iphone.webp'

function InformationBanner() {
  return (
    <div className="container m-auto px-6 mt-20 mb-10 flex flex-col  lg:flex-row gap-14 lg:gap-4">
        <div className="relative h-37 lg:h-137 w-full lg:w-3/5 bg-linear-30 from-[#72AAFF] via-[#004fc6c8] to-[#004FC6] rounded-[10px]">
            <div className="w-fit h-full flex flex-col items-center lg:items-start justify-center lg:justify-start px-6 lg:px-12  lg:pt-22 gap-2 lg:gap-6">
                <div className="flex items-center gap-1">
                    <p className="text-2xl lg:text-6xl text-white font-medium h-6 lg:h-10">Vision Pro</p>
                    <Image src={apple} alt="apple" className="size-6 lg:size-12 "/>
                </div>
                <div>
                    <p className="text-sm text-white font-medium h-6 lg:text-4xl ">جربه دنیای متفاوت</p>
                </div>
                <div>
                    <button className="w-26 lg:w-38 h-7 lg:h-10 rounded-full text-sm lg:text-xl font-semibold bg-white text-[#115bca] lg:mt-4 cursor-pointer hover:bg-amber-100">خرید کنید</button>
                </div>
            </div>
            <Image src={vision} alt="vision" className="absolute -bottom-2 lg:bottom-10 left-2 w-40 lg:w-96 h-50 lg:h-112 "/>
        </div>
        <div className="relative h-37 lg:h-137 w-full lg:w-2/5 bg-linear-30 from-[#9A5BFF00]  to-[#9A5BFF] rounded-[10px]">
            <div className="w-fit h-full flex flex-col items-center justify-center lg:justify-start px-6 gap-2 lg:gap-4 lg:m-auto lg:mt-8">
                <div className="flex items-center lg:flex-col-reverse gap-1 lg:gap-6">
                    <p className="text-lg lg:text-4xl text-white font-medium h-4.5">iPhone 14 Pro Max</p>
                    <Image src={apple} alt="apple" className="size-6 lg:size-12"/>
                </div>
                <p className="text-sm lg:text-[28px] text-white font-medium h-6">فروش ویژه به مدت محدود</p>
                <div>
                    <button className="w-26 lg:w-38 h-7 lg:h-10 rounded-full text-sm lg:text-xl font-semibold bg-white text-[#5137f5] lg:mt-4 cursor-pointer hover:bg-amber-100">خرید کنید</button>
                </div>
                <Image src={purple} alt="purple" className="absolute bottom-0 left-2 lg:left-10 w-28 lg:w-54  h-50 lg:h-80"/>
            </div>
        </div>
    </div>
  )
}

export default InformationBanner