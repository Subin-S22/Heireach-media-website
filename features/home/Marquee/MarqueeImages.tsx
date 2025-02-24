"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

import "./marquee.css";
import { Figma } from "./Brands/Brands";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      {/* <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className=" relative w-[100vw] h-20 flex"></h1>
        </motion.div>
      </div> */}
      <div id="marquee">
        <div className="marquee-container">
          <Figma />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
