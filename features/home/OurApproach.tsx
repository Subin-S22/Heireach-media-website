"use client";

import CustomSection from "@/lib/ui/customSection";
// import style from "./index.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/lib/ui/heading";

const InfoCard = ({ src, heading, content }: any) => {
  return (
    <div id="our-approach">
      <div
        className="relative w-full h-48 mt-6 overflow-hidden rounded-2xl bg-white"
        style={{
          border: "2px solid var(--bg-blue-100)",
        }}
      >
        <Image
          src={src}
          alt="Side Graphic Bottom Right"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <div className="flex justify-center font-amazingSlab text-2xl font-bold my-2">
          {heading}
        </div>
        <div className="whitespace-pre-wrap text-center max-w-72 font-amazingSlab text-base font-normal ">
          {content}
        </div>
      </div>
    </div>
  );
};

const infoCards = [
  {
    src: "/images/approach/Discovery.svg",
    heading: "Discovery",
    content:
      "We dive deep into understanding your brand essence, mission & vision.",
  },
  {
    src: "/images/approach/Strategy.svg",
    heading: "Strategy",
    content:
      "We craft bespoke strategies that position your brand as a market leader.",
  },
  {
    src: "/images/approach/Execution.svg",
    heading: "Execution",
    content:
      "We bring ideas to life with stunning visuals, compelling content & data-backed campaigns.",
  },
  {
    src: "/images/approach/Optimization.svg",
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
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "anticipate" }}
      >
        <div id="our-approach" className="flex w-full mb-20">
          <div
            className="text-center 
          font-amazingSlab
          whitespace-pre-wrap w-full text-lg capitalize font-bold text-[#0066FF] h-[29px]  size-14"
          >
            <Header name="Our approach" type="h2" />
            {/* Our approach */}
          </div>
          <div className="flex gap-5 justify-center text-center whitespace-pre-wrap w-full text-lg capitalize font-bold text-white h-[29px]  size-14"></div>
        </div>
        <div className="relative mb-24 my-4 h-[500px] w-full lg:block hidden">
          <Image
            src={"/images/OurApproachsvg.svg"}
            alt="Our approach"
            layout="fill"
            objectFit="contain"
          />
          {/* <div className="h-28 w-28 right-[136px] -bottom-28 absolute">
            <Image
              src="/Layer.svg"
              alt="layer"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
        </div>

        <div
          id="our-approach"
          className="flex flex-wrap gap-8 justify-center px-10 py-4 space-4 lg:hidden"
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
