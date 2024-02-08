import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-400 font-semibold flex overflow-hidden whitespace-nowrap tracking-tighter">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase text-[15vw] leading-none pt-2 pr-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase text-[15vw] leading-none pt-2 pr-10"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
