"use client";

import CustomSection from "@/lib/ui/customSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const serviceDetails = [
  {
    id: 1,
    title: "Digital Marketing",
    images: [
      {
        src: "/images/aboutCompany/dm1.svg",
        hoverSrc: "/images/aboutCompany/dmColor1.svg",
      },
      {
        src: "/images/aboutCompany/dm2.svg",
        hoverSrc: "/images/aboutCompany/dmColor2.svg",
      },
      {
        src: "/images/aboutCompany/dm3.svg",
        hoverSrc: "/images/aboutCompany/dmColor3.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Web & App Development",
    images: [
      {
        src: "/images/aboutCompany/dev.svg",
        hoverSrc: "/images/aboutCompany/devColor.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Market Place & Marketing",
    images: [
      {
        src: "/images/aboutCompany/market.svg",
        hoverSrc: "/images/aboutCompany/marketColor.svg",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce & Marketing",
    images: [
      {
        src: "/images/aboutCompany/content1.svg",
        hoverSrc: "/images/aboutCompany/contentColor1.svg",
      },
      {
        src: "/images/aboutCompany/content2.svg",
        hoverSrc: "/images/aboutCompany/contentColor2.svg",
      },
      {
        src: "/images/aboutCompany/content3.svg",
        hoverSrc: "/images/aboutCompany/contentColor3.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Production",
    images: [
      {
        src: "/images/aboutCompany/content1.svg",
        hoverSrc: "/images/aboutCompany/contentColor1.svg",
      },
      {
        src: "/images/aboutCompany/content2.svg",
        hoverSrc: "/images/aboutCompany/contentColor2.svg",
      },
      {
        src: "/images/aboutCompany/content3.svg",
        hoverSrc: "/images/aboutCompany/contentColor3.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Print Media & Public Relation (PR)",
    images: [
      {
        src: "/images/aboutCompany/content1.svg",
        hoverSrc: "/images/aboutCompany/contentColor1.svg",
      },
      {
        src: "/images/aboutCompany/content2.svg",
        hoverSrc: "/images/aboutCompany/contentColor2.svg",
      },
      {
        src: "/images/aboutCompany/content3.svg",
        hoverSrc: "/images/aboutCompany/contentColor3.svg",
      },
    ],
  },
];
const extendsImage = {
  rest: {
    scaleX: 1,
    transformOrigin: "right",
    boxShadow: "none",
  },
  hover: {
    scaleX: 1.1,
    transformOrigin: "right",
    boxShadow: "-4px 4px 4px 0px #00000040",
  },
};
export default function OurServices() {
  const [contentExtend, setExtend] = useState("rest");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const handleHoverEnd = () => {
    setExtend("rest");
    setHoveredImage(null);
  };
  const handleHoverStart = (id: number) => {
    setExtend("hover");
    setHoveredImage(id);
  };
  return (
    <CustomSection sectionId="our-services">
      <div className="flex flex-col justify-center items-center min-h-[650px] sm:min-h-[1000px] md:min-h-[1000px] lg:min-h-[870px] py-8">
        <div className="pb-32 flex w-full">
          <div className="text-center whitespace-pre-wrap w-full text-lg capitalize font-bold text-[#0066FF] h-[29px]  size-14">
            Our services
          </div>
          <div className="flex gap-5 justify-center text-center whitespace-pre-wrap w-full text-lg capitalize font-bold text-white h-[29px]  size-14">
            View all
            <Image
              src="/images/aboutCompany/arrow.svg"
              alt="arrow"
              width={12}
              height={12}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="pb-56 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:px-20">
          <AnimatePresence mode="wait">
            {serviceDetails.map((service) => (
              <motion.div
                key={service.id}
                id="image-scroll"
                className="flex border-2 border-[#0066FF] rounded-[15px] bg-[#000000] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[400px]   h-[179px] group hover:shadow-[2px_2px_6px_0px_#0066FF]"
                whileHover="hover"
                transition={{ duration: 8, ease: "easeInOut" }}
                initial="rest"
                onHoverStart={() => handleHoverStart(service.id)}
                onHoverEnd={handleHoverEnd}
              >
                <div className="pl-2 md:pl-10 flex justify-center items-center w-full ">
                  <p className="break-words text-white text-lg font-semibold group-hover:text-[#0066FF] w-full text-center">
                    {service.id === 6
                      ? service.title.split("&").map((part, index) => (
                          <span key={index}>
                            {part} {index === 0 && "&"}
                            {index === 0 && <br />}{" "}
                          </span>
                        ))
                      : service.title}{" "}
                  </p>
                </div>
                <motion.div
                  variants={extendsImage}
                  animate={hoveredImage === service.id ? "hover" : "rest"}
                  className="w-full h-[175px] relative"
                >
                  {service.images.map((image, index) => (
                    <Image
                      key={index}
                      src={
                        hoveredImage === service.id ? image.hoverSrc : image.src
                      }
                      alt={`img${index + 1}`}
                      width={
                        hoveredImage === service.id
                          ? index === 0
                            ? 95 + 50
                            : index === 1
                              ? 55 + 30
                              : 27 + 20
                          : index === 0
                            ? 95
                            : index === 1
                              ? 55
                              : 27
                      }
                      height={175}
                      className="object-cover h-[175px] rounded-tr-[15px] rounded-br-[15px] absolute right-0 group-hover:shadow-[-4px_4px_4px_0px_#00000040]"
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </CustomSection>
  );
}
