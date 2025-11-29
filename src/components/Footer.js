
import Image from "next/image"
import enamad from "../assets/images/enamad.webp"
import instagram from "../assets/svg/instagram.svg"
import whatsapp from "../assets/svg/whatsapp.svg"
import x from "../assets/svg/x.svg"

function Footer() {
  return (
    <div className="bg-lightGray py-4">
        <div className="container m-auto px-6 grid grid-cols-1  lg:grid-cols-4 gap-6">
            <div className="w-full lg:order-3 lg:col-span-2 flex flex-col justify-end lg:px-6">
              <p className="font-medium">عضویت در خبرنامه</p>
              <div className="bg-white flex justify-between p-2 mt-2 rounded-[7px]">
                <input type="text" className="flex-1 placeholder:text-[#2222224a] px-2" placeholder="ایمیل خود را وارد کنید"/>
                <button className="bg-[#ff510c21] text-primary py-1 px-3 rounded-[7px] cursor-pointer hover:bg-[#ff510c7a]">
                  عضویت
                </button>
              </div>
            </div>
            <div className="w-full  lg:order-1 lg:col-span-4"></div>
            <div className="w-full  lg:order-4 flex justify-between lg:justify-end gap-2 items-center lg:items-end max-lg:bg-white rounded-2xl max-lg:py-4 max-lg:px-5">
              <div className="lg:bg-white lg:h-12 lg:w-12 lg:rounded-lg flex items-center justify-center cursor-pointer">
                <Image src={instagram} alt="instagram" className="w-5 lg:w-6"/>
              </div>
              <div className="lg:bg-white lg:h-12 lg:w-12 lg:rounded-lg flex items-center justify-center cursor-pointer">
                <Image src={whatsapp} alt="whatsapp" className="w-5 lg:w-6"/>
              </div>
              <div className="lg:bg-white lg:h-12 lg:w-12 lg:rounded-lg flex items-center justify-center cursor-pointer">
                <Image src={x} alt="x" className="w-5 lg:w-6"/>
              </div>
             
            </div>
            <div className="w-full  lg:order-2">
              <Image src={enamad} alt="enamad" className="w-15 lg:w-52"/>
            </div>
        </div>
        <div className="text-center border-t-2 border-[#0000001a] py-4 lg:border-t-0 lg:bg-white lg:py-5 mt-4 lg:mt-8">
          <p className="text-xs lg:text-base">تمامی حقوق برای<span className="text-primary"> وبسایت اپل استور</span> محفوظ است.</p>
        </div>
    </div>
  )
}

export default Footer