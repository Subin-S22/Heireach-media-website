"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import classnames from "@/lib/function/classnames";
import CustomSection from "@/lib/ui/customSection";

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
    <div className="relative">
      <CustomSection sectionId="company-description-side-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "anticipate" }}
          // className="flex justify-center items-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] px-4 sm:px-6 lg:px-7"
          className="p-10 px-12 md:px-36 pb-20 pt-36"
        >
          <div id="company-description" className="w-full">
            <div className="flex items-center justify-start gap-4 ">
              <div className="font-amazingSlab font-extrabold text-4xl py-2 z-10">
                At
                <span
                  className={
                    "text-[var(--bg-blue-100)] w-full whitespace-pre-wrap px-8"
                  }
                >
                  HEIREACH MEDIA
                </span>
              </div>
            </div>

            <div
              className={classnames(
                "flex text-[var(--bg-blue-100)] text-xl font-amazingSlab font-bold"
              )}
            >
              WE DON&apos;T JUST MARKET BRANDS - WE BRING THEIR STORIES TO LIFE
            </div>

            <div
              className={
                "text-[var(--bg-grey-100)] text-base font-amazingSlab py-4"
              }
            >
              Our mission is simple yet powerful
            </div>

            <div className={"text-white text-base font-amazingSlab py-2"}>
              To craft innovative, customized solutions that align with your
              goals and position your brand at the forefront of the market. With
              a team of creative visionaries, state-of-the-art tools, and an
              unwavering passion for excellence,
            </div>

            <div className="w-full h-[auto]">
              <div
                className={classnames(
                  "text-[var(--bg-blue-100)] text-xl font-bold mb-2 font-amazingSlab pt-2 pb-4"
                )}
              >
                We ensure your brand not only stands out but shines.
              </div>
            </div>
            <div
              className={classnames("text-white text-base font-amazingSlab")}
            >
              We believe every brand has a unique story to tell, & our job is to
              amplify it in a way that captivates and inspires. By combining
              creativity with strategy, we turn challenges into opportunities
              and ideas into impactful campaigns that deliver results. Whether
              you&apos;re looking to redefine your identity or expand your
              market reach, we&apos;re here to make it happen with passion and
              precision.
            </div>
          </div>
        </motion.div>
      </CustomSection>
    </div>
  );
}
