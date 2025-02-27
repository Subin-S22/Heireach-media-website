"use client";

import CustomSection from "@/lib/ui/customSection";
import style from "./index.module.css";
import classnames from "@/lib/function/classnames";
import Image from "next/image";

interface TailProps {
  deg: number;
  width: string;
  position: { left: string; top: string };
}

type HeadProps = Pick<TailProps, "deg" | "position">;

interface InfoCardProps {
  src: string;
  heading: string;
  content: string;
  reverse?: boolean;
}

const Tail = ({ deg, width, position }: TailProps) => {
  const transformStyle = position
    ? `rotate(${deg}deg) translate(${position.left}, ${position.top})`
    : `rotate(${deg}deg)`;

  return (
    <div
      /**TODO hidden for the mobile view */
      className="h-0 border-t-4 border-dashed border-white"
      style={{
        transform: transformStyle,
        width: width,
      }}
    ></div>
  );
};

const Head = ({ deg, position }: HeadProps) => {
  return (
    <div
      className="w-0 h-0 border-l-[11px] border-r-[11px] border-b-[32.6px] border-l-transparent border-r-transparent border-b-white-500"
      style={{
        transform: `rotate(${deg}deg) translate(${position?.left}, ${position?.top})`,
      }}
    ></div>
  );
};

const InfoCard = ({
  src,
  heading,
  content,
  reverse = false,
}: InfoCardProps) => {
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
        <div className={classnames(style.h4, "whitespace-pre-wrap max-w-72")}>
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
        <div className="flex-initial items-center">
          <div className="grid grid-cols-4 gap-4 justify-center items-center">
            <div>
              <Tail
                deg={0}
                width={"300px"}
                position={{ left: "162px", top: "-75px" }}
              />
              <Tail
                deg={90}
                width={"98px"}
                position={{ left: "-32px", top: "-108px" }}
              />
              <InfoCard
                src={"/images/aboutCompany/contentColor1.svg"}
                heading="Discovery"
                content="We dive deep into understanding your brand essence, mission &
                  vision."
              />
              <Head deg={360} position={{ left: "135px", top: "20px" }} />

              <Tail
                deg={0}
                width={"140px"}
                position={{ left: "10px", top: "95px" }}
              />
              <Tail
                deg={90}
                width={"72px"}
                position={{ left: "53px", top: "-110px" }}
              />
            </div>

            <div>
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
                reverse={true}
              />
              <Tail
                deg={90}
                width={"60px"}
                position={{ left: "2em", top: "-130px" }}
              />
              <Tail
                deg={0}
                width={"360px"}
                position={{ left: "9em", top: "4em" }}
              />
            </div>

            <div>
              <Tail
                deg={0}
                width={"325px"}
                position={{ left: "160px", top: "-71px" }}
              />
              <Tail
                deg={90}
                width={"115px"}
                position={{ left: "-16px", top: "-103px" }}
              />
              <InfoCard
                src={"/images/aboutCompany/contentColor1.svg"}
                heading="Execution"
                content="We bring ideas to life with stunning visuals, compelling content & data-backed campaigns."
              />
              <Head deg={0} position={{ left: "155px", top: "0em" }} />
              <Tail
                deg={90}
                width={"72px"}
                position={{ left: "26px", top: "-131px" }}
              />
            </div>

            <div>
              <Head deg={180} position={{ left: "-140px", top: "-1em" }} />
              <Tail
                deg={90}
                width={"123px"}
                position={{ left: "-19px", top: "-123px" }}
              />
              <InfoCard
                src={"/images/aboutCompany/contentColor1.svg"}
                heading="Optimization"
                content="We analyze, refine & elevate performance to ensure long-term success."
                reverse={true}
              />
              <Tail
                deg={90}
                width={"60px"}
                position={{ left: "2em", top: "-7em" }}
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
        </div>
      </div>
    </CustomSection>
  );
}
