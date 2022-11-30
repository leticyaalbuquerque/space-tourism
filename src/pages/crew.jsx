import React, { useState } from "react";
import BackgroundCrew from "../assets/img/background-crew.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper";
import { SliderCrew } from "../data/SliderCrew";
import {motion} from "framer-motion"

import "swiper/css";
import "swiper/css/pagination";

export default function Crew() {
  const [firstSwiper, setFirstSwiper] = useState();
  const [secondSwiper, setSecondSwiper] = useState();

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7}}
    >
      <div className="fixed w-screen h-screen overflow-hidden top-0 left-0 -z-[999]">
        <img
          src={BackgroundCrew}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center md:justify-start gap-4 md:pt-10 lg:pt-[76px] pb-8 md:pb-[60px] container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <span className="font-barlow-condensed font-bold text-white/25 text-base md:text-xl lg:text-[28px] text-start tracking-widest">
          02
        </span>
        <span className="font-barlow-condensed font-normal text-white text-base md:text-xl lg:text-[28px] text-start uppercase tracking-widest">
          Meet your crew
        </span>
      </div>

      <div className="w-screen grid lg:grid-cols-2 container mx-auto lg:px-20">
        <div className="flex flex-col order-last md:order-none items-center lg:items-start justify-center lg:justify-start mt-8 md:mt-0 lg:mt-20 xl:mt-[154px]">
          <Swiper
            modules={[Pagination, Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            loopFillGroupWithBlank
            pagination={{
              clickable: true,
            }}
            className="swiperDescription flex flex-col w-screen lg:w-full"
          >
            {SliderCrew.length &&
              SliderCrew.map((slide, i) => (
                <SwiperSlide key={i} className="flex flex-col items-center lg:items-start w-screen md:mb-10 lg:mb-20">
                  <span className="font-bellefair font-normal text-center lg:text-start text-white/50 text-base md:text-2xl lg:text-xl xl:text-[28px] uppercase">
                    {slide.office}
                  </span>
                  <h3 className="font-bellefair font-normal text-center lg:text-start text-white text-2xl md:text-[40px] lg:text-4xl xl:text-[50px] uppercase pt-2 lg:pt-4 pb-4 lg:pb-7">
                    {slide.name}
                  </h3>
                  <p className="font-barlow font-normal text-center lg:text-start text-lilac text-sm md:text-base xl:text-lg leading-relaxed tracking-wider px-6 md:px-32 lg:px-0">
                    {slide.description}
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <Swiper
          modules={[Pagination, Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          slidesPerView={1}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank
          pagination={{
            clickable: true,
          }}
          className="mySwiper w-screen lg:w-full h-full"
        >
          {SliderCrew.length &&
            SliderCrew.map((slide, i) => (
              <SwiperSlide
                key={i}
                className="w-full h-[300px] md:h-[400px] lg:h-[540px] xl:h-[600px] flex flex-col items-center overflow-hidden relative mb-16 md:mb-0 md:mt-10 lg:mt-0 md:border-none border-b-2 border-dark-gray"
              >
                <img
                  src={slide.img}
                  alt=""
                  className="relative md:absolute bottom-0 w-full h-full xl:h-[95%] object-contain"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
