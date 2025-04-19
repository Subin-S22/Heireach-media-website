"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

type TEffect = "extend" | "shrink";
interface THoverEffect {
  top: TEffect | null;
  bottom: TEffect | null;
}

interface ServiceCardProps extends THoverEffect {
  title: string;
  partialContent: string;
  fullContent: string;
  image: string;
  widthExtendOpacity: {
    rest: { opacity: number; width: number; scale: number };
    hover: { opacity: number; width: number; scale: number };
  };
}

interface ServiceJsonCard {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

const duration = 0.5;
// const serviceContent = DigiContent.services[0].cardData;

export default function ServiceContainerRow({
  serviceContent,
}: {
  serviceContent: ServiceJsonCard[];
}) {
  const [hoverEffect, setHoverEffect] = useState<THoverEffect>({
    top: null,
    bottom: null,
  });

  const originalWidth = 500;
  const widthChange = 150;
  const height = 250;

  const widthExtend = {
    rest: {
      width: originalWidth,
      height: height,
      backgroundColor: "#A6A6A6",
    },
    hover: {
      width: originalWidth + widthChange,
      height: height,
      backgroundColor: "#0066FF",
    },
  };

  const widthExtendOpacity = {
    rest: { opacity: 1, width: originalWidth, scale: 1 },
    hover: { opacity: 0, width: 0, scale: 0 },
  };

  const widthShrink = {
    rest: {
      width: originalWidth - widthChange,
      height: height,
      backgroundColor: "#A6A6A6",
    },
    hover: {
      width: originalWidth,
      height: height,
      backgroundColor: "#0066FF",
    },
  };
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="flex flex-row justify-center flex-wrap gap-8"
    >
      {serviceContent[0] ? (
        <motion.div
          variants={hoverEffect.bottom === "extend" ? widthShrink : widthExtend}
          animate={hoverEffect.top === "extend" ? "hover" : "rest"}
          transition={{ duration: duration }}
          className={`bg-primary_text max-w-[36rem]  rounded-2xl`}
          onHoverStart={() =>
            setHoverEffect({ top: "extend", bottom: "shrink" })
          }
          onClick={() => {
            if (hoverEffect.top === "extend") {
              setHoverEffect({ top: "shrink", bottom: "shrink" });
            } else {
              setHoverEffect({ top: "extend", bottom: "shrink" });
            }
          }}
          onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
        >
          <ServiceCardRow
            title={serviceContent[0].title}
            top={hoverEffect.top}
            bottom={hoverEffect.bottom}
            partialContent={serviceContent[0].description}
            fullContent={serviceContent[0].longDescription}
            image={serviceContent[0].image}
            widthExtendOpacity={widthExtendOpacity}
          />
        </motion.div>
      ) : null}
      {serviceContent[1] ? (
        <motion.div
          variants={hoverEffect.top === "extend" ? widthShrink : widthExtend}
          animate={hoverEffect.bottom === "extend" ? "hover" : "rest"}
          transition={{ duration: duration }}
          className={`bg-primary_text max-w-[36rem]  rounded-2xl`}
          onHoverStart={() =>
            setHoverEffect({ top: "shrink", bottom: "extend" })
          }
          onClick={() => {
            if (hoverEffect.bottom === "extend") {
              setHoverEffect({ top: "shrink", bottom: "shrink" });
            } else {
              setHoverEffect({ top: "shrink", bottom: "extend" });
            }
          }}
          onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
        >
          <ServiceCardRow
            title={serviceContent[1].title}
            top={hoverEffect.bottom}
            bottom={hoverEffect.top}
            partialContent={serviceContent[1].description}
            fullContent={serviceContent[1].longDescription}
            image={serviceContent[1].image}
            widthExtendOpacity={widthExtendOpacity}
          />
        </motion.div>
      ) : null}
    </motion.div>
  );
}

const ServiceCardRow = ({
  title,
  top,
  bottom,
  partialContent,
  fullContent,
  image,
  widthExtendOpacity,
}: ServiceCardProps) => {
  return (
    <motion.div className="flex justify-between flex-row h-full p-4">
      <div>
        <h3 className="lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2 text-white">
          {title}
        </h3>
        <motion.p
          className="text-white mb-4 lg:text-base md:text-sm text-sm"
          dangerouslySetInnerHTML={{
            __html: top === "extend" ? fullContent : partialContent,
          }}
        />
      </div>
      <motion.div
        animate={bottom === "extend" ? "hover" : "rest"}
        variants={widthExtendOpacity}
        transition={{ duration: duration }}
        className={`relative w-full h-full p-4`}
      >
        <Image
          src={image}
          alt={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};
