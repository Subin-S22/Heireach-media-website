import { MotionConfig } from "motion/react";
import Image from "next/image";
import { motion } from "motion/react";
import ImageRevolver from "@/lib/ui/animation/ImageRevolver";
import Marquee from "./Marquee/MarqueeImages";
import Space from "@/lib/ui/space";

export default function InitialView() {
  return (
    <section>
      <TopRightLogo />
      <BigText />
      <Space className="mb-20" />
      <Marquee />
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
      className="text-white font-amazingSlab text-[50px] md:text-[120px] lg:text-[180px] 
      font-bold 
    flex justify-center items-center flex-col tracking-wide text-center"
    >
      <div>HEIREACH</div>
      <div
        className="uppercase font-amazingSlab text-xl md:text-[40px] 
        font-medium text-center -translate-y-6 w-full
       tracking-[1rem] md:tracking-[3rem] xl:tracking-[6rem]"
      >
        Media
      </div>
    </div>
  );
}
