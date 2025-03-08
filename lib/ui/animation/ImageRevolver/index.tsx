"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useWindowSize from "@/lib/function/useWindowSize";

interface Props {
  imageSrc: string;
  text: string;
  animationDuration?: number;
}

const ImageRevolver = ({ imageSrc, text, animationDuration = 10 }: Props) => {
  const { width } = useWindowSize();
  const textArray = text.split("");
  const numberOfTextItems = textArray.length;
  const radius = width > 768 ? 50 : 30;

  const angleIncrement = 360 / numberOfTextItems;

  const textVariants = {
    rotate: {
      rotate: 360,
      transition: {
        loop: Infinity,
        repeat: Infinity,
        duration: animationDuration,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-[80px] md:w-[140px] h-[80px] md:h-[140px] ml-auto overflow-hidden rounded-full">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[30px] h-[30px] md:w-[40px] md:h-[40px] overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt="Revolving Image"
          width={30}
          height={30}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        variants={textVariants}
        animate="rotate"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {textArray.map((char, index) => {
          const angle = index * angleIncrement;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.span
              key={index}
              className="tracking-wide font-semibold text-[6px] md:text-[8px] font-amazingSlab"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
                color: "#adadad",
                whiteSpace: "nowrap",
                x: x,
                y: y,
                rotate: `${angle + 90}deg`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImageRevolver;
