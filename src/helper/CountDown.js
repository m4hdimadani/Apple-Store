"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ durationDays = 2 }) {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // زمان فعلی سیستم کاربر
    const now = new Date();
    // اضافه کردن مثلاً ۲ روز (قابل تغییر)
    const future = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);
    setTargetDate(future);
  }, [durationDays]);

  const calculateTimeLeft = () => {
    if (!targetDate) return {};
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!targetDate) return <p className="text-center">در حال محاسبه زمان...</p>;

  if (Object.keys(timeLeft).length === 0) {
    return <p className="text-center text-lg font-semibold text-red-500">زمان تمام شد!</p>;
  }

  return (
    <div className=" flex gap-2  text-center text-xl font-bold lg:gap-4 ">
      <div className="">
        <p className=" w-8 h-8 lg:w-16 lg:h-16 bg-[#FFF1EB] text-center leading-8 lg:leading-16 rounded-lg text-primary font-semibold lg:text-xl pt-1">{timeLeft.seconds}</p>
        <span className="text-xs lg:text-base text-center font-medium">ثانیه</span>
      </div>
      <div className="">
        <p className=" w-8 h-8 lg:w-16 lg:h-16 bg-[#FFF1EB] text-center leading-8 lg:leading-16 rounded-lg text-primary font-semibold lg:text-xl pt-1">{timeLeft.minutes}</p>
        <span className="text-xs lg:text-base text-center font-medium">دقیقه</span>
      </div>
      <div className="">
        <p className=" w-8 h-8 lg:w-16 lg:h-16 bg-[#FFF1EB] text-center leading-8 lg:leading-16 rounded-lg text-primary font-semibold lg:text-xl pt-1">{timeLeft.hours}</p>
        <span className="text-xs lg:text-base text-center font-medium">ساعت</span>
      </div>
      <div className="">
        <p className=" w-8 h-8 lg:w-16 lg:h-16 bg-[#FF510C] text-white text-center leading-8 lg:leading-16 rounded-lg  font-semibold lg:text-xl pt-1">{timeLeft.days}</p>
        <span className="text-xs lg:text-base text-primary text-center font-medium">روز</span>
      </div>
    </div>
  );
}
