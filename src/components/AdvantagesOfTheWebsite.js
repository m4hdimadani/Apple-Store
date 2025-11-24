import Image from "next/image"

import call from "../assets/svg/call.svg"
import scan from "../assets/svg/scan.svg"
import wallet from "../assets/svg/Wallet.svg"
import send from "../assets/svg/send.svg"


function AdvantagesOfTheWebsite() {
  return (
    <div className="lg:bg-lightGray lg:py-5 mb-5">
        <div className="container m-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 lg:divide-x-2 divide-[#ebebeb] ">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-2 py-2 bg-lightGray max-lg:rounded-[18px]">
                <Image src={call} alt="call" className="w-7"/>
                <p className="text-sm lg:text-[18px]">پشتیبانی ۲۴ ساعته</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-2 py-2 bg-lightGray max-lg:rounded-[18px]">
                <Image src={scan} alt="scan" className="w-7"/>
                <p className="text-sm lg:text-[18px]"> ضمانت اصلالت کالا </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-2 py-2 bg-lightGray max-lg:rounded-[18px]">
                <Image src={wallet} alt="wallet" className="w-7"/>
                <p className="text-sm lg:text-[18px]"> امکان پرداخت در محل </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-2 py-2 bg-lightGray max-lg:rounded-[18px]">
                <Image src={send} alt="send" className="w-7"/>
                <p className="text-sm lg:text-[18px]"> ارسال سریع </p>
            </div>
        </div>
    </div>
  )
}

export default AdvantagesOfTheWebsite