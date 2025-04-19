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
}

interface ServiceJsonCard {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

const originHeight = 400;
const changeHeight = 200;

const extend = {
  rest: {
    height: originHeight,
    backgroundColor: "#A6A6A6",
  },
  hover: {
    height: originHeight + changeHeight,
    backgroundColor: "#0066FF",
  },
};

const extendOpacity = {
  rest: { opacity: 1, height: changeHeight, scale: 1 },
  hover: { opacity: 0, height: 0, scale: 0 },
};

const shrink = {
  rest: {
    height: originHeight - changeHeight,
    backgroundColor: "#A6A6A6",
  },
  hover: {
    height: originHeight,
    backgroundColor: "#0066FF",
  },
};

// const serviceContent = DigiContent.services[0].cardData;

export default function ServiceContainer({
  serviceContent,
}: {
  serviceContent: ServiceJsonCard[];
}) {
  const [hoverEffect, setHoverEffect] = useState<THoverEffect>({
    top: null,
    bottom: null,
  });

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="flex flex-col gap-2"
    >
      {serviceContent[0] ? (
        <motion.div
          variants={hoverEffect.bottom === "extend" ? shrink : extend}
          animate={hoverEffect.top === "extend" ? "hover" : "rest"}
          className={`bg-primary_text max-w-96 rounded-2xl`}
          onHoverStart={() =>
            setHoverEffect({ top: "extend", bottom: "shrink" })
          }
          onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
        >
          <ServiceCard
            title={serviceContent[0].title}
            top={hoverEffect.top}
            bottom={hoverEffect.bottom}
            partialContent={serviceContent[0].description}
            fullContent={serviceContent[0].longDescription}
            image={serviceContent[0].image}
          />
        </motion.div>
      ) : null}
      {serviceContent[1] ? (
        <motion.div
          variants={hoverEffect.top === "extend" ? shrink : extend}
          animate={hoverEffect.bottom === "extend" ? "hover" : "rest"}
          className={`bg-primary_text max-w-96 rounded-2xl`}
          onHoverStart={() =>
            setHoverEffect({ top: "shrink", bottom: "extend" })
          }
          onHoverEnd={() => setHoverEffect({ top: "shrink", bottom: "shrink" })}
        >
          <ServiceCard
            title={serviceContent[1].title}
            top={hoverEffect.bottom}
            bottom={hoverEffect.top}
            partialContent={serviceContent[1].description}
            fullContent={serviceContent[1].longDescription}
            image={serviceContent[1].image}
          />
        </motion.div>
      ) : null}
    </motion.div>
  );
}

const ServiceCard = ({
  title,
  top,
  bottom,
  partialContent,
  fullContent,
  image,
}: ServiceCardProps) => {
  return (
    <motion.div className="flex justify-between flex-col h-full p-4">
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
        variants={extendOpacity}
        className="relative w-full !h-[30ch] p-4"
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
