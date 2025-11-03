import CountdownTimer from "@/helper/CountDown"


function CountDownPage() {
  return (
    <div>
        <div className="container flex justify-around items-center m-auto">
          <p className="font-semibold text-primary pb-2 lg:text-3xl ">پیشنهاد شگفت انگیر</p>
          <span className="hidden lg:block w-[585px] h-px bg-[#FF510C69] "></span>
          <CountdownTimer durationDays={2}/>
        </div>
    </div>
  )
}

export default CountDownPage