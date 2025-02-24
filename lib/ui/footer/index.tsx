"use client";

import style from "./index.module.css";
import classnames from "@/lib/function/classnames";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

const personalDetails = [
  { info: "grow@heireachmedia.com", href: "" },
  { info: "heireachmedia", href: "https://www.heireachmedia.com/" },
  { info: "9972772416 / 89784561230", href: "" },
];

const ternsAndConditions = [
  {
    name: "Terms & Conditions",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
];

const redirects = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Let's Connect",
    href: "/lets-connect",
  },
];
interface TypeProps {
  children: React.ReactNode;
  href: string;
}

const Typeography = ({ children, href }: TypeProps) => {
  return (
    <Link href={href} className={classnames(style.font_family, "block")}>
      {children}
    </Link>
  );
};
const PlaneBox = () => {
  return (
    <div
      className={classnames(
        style.bg_white_100,
        "w-full sm:w-[150px] md:w-[150px] lg:w-[200px] h-[100px] sm:h-[150px] md:h-[150px] lg:h-[200px]"
      )}
    />
  );
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("footer-section");
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
    <div id="footer-section" className={"bg-[#121212] px-4 md:px-8"}>
      <div className="grid grid-cols-4 gap-4 auto-rows-auto relative place-content-center">
        {/* <div>
          <motion.div
            className="absolute top-0 left-0 w-[150px] h-[200px]"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/footer/footerRectangle1.svg"
              alt="rectangle1"
              layout="fill"
            />
          </motion.div>
        </div> */}

        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            className="col-span-3 flex flex-wrap gap-4 mt-20"
            transition={{ duration: 2, ease: "anticipate" }}
          >
            {/* Personal Details Section */}
            <div className="flex-1 sm:w-full md:w-auto">
              {personalDetails.map((details, index) => (
                <Typeography key={index} href={details.href}>
                  {details.info}
                </Typeography>
              ))}
              <div className="flex flex-wrap gap-8 sm:flex-col md:flex-row lg:flex-row">
                <Image
                  src="/images/footer/linkedin.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/footer/youtube.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/footer/Vector.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/footer/facebook.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/footer/whatsapp.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Redirects Section */}
            <div className="flex-1 sm:w-full md:w-auto">
              {redirects.map((redirect, index) => (
                <Typeography key={index} href={redirect.href}>
                  {redirect.name}
                </Typeography>
              ))}
            </div>

            {/* Terms and Conditions Section */}
            <div className="flex-1 sm:w-full md:w-auto">
              {ternsAndConditions.map((tnc, index) => (
                <Typeography key={index} href={tnc.href}>
                  {tnc.name}
                </Typeography>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* PlaneBox Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          className="pr-10"
          transition={{ duration: 2, ease: "anticipate" }}
        >
          <PlaneBox />
        </motion.div>
      </div>

      <div className="flex relative justify-center items-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0 100% 0)" }}
            animate={
              isVisible
                ? { opacity: 1, clipPath: "inset(0% 0 0% 0)" }
                : { opacity: 0, clipPath: "inset(0% 0 100% 0)" }
            }
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex-shrink justify-self-center my-20 
            flex flex-col gap-8 justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/footer/footerText1.svg"
                alt="company name"
                width={1000}
                height={180}
                className="justify-self-center"
              />
              <Image
                src="/images/footer/footerText2.svg"
                alt="company name"
                width={250}
                height={45}
                className="w-32 md:w-60 -translate-y-2"
              />
            </div>
            <Image
              src="/images/footer/copyright.svg"
              alt="copyright"
              width={115}
              height={18}
              className="justify-self-center pb-5"
            />
          </motion.div>
        </AnimatePresence>
        {/* <div className="flex-grow w-16">
          <motion.div
            className="absolute bottom-0 right-0 w-[150px] h-[200px]"
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
              src="/images/footer/footerRectangle2.svg"
              alt="rectangle2"
              layout="fill"
            />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}
