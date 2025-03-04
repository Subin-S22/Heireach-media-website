"use client";

import CustomSection from "@/lib/ui/customSection";
// import style from "./index.module.css";
import classnames from "@/lib/function/classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InfoCard = ({ src, heading, content }) => {
  return (
    <div className="p-5" id="our-approach">
      <div
        className="relative w-full h-60 mt-6 overflow-hidden rounded-lg"
        style={{
          border: "2px solid var(--bg-blue-100)",
        }}
      >
        <Image
          src={src}
          alt="Side Graphic Bottom Right"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div>
        <div className="flex justify-center font-amazingSlab text-2xl font-extrabold  ">
          {heading}
        </div>
        <div className="whitespace-pre-wrap text-center max-w-72 font-amazingSlab text-l font-bold ">
          {content}
        </div>
      </div>
    </div>
  );
};

const infoCards = [
  {
    src: "/images/aboutCompany/contentColor1.svg",
    heading: "Discovery",
    content:
      "We dive deep into understanding your brand essence, mission & vision.",
  },
  {
    src: "/images/aboutCompany/contentColor1.svg",
    heading: "Strategy",
    content:
      "We craft bespoke strategies that position your brand as a market leader.",
  },
  {
    src: "/images/aboutCompany/contentColor1.svg",
    heading: "Execution",
    content:
      "We bring ideas to life with stunning visuals, compelling content & data-backed campaigns.",
  },
  {
    src: "/images/aboutCompany/contentColor1.svg",
    heading: "Optimization",
    content:
      "We analyze, refine & elevate performance to ensure long-term success.",
  },
];

export default function OurApproach() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("our-approach");
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
    <CustomSection sectionId="our-approach-side">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, ease: "anticipate" }}
      >
        <div id="our-approach" className="pb-24 flex w-full">
          <div className="text-center whitespace-pre-wrap w-full text-lg capitalize font-bold text-[#0066FF] h-[29px]  size-14">
            Our approach
          </div>
          <div className="flex gap-5 justify-center text-center whitespace-pre-wrap w-full text-lg capitalize font-bold text-white h-[29px]  size-14"></div>
        </div>
        <div className="relative my-24 h-96 w-full lg:block hidden">
          <Image
            src={"/images/OurApproachsvg.svg"}
            alt="Our approach"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          id="our-approach"
          className="flex flex-wrap justify-center p-20 space-4 lg:hidden block"
        >
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              src={card.src}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </motion.div>
    </CustomSection>
  );
}
