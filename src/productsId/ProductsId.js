import one from "../assets/images/products/iphone-15-pro-review_6xwy.jpg";
import tow from "../assets/images/products/apple-2023-iphone-15-05.jpg";
import three from "../assets/images/products/refurb-mba13-m3-midnight-202405.jpg";
import four from "../assets/images/products/refurb-mbp14-m3-max-pro-silver-202402.jpg";
import five from "../assets/images/products/814P0ojHArL._UF1000,1000_QL80_.jpg";
import six from "../assets/images/products/ebfb22c9-d191-48ae-a96d-15ece0955a2c.5b7b63432e60b6562249d9ed7a57d4bf.webp";
import seven from "../assets/images/products/Apple_Watch_Ultra_2_LTE_49mm_Titanium_Orange_Ocean_Band_PDP_Image_Position-1__WWEN_2048x.webp";
import eight from "../assets/images/products/Apple_Watch_Ultra_2_LTE_49mm_Titanium_Orange_Ocean_Band_PDP_Image_Position-1__WWEN_2048x.webp";
import nine from "../assets/images/products/652d04f2eb21a6b54f508481.jpg";
import ten from "../assets/images/products/51f8396d-1128-4ef1-9e99-192f7db68e66.webp";
import eleven from "../assets/images/iphone-14.webp";
import towelve from "../assets/images/pc-laptop.webp";
import threty from "../assets/images/ipad.png";
import forty from "../assets/images/orang.png";
import fifty from "../assets/images/air.png";
import sixty from "../assets/images/oushan.png";
import seventy from"../assets/images/sport.png";
import eighty from"../assets/images/products/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large_2x.jpg";
import ninty from"../assets/images/products/Apple-Watch-Ultra-2-Modular-Ultra-Watch-Face-Night-Mode-230912_inline.jpg.large.jpg";

export const products = [
  {
    id: 1,
    slug: "iphone-15-pro",
    title: "آیفون 15 پرو",
    price: 1200000,
    oldPrice: 1300000,
    image: one,
    category: "iPhone",
    description:
      "آیفون ۱۵ پرو جدیدترین پرچمدار اپل است که با بدنه تیتانیومی، تراشه قدرتمند A17 Pro و دوربین سه‌گانه با قابلیت تصویربرداری سینمایی عرضه شده است. این گوشی علاوه بر عملکرد بی‌نظیر، تجربه‌ای سریع‌تر و روان‌تر در اجرای بازی‌ها و اپلیکیشن‌ها ارائه می‌دهد. درگاه USB-C و Dynamic Island از دیگر ویژگی‌های جذاب آن هستند.",
  },
  {
    id: 2,
    slug: "iphone-15",
    title: "آیفون 15",
    price: 999000,
    image: tow,
    oldPrice: null,
    category: "iPhone",
    description:
      "آیفون ۱۵ با طراحی مدرن‌تر، دوربین اصلی ۴۸ مگاپیکسلی و تراشه A16 Bionic یک انتخاب عالی برای کاربرانی است که دنبال عملکرد بالا و ظاهری زیبا هستند. با Dynamic Island و USB-C، اپل تجربه‌ای کاملاً تازه را برای کاربران فراهم کرده است.",
  },
  {
    id: 3,
    slug: "macbook-air-m3",
    title: "مک بوک ایر M3",
    price: 1500000,
    image: three,
    oldPrice: null,
    category: "laptop",
    description:
      "مک‌بوک ایر M3 سبک‌ترین و نازک‌ترین لپ‌تاپ اپل است که با تراشه M3 عملکردی سریع و کم‌مصرف ارائه می‌دهد.",
  },
  {
    id: 4,
    slug: "macbook-pro-m3-pro",
    title: "مک بوک پرو M3 Pro",
    price: 2300000,
    image: four,
    oldPrice: 2500000,
    category: "laptop",
    description:
      "مک‌بوک پرو M3 Pro مخصوص کاربرانی طراحی شده که به نهایت قدرت نیاز دارند. تراشه M3 Pro تا چند برابر سریع‌تر از نسل قبل عمل می‌کند و برای کارهای گرافیکی، برنامه‌نویسی حرفه‌ای و تدوین ویدیو فوق‌العاده است.",
  },
  {
    id: 5,
    slug: "ipad-pro-m2",
    title: "آیپد پرو M2",
    price: 1100000,
    image: five,
    oldPrice: null,
    category: "iPad",
    description:
      "آیپد پرو M2 با قدرتی در سطح لپ‌تاپ، تجربه‌ای بی‌نظیر از خلاقیت و سرعت ارائه می‌دهد.",
  },
  {
    id: 6,
    slug: "ipad-air-m1",
    title: "آیپد ایر M1",
    price: 800000,
    image: six,
    oldPrice: null,
    category: "iPad",
    description:
      "آیپد ایر M1 تعادل کامل بین قدرت، سبکی و قیمت مناسب را ارائه می‌دهد.",
  },
  {
    id: 7,
    slug: "apple-watch-ultra-2",
    title: "اپل واچ اولترا 2",
    price: 899000,
    image: seven,
    oldPrice: null,
    category: "apple-watch",
    description:
      "اپل واچ اولترا ۲ مخصوص ماجراجویان و ورزشکاران حرفه‌ای طراحی شده است.",
  },
  {
    id: 8,
    slug: "apple-watch-series-9",
    title: "اپل واچ Series 9",
    price: 599000,
    image: eight,
    oldPrice: null,
    category: "apple-watch",
    description:
      "اپل واچ سری ۹ با چیپ S9 و قابلیت کنترل با حرکت دست (Double Tap) تجربه‌ای هوشمندتر ارائه می‌دهد.",
  },
  {
    id: 9,
    slug: "airpods-pro-2",
    title: "ایپادز Pro 2",
    price: 249000,
    image: nine,
    oldPrice: null,
    category: "AirPods",
    description:
      "ایرپادز پرو نسل دوم با حذف نویز فعال پیشرفته و صدای فضایی بهینه‌شده عرضه شده است.",
  },
  {
    id: 10,
    slug: "apple-tv-4k",
    title: "اپل TV 4K",
    price: 179000,
    image: ten,
    oldPrice: null,
    category: "Apple TV",
    description:
      "اپل تی‌وی 4K با تراشه A15 Bionic کیفیت تصویر و عملکرد بی‌نظیری ارائه می‌دهد.",
  },
  {
    id: 11,
    slug: "iphone-14-pro-max-256",
    title: "آیفون پرو مکس 256GB",
    price: 60500000,
    oldPrice: 62000000,
    image: eleven,
    category: "iPhone",
    description:
      "آیفون ۱۴ پرو مکس با حافظه ۲۵۶ گیگابایت یکی از محبوب‌ترین گوشی‌های پرچمدار اپل است.",
  },
  {
    id: 12,
    slug: "macbook-air-13-m2-8-256-2022",
    title: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
    price: 75000000,
    image: towelve,
    oldPrice: null,
    category: "laptop",
    description:
      "مک‌بوک ایر ۱۳.۶ اینچ مدل ۲۰۲۲ با تراشه M2 نسل جدید و طراحی باریک عرضه شده است.",
  },
  {
    id: 13,
    slug: "ipad-pro-11-m2-128",
    title: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
    price: 45000000,
    image: threty,
    oldPrice: null,
    category: "iPad",
    description:
      "آیپد پرو ۱۱ اینچی با تراشه M2 قدرتی در حد لپ‌تاپ دارد و برای طراحی و مطالعه عالی است.",
  },
  {
    id: 14,
    slug: "apple-watch-ultra-orange-loop",
    title: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: 41200000,
    image: forty,
    oldPrice: null,
    category: "apple-watch",
    description:
      "اپل واچ اولترا با بند آلپاین نارنجی برای ماجراجویان طراحی شده است.",
  },
  {
    id: 15,
    slug: "airpods-max",
    title: "ایرپاد مکس هدفون بلوتوث اپل",
    price: 27300000,
    image: fifty,
    oldPrice: null,
    category: "AirPods",
    description:
      "ایرپاد مکس هدفونی بی‌سیم از اپل با صدایی بی‌نقص و حذف نویز فعال پیشرفته است.",
  },
  {
    id: 16,
    slug: "apple-watch-ultra-midnight-ocean",
    title: "اپل واچ اولترا تیتانیومی با بند اوشن میدنایت",
    price: 21000000,
    image: sixty,
    oldPrice: null,
    category: "apple-watch",
    description:
      "اپل واچ اولترا با بند اوشن مشکی برای غواصان و ورزشکاران حرفه‌ای طراحی شده است.",
  },
  {
    id: 17,
    slug: "apple-watch-series-8-midnight",
    title: "اپل واچ سری 8 آلومینیوم میدنایت با بند اسپرت سیلیکون میدنایت",
    price: 15000000,
    image: seventy,
    oldPrice: null,
    category: "apple-watch",
    description:
      "اپل واچ سری ۸ با بدنه آلومینیومی رنگ میدنایت ترکیبی از زیبایی و عملکرد است.",
  },
  {
    id: 18,
    slug: "apple-watch-series-8-midnight",
    title: "اپل واچ سری 8 آلومینیوم میدنایت با بند اسپرت سیلیکون میدنایت",
    price: 15000000,
    image: eighty,
    oldPrice: 16000000,
  
    description:
      "اپل واچ سری ۸ با بدنه آلومینیومی رنگ میدنایت ترکیبی از زیبایی و عملکرد است.",
  },
  {
    id: 19,
    slug: "apple-watch-series-8-midnight",
    title: "اپل واچ سری 8 آلومینیوم میدنایت با بند اسپرت سیلیکون میدنایت",
    price: 15000000,
    image: ninty,
    oldPrice: 16000000,
    description:
      "اپل واچ سری ۸ با بدنه آلومینیومی رنگ میدنایت ترکیبی از زیبایی و عملکرد است.",
  },
];
