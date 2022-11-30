import React, { useState } from "react";
import BackgroundTechnology from "../assets/img/background-technology.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, EffectFade } from "swiper";
import { SliderTechnology } from "../data/SliderTechnology";
import {motion} from "framer-motion"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Technology() {
  const [firstSwiper, setFirstSwiper] = useState();
  const [secondSwiper, setSecondSwiper] = useState();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7}}
    className="relative w-full">
      <div className="fixed w-screen h-screen overflow-hidden top-0 left-0 -z-[999]">
        <img
          src={BackgroundTechnology}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center md:justify-start gap-4 md:pt-10 lg:pt-[76px] pb-8 md:pb-[60px] container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <span className="font-barlow-condensed font-bold text-white/25 text-base md:text-xl lg:text-[28px] text-start tracking-widest">
          03
        </span>
        <span className="font-barlow-condensed font-normal text-white text-base md:text-xl lg:text-[28px] text-start uppercase tracking-widest">
          Space Launch 101
        </span>
      </div>

      <div className="w-screen grid lg:grid-cols-2 container mx-auto gap-4 lg:pl-14 xl:pl-20 lg:py-20 xl:pb-20 xl:pt-0">
        <Swiper
          modules={[Pagination, Controller, EffectFade]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={40}
          loop
          loopFillGroupWithBlank
          pagination={pagination}
          effect={"fade"}
          className="mySwiperTechnology w-full lg:order-last"
        >
          {SliderTechnology.length &&
            SliderTechnology.map((slide, i) => (
              <SwiperSlide
                key={i}
                className="w-full flex flex-col items-center text-center mb-16 lg:mb-0"
              >
                <div className="mb-8 xl:mb-0 w-full h-56 md:h-80 lg:h-[400px] xl:h-[500px] lg:w-3/4 flex flex-col items-center justify-center overflow-hidden">
                  <img src={slide.img} alt="" className="w-full h-full object-cover object-bottom" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
          modules={[Pagination, Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={40}
          loop
          loopFillGroupWithBlank
          pagination={pagination}
          className="mySwiperTechnologyText w-full px-6 lg:px-0 relative"
        >
          {SliderTechnology.length &&
            SliderTechnology.map((slide, i) => (
              <SwiperSlide
                key={i}
                className="w-full flex flex-col items-center lg:items-start font-normal text-center lg:text-start mt-6 xl:mt-20"
              >
                <span className="font-barlow-condensed text-lilac text-sm md:text-base uppercase">
                  {slide.title}
                </span>
                <h3 className="font-bellefair text-2xl md:text-[40px] text-white uppercase pt-2 md:pt-4 pb-4">
                  {slide.subtitle}
                </h3>
                <p className="font-barlow text-sm md:text-base text-lilac tracking-wide leading-relaxed break-normal md:px-32 lg:px-0 xl:pr-20">
                  {slide.description}
                </p>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
