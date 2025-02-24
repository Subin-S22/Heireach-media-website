"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CompanyDescription() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("company-description");
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
    <div id="company-description" className="min-h-96 relative">
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[300px]"
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/aboutCompany/rectangle1.svg"
          alt="rectangle1"
          layout="fill"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, ease: "anticipate" }}
        className="flex justify-center items-center min-h-[650px] px-4"
      >
        <div className="w-full grid gap-4 justify-center items-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[40px] h-[40px] relative">
              <Image
                src="/images/aboutCompany/at.svg"
                className="object-contain"
                alt="at"
                layout="intrinsic"
                width={40}
                height={40}
              />
            </div>
            <div className="w-full h-[auto] relative">
              <Image
                src="/images/aboutCompany/heireach_media.svg"
                className="object-contain"
                alt="Heireach Media"
                layout="intrinsic"
                width={340}
                height={140}
              />
            </div>
          </div>

          <div className="w-full h-[auto]">
            <Image
              src="/images/aboutCompany/description1.svg"
              className="object-contain"
              alt="Heireach Media"
              layout="intrinsic"
              width={870}
              height={30}
            />
          </div>

          <div className="w-full h-[auto]">
            <Image
              src="/images/aboutCompany/description2.svg"
              className="object-contain"
              alt="Heireach Media"
              layout="intrinsic"
              width={310}
              height={22}
            />
          </div>

          <div className="w-full h-[auto]">
            <Image
              src="/images/aboutCompany/description3.svg"
              className="object-contain"
              alt="Heireach Media"
              layout="intrinsic"
              width={1070}
              height={44}
            />
          </div>

          <div className="w-full h-[auto]">
            <Image
              src="/images/aboutCompany/description4.svg"
              className="object-contain"
              alt="Heireach Media"
              layout="intrinsic"
              width={650}
              height={30}
            />
          </div>

          <div className="w-full h-[auto]">
            <Image
              src="/images/aboutCompany/description5.svg"
              className="object-contain"
              alt="Heireach Media"
              layout="intrinsic"
              width={1070}
              height={88}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-[200px] h-[400px]"
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
        />
      </motion.div>
    </div>
  );
}
