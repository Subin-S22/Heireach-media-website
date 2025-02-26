import { motion } from "motion/react";
import { useState } from "react";
import style from "./extend.module.css";
import Image from "next/image";

type TEffect = "extend" | "shrink";
interface THoverEffect {
  top: TEffect | null;
  bottom: TEffect | null;
}

const extend = {
  rest: {
    height: 200,
  },
  hover: {
    height: 300,
  },
};
const extendOpacity = {
  rest: { opacity: 1, height: 100 },
  hover: { opacity: 0, height: 0 },
};

const shrink = {
  rest: {
    height: 150,
  },
  hover: {
    height: 300,
  },
};

const serviceContent = [
  {
    firstImage: "/images/services/elements-neo-brutalism-design-template0.svg",
    firstPartialContent:
      "abcalksjdf alksjdfljasldfja sd asdflasjdfa \n\n more...",
    firstFullContent:
      "alasjdklfas dlkjalsdjfkasd flaksjdfjaksdfa sdfjaksdj fkjaslkjdfkajsdkfjasd fasdas dasljd aslkdjasf",
    secondImage: "/images/services/elements-neo-brutalism-design-template1.svg",
    secondPartialContent:
      "abcalksjdf alksjdfljasldfja sd asdflasjdfa \n\n more...",
    secondFullContent:
      "alasjdklfas dlkjalsdjfkasd flaksjdfjaksdfa sdfjaksdj fkjaslkjdfkajsdkfjasd fasdas dasljd aslkdjasf",
  },
];

export default function Extend() {
  const [hoverEffect, setHoverEffect] = useState<THoverEffect>({
    top: null,
    bottom: null,
  });

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="flex flex-col gap-2"
    >
      <motion.div
        variants={hoverEffect.bottom === "extend" ? shrink : extend}
        animate={hoverEffect.top === "extend" ? "hover" : "rest"}
        className={`${style.card_background} ${style.card_size}`}
        onHoverStart={() => setHoverEffect({ top: "extend", bottom: "shrink" })}
        onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
      >
        <motion.div>
          <Image
            src={serviceContent[0].firstImage}
            alt={serviceContent[0].firstImage}
            width={200}
            height={200}
          />
          <motion.div
            animate={hoverEffect.bottom === "extend" ? "hover" : "rest"}
            variants={extendOpacity}
            className="whitespace-pre-line"
          >
            {hoverEffect.top === "extend"
              ? serviceContent[0].firstFullContent
              : serviceContent[0].firstPartialContent}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        whileHover="hover"
        animate={hoverEffect.bottom === "extend" ? "hover" : "rest"}
        variants={hoverEffect.top === "extend" ? shrink : extend}
        className={`${style.card_background} ${style.card_size}`}
        onHoverStart={() => setHoverEffect({ top: "shrink", bottom: "extend" })}
        onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
      >
        <motion.div>
          <Image
            src={serviceContent[0].secondImage}
            alt={serviceContent[0].secondImage}
            width={200}
            height={200}
          />
          <motion.div
            animate={hoverEffect.top === "extend" ? "hover" : "rest"}
            variants={extendOpacity}
            className="whitespace-pre-line"
          >
            {hoverEffect.bottom === "extend"
              ? serviceContent[0].secondFullContent
              : serviceContent[0].secondPartialContent}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
