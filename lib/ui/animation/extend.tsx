import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import style from "./extend.module.css";
import Image from "next/image";

const extend = {
  rest: { height: 400, opacity: 1, backgroundColor: "#A6A6A6" },
  hover: {
    height: 550,
    opacity: 1,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#0066FF",
  },
  shrink: { height: 250, opacity: 0.8, backgroundColor: "#E5E7EB" },
};

const widthExtend = {
  rest: { width: "41%", backgroundColor: "#A6A6A6" },
  hover: { width: "50%", backgroundColor: "#0066FF" },
};

const contentDisappear = {
  rest: { opacity: 1, scale: 1 },
  hover: { opacity: 0, scale: 0 },
};

interface CardItem {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

interface HoverEffectCardsProps {
  cardItems: CardItem[];
}

export default function HoverEffectCards({ cardItems }: HoverEffectCardsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const getCardClass = (index: number, total: number) => {
    if (total === 4) {
      return "w-[40%]";
    }

    if (total > 6 && index >= total - 2) {
      return "w-[41%]";
    }

    return "w-1/3";
  };

  const isLastTwoRows = (index: number, total: number) => {
    return !isMobile && (total === 4 || (total > 6 && index >= total - 2));
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {cardItems.map((item, index) => {
        const dynamicClass = isLastTwoRows(index, cardItems.length)
          ? ""
          : style.card_size;
        const animation = isLastTwoRows(index, cardItems.length)
          ? widthExtend
          : extend;
        return (
          <motion.div
            key={index}
            whileHover="hover"
            initial="rest"
            animate={hoverIndex === index ? "hover" : "rest"}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`${
              style.card_background
            } text-white rounded-lg overflow-hidden shadow-lg ${dynamicClass} ${getCardClass(
              index,
              cardItems.length
            )}`}
            variants={animation}
          >
            <motion.div className="p-6 flex  flex-col h-full">
              <div
                className={`flex gap-4 h-full ${
                  isLastTwoRows(index, cardItems.length)
                    ? "flex-row"
                    : "flex-col"
                }`}
              >
                <div>
                  <h3 className="lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <motion.p
                    className="text-white mb-4 lg:text-base md:text-sm xs:text-sm"
                    dangerouslySetInnerHTML={{
                      __html:
                        hoverIndex !== index
                          ? item.description
                          : item.longDescription,
                    }}
                  />
                  <motion.span
                    className="text-white lg:text-base md:text-sm xs:text-sm cursor-pointer"
                    variants={contentDisappear}
                  >
                    More...
                  </motion.span>
                </div>
                <motion.div
                  className={`mt-auto w-full h-[207px] relative self-end ${
                    isLastTwoRows(index, cardItems.length) &&
                    hoverIndex == index
                      ? "w-[700px] "
                      : "w-full"
                  }`}
                  variants={contentDisappear}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
