"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "@/lib/function/useWindowSize";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sectionId: string;
}

export default function CustomSection({ children, sectionId, ...rest }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
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
  }, [sectionId]);

  return (
    <OverLaySection ref={ref} isInView={isInView} {...rest}>
      {children}
    </OverLaySection>
  );
}

interface OverLayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
}

const OverLaySection = ({ children, ref, isInView, ...rest }: OverLayProps) => {
  const initial = (x: number) => ({ x: x, opacity: 0, width: 0, y: x });
  const { width } = useWindowSize();
  return (
    <div className={`min-h-96 relative ${rest.className}`} ref={ref}>
      <motion.div
        className="absolute top-0 left-0 w-[120px] h-[400px] md:w-[400px] xs:w-[100px] -z-10"
        initial={initial(-100)}
        animate={
          isInView
            ? { x: 20, opacity: 1, width: width > 800 ? 200 : 100 }
            : initial(-100)
        }
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
        className="absolute bottom-0 right-0 w-[120px] h-[400px] md:w-[400px] -z-10"
        initial={initial(100)}
        animate={
          isInView
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
          src="/images/aboutCompany/rectangle2.svg"
          alt="rectangle2"
          layout="fill"
          className="-z-10"
        />
      </motion.div>
    </div>
  );
};
