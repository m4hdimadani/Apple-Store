
function Footer() {
  return (
    <div className="bg-lightGray py-4">
        <div className="container m-auto px-6 grid grid-cols-1  lg:grid-cols-4 gap-6">
            <div className="w-full lg:order-3 lg:col-span-2 flex flex-col justify-end lg:px-6">
              <p className="font-medium">عضویت در خبرنامه</p>
              <div className="bg-white flex justify-between p-2 mt-2 rounded-[7px]">
                <input type="text" className="flex-1 placeholder:text-[#2222224a] px-2" placeholder="ایمیل خود را وارد کنید"/>
                <button className="bg-[#ff510c21] text-primary py-1 px-3 rounded-[7px]">
                  عضویت
                </button>
              </div>
            </div>
            <div className="w-full  lg:order-1 lg:col-span-4"></div>
            <div className="w-full  lg:order-4"></div>
            <div className="w-full  lg:order-2"></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer