"use client";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import useWindowSize from "@/lib/function/useWindowSize";
const extend = {
  rest: {
    opacity: 0,
    x: 200,
  },
  hover: {
    opacity: 1,
    x: -15,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};
const extendsImage = {
  rest: {
    x: 0,
  },
  hover: {
    x: -10,
  },
};

type Extend = "hover" | "rest";
type Index = "0" | "1" | "2" | "3";

type Content = `${Extend}-${Index}`;

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [contentExtend, setExtend] = useState<Content>("rest-0");
  const { width } = useWindowSize();
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us-section");
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

  const animateExtend = (type: Content, index: number) => {
    const [typeName, indexNumber] = type.split("-");
    const num = Number(indexNumber);
    if (num === index) {
      return typeName;
    }
    return "rest";
  };

  const initial = (x: number) => ({ x: x, opacity: 0, width: 0, y: x });

  return (
    <section
      id="about-us-section"
      className="relative bg-[#0a0a0a] text-white py-16 px-4 md:px-0 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px]"
        initial={initial(-100)}
        animate={
          isVisible
            ? { x: 20, opacity: 1, width: width > 800 ? 200 : 100 }
            : initial(-100)
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          className="h-auto"
          src="/images/AboutUsTopLeft.svg"
          alt="Side Graphic Top Left"
          layout="fill"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px]"
        initial={initial(100)}
        animate={
          isVisible
            ? {
                x: -20,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
                width: width > 800 ? 200 : 100,
              }
            : initial(100)
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/AboutUsBootomRight.svg"
          alt="Side Graphic Bottom Right"
          layout="fill"
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <h2
          className={`text-[32px] md:mx-[3rem] lg:mx-[auto] mx-auto 
            max-w-[913px] font-amazingSlab xs:text-center font-bold 
            text-primary_text transition-opacity duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          Why Choose Us?
        </h2>

        <p
          className={`mt-4 text-lg md:mx-[3rem] lg:mx-[auto] 
            font-amazingSlab max-w-[913px] xs:text-center leading-[22.5px] 
            mx-auto transition-opacity duration-700 delay-150 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          At Heireach Media, we don&apos;t just execute marketing—we craft
          strategic, data-driven roadmaps that position your brand for long-term
          success & market dominance. We analyze, innovate & implement solutions
          that ensure brand stability, scalability & impact.
        </p>

        <div className="mt-12 flex flex-wrap xs:flex-col gap-7 justify-center items-center">
          {features.map((feature, index) => (
            <Fragment key={feature.title}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  className={`flex flex-col sm:basis-1/3 xl:basis-1/5 items-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  key={feature.title}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  whileHover="hover"
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  initial="rest"
                  onHoverStart={() => {
                    setExtend(`hover-${index}` as Content);
                  }}
                  onHoverEnd={() => setExtend(`rest-${index}` as Content)}
                >
                  <div className="flex">
                    <motion.div
                      layout
                      variants={extendsImage}
                      animate={animateExtend(contentExtend, index)}
                      className="relative w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] mb-4 bg-[#D6D6D6] rounded-[5px] shrink-0 z-[2]"
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </motion.div>
                    <motion.div
                      className={`w-[250px] h-[120px] lg:w-[280px] lg:h-[140px] 
                        flex items-center bg-primary_text text-center 
                        rounded-r-md rounded-b-md text-sm p-4 z-[1] font-amazingSlab ${
                          contentExtend === `hover-${index}`
                            ? "block"
                            : "hidden"
                        }`}
                      variants={extend}
                      animate={animateExtend(contentExtend, index)}
                      exit={{ opacity: 0, x: -200, scale: 0 }}
                    >
                      {feature.description}
                    </motion.div>
                  </div>
                  <h3 className="font-bold font-amazingSlab leading-[25px] text-xl">
                    {feature.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
const features = [
  {
    title: "Creative Expertise",
    icon: "/images/Creative-Expertise.svg",
    description:
      "We Innovate, Create & Elevate ideas into Powerful Brand Experiences, blending Strategy, Innovation & Storytelling to create Marketing that Stands Out & Delivers Results.",
  },
  {
    title: "Client Focused",
    icon: "/images/Client-Focused.svg",
    description:
      "Your success is our priority. We believe in Collaboration, Transparency & Personalized Solutions that align with your Business Goals & Audience Needs.",
  },

  {
    title: "Proven Results",
    icon: "/images/Proven-Result.svg",
    description:
      "With a track record of High-Performance Campaigns & Measurable Success, we ensure Brand Visibility,Engagement & Tangible ROI.",
  },

  {
    title: "One Stop-Shop",
    icon: "/images/One-stop-shop.svg",
    description:
      "From Branding & Digital Marketing to Web Development & Traditional Advertising, we offer Integrated,Full-Scale Marketing Solutions—all under One Roof.",
  },
];
