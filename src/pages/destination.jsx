import React from "react";
import BackgroundDestination from "../assets/img/background-destination.webp";
import DestinationNavigation from "../components/DestinationNavigation";
import destinations from "../data/SliderDestination.js";
import { motion } from "framer-motion";

export default function Destination() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full"
    >
      <div className="fixed w-screen h-screen overflow-hidden top-0 left-0 -z-[999]">
        <img
          src={BackgroundDestination}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center md:justify-start gap-4 md:pt-10 lg:pt-[76px] pb-8 md:pb-[60px] container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <span className="font-barlow-condensed font-bold text-white/25 text-base md:text-xl lg:text-[28px] text-start tracking-widest">
          01
        </span>
        <span className="font-barlow-condensed font-normal text-white text-base md:text-xl lg:text-[28px] text-start uppercase tracking-widest">
          Pick your destination
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-24 lg:px-14 xl:px-20">
        <DestinationNavigation destinations={destinations} />
      </div>
    </motion.div>
  );
}
