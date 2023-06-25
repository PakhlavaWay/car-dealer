import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MyButton from "../../UI/MyButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { NavLink } from "react-router-dom";

const MySwiper = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]} 
    direction={"horizontal"}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation={true}
    >
      <SwiperSlide>
        0
      </SwiperSlide>
      <SwiperSlide>
        1
      </SwiperSlide>
      <SwiperSlide>
        2
      </SwiperSlide>
      <SwiperSlide>
        3
      </SwiperSlide>
      <SwiperSlide>
        4
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
