import { MotionConfig } from "motion/react";
import Image from "next/image";
import { motion } from "motion/react";
import ImageRevolver from "@/lib/ui/animation/ImageRevolver";

export default function InitialView() {
  return (
    <section>
      <TopRightLogo />
      <BigText />
      {/* <MediumText /> */}
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
      className="font-courier text-[80px] md:text-[200px] font-bold text-center 
    flex justify-center items-center flex-col tracking-wide"
    >
      <span>HEIREACH</span>
      <span
        className="font-courier text-2xl md:text-[100px] font-semibold text-center -translate-y-8
       tracking-[4rem]"
      >
        Media
      </span>
    </div>
  );
}

function MediumText() {
  return (
    <div className="font-courier text-[100px] font-semibold text-center">
      Media
    </div>
  );
}
