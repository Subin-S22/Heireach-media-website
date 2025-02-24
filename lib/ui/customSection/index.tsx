"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  sectionId: string;
}

export default function CustomSection({ children, sectionId }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight - 100 && rect.bottom > 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id={sectionId} className="min-h-96 relative">
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[300px]"
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        id="custom-section"
      >
        <Image
          src="/images/aboutCompany/rectangle1.svg"
          alt="rectangle1"
          layout="fill"
          className="-z-10"
        />
      </motion.div>
      {children}
      <motion.div
        className="absolute bottom-0 right-0 w-[200px] h-[300px]"
        initial={{ x: 100, opacity: 0 }}
        animate={
          isVisible
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }
            : { x: 100, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/aboutCompany/rectangle2.svg"
          alt="rectangle2"
          layout="fill"
          className="-z-10"
        />
      </motion.div>
    </div>
  );
}
