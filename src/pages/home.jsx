import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundHomeMobile from "../assets/img/background-home.webp";
import BackgroundHomeTablet from "../assets/img/background-home-tablet.webp";
import BackgroundHomeDesktop from "../assets/img/background-home-desktop.webp";

export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7}}
    className="relative w-full">
      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-[999]">
        <img
          src={BackgroundHomeMobile}
          alt=""
          className="md:hidden h-full w-full object-cover"
        />
        <img
          src={BackgroundHomeTablet}
          alt=""
          className="hidden md:block lg:hidden h-full w-full object-cover"
        />
        <img
          src={BackgroundHomeDesktop}
          alt=""
          className="hidden lg:block h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-end items-center lg:gap-6 xl:gap-80 pt-12 md:py-20 lg:pt-40 xl:pt-52 lg:pb-0 px-6 md:px-36 lg:px-24 xl:px-36">
        <div className="flex flex-col lg:items-start lg:justify-end lg:self-end lg:h-full lg:w-1/2">
          <span className="font-barlow-condensed font-normal text-base md:text-xl lg:text-2xl xl:text-[28px] text-center lg:text-start text-lilac pb-4 xl:pb-6 tracking-widest uppercase">
            So, you want to travel to
          </span>
          <span className="font-bellefair font-normal text-[80px] md:text-[150px] lg:text-[120px] xl:text-[150px] text-center lg:text-start text-white pb-4 md:pb-6 leading-none uppercase">
            Space
          </span>
          <p className="font-barlow font-normal text-[15px] md:text-base lg:text-sm xl:text-lg text-center lg:text-start text-white tracking-wide leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative mt-20 md:mt-12 lg:mt-0 flex items-center justify-center w-56 md:w-80 h-56 md:h-80 ">
            <motion.div
              animate={{ scale: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bg-white/20 w-full h-full rounded-full -z-[99]"
            ></motion.div>

            <Link to="/destination">
              <div className="flex items-center justify-center bg-white rounded-full w-[150px] md:w-60 h-[150px] md:h-60">
                <span className="font-bellefair font-normal text-xl md:text-[32px] text-center tracking-wider uppercase">
                  Explore
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
