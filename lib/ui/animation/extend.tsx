import { motion } from "motion/react";
import { useState } from "react";
import style from "./extend.module.css";

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
          container
          <motion.div
            animate={hoverEffect.bottom === "extend" ? "hover" : "rest"}
            variants={extendOpacity}
          >
            disappear
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
          container
          <motion.div
            animate={hoverEffect.top === "extend" ? "hover" : "rest"}
            variants={extendOpacity}
          >
            disappear
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
