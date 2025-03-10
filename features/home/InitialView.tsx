"use client";
import ImageRevolver from "@/lib/ui/animation/ImageRevolver";
import Marquee from "./Marquee/MarqueeImages";
import Space from "@/lib/ui/space";
import { motion } from "motion/react";
import { useState } from "react";
import { on } from "events";

export default function InitialView() {
  return (
    <section>
      <TopRightLogo />
      <BigText />
      <Space className="mb-20" />
      <Marquee />
    </section>
  );
}

function TopRightLogo() {
  return (
    <ImageRevolver
      imageSrc="/images/logo.svg"
      text="SCROLL TO VIEW MORE  SRCOLL TO VIEW MORE  "
    />
  );
}

function BigText() {
  //states
  const [onTextHover, setOnTextHover] = useState<boolean>(false);

  //animation
  const boxShadowWidth = 6;
  function Animation(width: number) {
    function shadow() {
      return `${width}px ${width}px black, ${
        width + 1
      }px ${width}px var(--bg-blue-100)`;
    }

    function transition() {
      return { duration: 0.2 };
    }

    return { shadow, transition };
  }
  const bigShadow = Animation(boxShadowWidth).shadow;
  const smallShadow = Animation(Math.floor(boxShadowWidth / 3)).shadow;

  const transition = Animation(boxShadowWidth).transition;
  const variants = {
    big: {
      textShadow: bigShadow(),
      transition: transition(),
    },
    small: {
      textShadow: smallShadow(),
      transition: transition(),
    },
  };

  //component
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover="big"
      transition={{ duration: 1, ease: "anticipate" }}
      onHoverStart={() => setOnTextHover(true)}
      onHoverEnd={() => setOnTextHover(false)}
      className="relative text-white font-amazingSlab text-[50px] xs:text-[60px] sm:text-[100px] md:text-[120px] lg:text-[180px] 
      font-bold 
    flex justify-center items-center flex-col tracking-wide text-center"
    >
      <motion.div variants={variants} animate={onTextHover ? "big" : undefined}>
        {"HEIREACH".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          variants={variants}
          animate={onTextHover ? "small" : undefined}
          className="uppercase font-amazingSlab text-2xl md:text-[50px] 
        font-medium text-center -translate-y-6 w-full
       tracking-[1rem] md:tracking-[3rem] xl:tracking-[6rem]"
        >
          {"Media".split("").map((letter, index) => (
            <motion.span
              key={letter}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.4 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
