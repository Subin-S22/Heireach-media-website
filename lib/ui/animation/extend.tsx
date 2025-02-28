import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import style from "./extend.module.css";

const extend = {
  rest: { height: 300, opacity: 1, backgroundColor: "#F3F4F6" },
  hover: { height: 400, opacity: 1, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", backgroundColor: "#0066FF" },
  shrink: { height: 250, opacity: 0.8, backgroundColor: "#E5E7EB" },
};

const contentDisappear = {
  rest: { opacity: 1 },
  hover: { opacity: 0 },
};

export default function HoverEffectCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const cardItems = [
    { title: "Branding", description: "A strong <strong>Brand Identity</strong> sets you apart in a competitive market." },
    { title: "SEO & Marketing", description: "Our SEO Strategies drive organic traffic, improve Google rankings, and enhance visibility." },
    { title: "Retargeting", description: "We implement Strategic Retargeting campaigns to reconnect with potential customers." },
    { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
    { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
    { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
    { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
    { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
  ];

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
    <div className="flex flex-wrap gap-6 justify-center">
      {cardItems.map((item, index) => {
        const dynamicClass = isLastTwoRows(index, cardItems.length) ? "" : style.card_size;
        return (
          <motion.div
            key={index}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`${style.card_background} rounded-lg overflow-hidden shadow-lg ${dynamicClass} ${getCardClass(index, cardItems.length)}`}
            variants={extend}
          >
            <motion.div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <motion.p
                className="text-gray-600 mb-4"
                variants={contentDisappear}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <motion.span className="text-blue-500 underline cursor-pointer" variants={contentDisappear}>
                More...
              </motion.span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
