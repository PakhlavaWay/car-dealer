import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MyButton from "../../UI/MyButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import mirai from "./mirai.jpg";
import { NavLink } from "react-router-dom";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation={true}
    >
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="">
          <div>
            <img src={mirai} alt="mirai" className="rounded-md" />
          </div>
          <div className="border-t flex flex-col">
            <p className="text-[1.2rem] truncate text-start font-bold">
              2023 Toyota Mirai
            </p>
            <div className="text-start">
              <p>
                price <span className="font-bold">$45,500*</span>
              </p>
              <p>
                mileage <span className="font-bold">32,300 mi</span>
              </p>
              <NavLink to={"/"}>
                <p className="rounded-md text-center w-full border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-light text-[clamp(1rem,_0.2vw,_3rem)]">
                  View
                </p>
              </NavLink>
            </div>
          </div>
        </section>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default MySwiper;
