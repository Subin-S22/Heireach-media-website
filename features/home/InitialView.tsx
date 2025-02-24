import { MotionConfig } from "motion/react";
import Image from "next/image";
import { motion } from "motion/react";
import ImageRevolver from "@/lib/ui/animation/ImageRevolver";

export default function InitialView() {
  return (
    <section>
      <TopRightLogo />
      <BigText />
    </section>
  );
}

function TopRightLogo() {
  return (
    <ImageRevolver
      imageSrc="/images/logo.svg"
      text="SCROLL TO VIEW MORE  SRCOLL TO VIEW MORE  "
    />
  );
}

function BigText() {
  return (
    <div
      className="font-courier text-[80px] md:text-[150px] lg:text-[200px] font-bold text-center 
    flex justify-center items-center flex-col tracking-wide"
    >
      <span>HEIREACH</span>
      <span
        className="font-courier text-2xl md:text-[100px] font-semibold text-center -translate-y-8
       tracking-[1rem]"
      >
        Media
      </span>
    </div>
  );
}
