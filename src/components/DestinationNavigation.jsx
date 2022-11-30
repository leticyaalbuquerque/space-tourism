import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DestinationNavigation(props) {
  const destinations = props.destinations;
  const [activeNavigationIndex, setActiveNavigation] = useState(0);
  const selectedDestination = destinations[activeNavigationIndex];
  const transition = { duration: 0.5, type: "spring" };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:gap-16 pb-16">
      <motion.div
        key={activeNavigationIndex}
        animate={{ translateY: [-40, 0], opacity: [0, 1] }}
        transition={{ ...transition, repeatType: "loop" }}
        className="w-1/2 h-[250px] lg:h-full overflow-hidden mb-6 md:my-[60px]"
      >
        <img
          src={selectedDestination.img}
          alt=""
          className="w-full h-full lg:w-[450px] lg:h-[450px] object-contain"
        />
      </motion.div>

      <div className="flex flex-col items-center lg:items-start lg:justify-start lg:w-1/2">
        <ul className="flex gap-8 h-9">
          {destinations.map((item, i) => {
            const isActive = activeNavigationIndex === i;
            return (
              <li
                key={i}
                onClick={() => setActiveNavigation(i)}
                className={`font-barlow-condensed font-normal text-base text-center uppercase cursor-pointer tracking-widest ${
                  isActive
                    ? "border-b-4 border-solid border-white text-white"
                    : "text-lilac hover:lg:border-solid hover:lg:border-b-4 hover:lg:border-white/50 hover:transition-all hover:duration-300"
                }`}
              >
                {item.title}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col w-full items-center lg:items-start gap-1 md:gap-2 pt-5 md:pt-8">
          <h2 className="font-bellefair font-normal text-center lg:text-start text-[56px] md:text-[80px] lg:text-[100px] text-white uppercase">
            {selectedDestination.title}
          </h2>
          <p className="font-barlow font-normal text-center lg:text-start text-base lg:text-lg text-lilac tracking-wide leading-relaxed">
            {selectedDestination.description}
          </p>

          <hr className="border-dark-gray my-8 w-full" />

          <div className="flex flex-col md:flex-row md:gap-24">
            <div className="flex flex-col items-center lg:items-start gap-3 pb-8">
              <span className="font-barlow-condensed font-normal text-center lg:text-start text-sm text-lilac uppercase tracking-widest">
                Avg. Distance
              </span>
              <span className="font-bellefair font-normal text-center lg:text-start text-[28px] text-white uppercase">
                {selectedDestination.distance}
              </span>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="font-barlow-condensed font-normal text-center lg:text-start text-sm text-lilac uppercase tracking-widest">
                Est. travel time
              </span>
              <span className="font-bellefair font-normal text-center lg:text-start text-[28px] text-white uppercase">
                {selectedDestination.days}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
