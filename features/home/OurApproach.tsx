"use client";

import CustomSection from "@/lib/ui/customSection";
import style from "./index.module.css";
import classnames from "@/lib/function/classnames";
import Image from "next/image";

const Tail = ({ deg, width, position, style }: any) => {
  const transformStyle = position
    ? `rotate(${deg}deg) translate(${position.left}, ${position.top})`
    : `rotate(${deg}deg)`;

  return (
    <div
      className="h-0 border-t-4 border-dashed border-white"
      style={{
        transform: transformStyle,
        width: width,
        ...style,
      }}
    ></div>
  );
};

const Head = ({ deg, position }: any) => {
  return (
    <div
      className="w-0 h-0 border-l-[11px] border-r-[11px] border-b-[32.6px] border-l-transparent border-r-transparent border-b-white-500"
      style={{
        transform: `rotate(${deg}deg) translate(${position?.left}, ${position?.top})`,
      }}
    ></div>
  );
};

const InfoCard = ({ src, heading, content, reverse = false }: any) => {
  return (
    <div>
      {!reverse && (
        <div className="relative w-full h-60">
          <Image
            src={src}
            alt="Side Graphic Bottom Right"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      <div>
        <div className={classnames(style.h1, "flex justify-center")}>
          {heading}
        </div>
        <div
          className={classnames(
            style.h4,
            "whitespace-pre-wrap text-center max-w-72"
          )}
        >
          {content}
        </div>
      </div>
      {reverse && (
        <div className="relative w-full h-60">
          <Image
            src={src}
            alt="Side Graphic Bottom Right"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default function OurApproach() {
  return (
    <CustomSection sectionId="our-approach-side">
      <div className="flex justify-center p-20 space-4">
        <div className="flex flex-col justify-center items-center ">
          <Tail deg={90} width={"98px"} style={{ height: "10px" }} />
          <InfoCard
            src={"/images/aboutCompany/contentColor1.svg"}
            heading="Discovery"
            content="We dive deep into understanding your brand essence, mission &
                  vision."
          />
        </div>
        <div className="mt-24">
          <Tail
            deg={90}
            width={"65px"}
            position={{ left: "-3em", top: "-6em" }}
          />
          <Head deg={180} position={{ left: "-117px", top: "14px" }} />
          <InfoCard
            src={"/images/aboutCompany/contentColor1.svg"}
            heading="Strategy"
            content="We craft bespoke strategies that position your brand as a market leader."
          />
        </div>

        <div className="mt-24">
          <Tail
            deg={90}
            width={"65px"}
            position={{ left: "-3em", top: "-6em" }}
          />
          <Head deg={180} position={{ left: "-117px", top: "14px" }} />
          <InfoCard
            src={"/images/aboutCompany/contentColor1.svg"}
            heading="Execution"
            content="We bring ideas to life with stunning visuals, compelling content & data-backed campaigns."
          />
        </div>

        <div className="mt-24">
          <Tail
            deg={90}
            width={"65px"}
            position={{ left: "-3em", top: "-6em" }}
          />
          <Head deg={180} position={{ left: "-117px", top: "14px" }} />
          <InfoCard
            src={"/images/aboutCompany/contentColor1.svg"}
            heading="Optimization"
            content="We analyze, refine & elevate performance to ensure long-term success."
          />
          <Tail
            deg={90}
            width={"60px"}
            position={{ left: "2em", top: "-6em" }}
          />
          <div className="relative w-full h-10 mt-20">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
