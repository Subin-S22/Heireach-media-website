"use client";

import CustomSection from "@/lib/ui/customSection";
import classnames from "@/lib/function/classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InfoCardProps {
  src: string;
  heading: string;
  content: string;
}

const InfoCard = ({ src, heading, content }: InfoCardProps) => {
  return (
    <div className="p-5">
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
        <div className={classnames("flex justify-center")}>{heading}</div>
        <div className={classnames("whitespace-pre-wrap text-center max-w-72")}>
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
        <div
          id="our-approach"
          className="flex flex-wrap justify-center p-20 space-4"
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
