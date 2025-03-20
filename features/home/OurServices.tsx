"use client";

import CustomSection from "@/lib/ui/customSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/lib/ui/heading";

const serviceDetails = [
  {
    id: 1,
    title: "Digital Marketing",
    images: [
      {
        src: "/images/services/Digital Marketing/digital_marketing_card/dmbw1.svg",
        hoverSrc:
          "/images/services/Digital Marketing/digital_marketing_card/dmcol1.svg",
      },
      {
        src: "/images/services/Digital Marketing/digital_marketing_card/dmbw2.svg",
        hoverSrc:
          "/images/services/Digital Marketing/digital_marketing_card/dmcol2.svg",
      },
      {
        src: "/images/services/Digital Marketing/digital_marketing_card/dmbw3.svg",
        hoverSrc:
          "/images/services/Digital Marketing/digital_marketing_card/dmcol3.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Web & App Development",
    images: [
      {
        src: "/images/services/Web&App Development/web_card/webbw1.svg",
        hoverSrc: "/images/services/Web&App Development/web_card/webcol1.svg",
      },
      {
        src: "/images/services/Web&App Development/web_card/webbw2.svg",
        hoverSrc: "/images/services/Web&App Development/web_card/webcol2.svg",
      },
      {
        src: "/images/services/Web&App Development/web_card/webbw3.svg",
        hoverSrc: "/images/services/Web&App Development/web_card/webcol3.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Market Place & Marketing",
    images: [
      {
        src: "/images/services/MarketPlace & Marketing/marketing_card/marketingbw1.svg",
        hoverSrc:
          "/images/services/MarketPlace & Marketing/marketing_card/marketingcol1.svg",
      },
      {
        src: "/images/services/MarketPlace & Marketing/marketing_card/marketingbw2.svg",
        hoverSrc:
          "/images/services/MarketPlace & Marketing/marketing_card/marketingcol2.svg",
      },
      {
        src: "/images/services/MarketPlace & Marketing/marketing_card/marketingbw3.svg",
        hoverSrc:
          "/images/services/MarketPlace & Marketing/marketing_card/marketingcol3.svg",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce & Marketing",
    images: [
      {
        src: "/images/services/E-Commerce & Marketing/e_com_card/e_combw1.svg",
        hoverSrc:
          "/images/services/E-Commerce & Marketing/e_com_card/e_comcol1.svg",
      },
      {
        src: "/images/services/E-Commerce & Marketing/e_com_card/e_combw2.svg",
        hoverSrc:
          "/images/services/E-Commerce & Marketing/e_com_card/e_comcol2.svg",
      },
      {
        src: "/images/services/E-Commerce & Marketing/e_com_card/e_combw3.svg",
        hoverSrc:
          "/images/services/E-Commerce & Marketing/e_com_card/e_comcol3.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Production",
    images: [
      {
        src: "/images/services/Production/prod_card/prodbw1.svg",
        hoverSrc: "/images/services/Production/prod_card/prodcol1.svg",
      },
      {
        src: "/images/services/Production/prod_card/prodbw2.svg",
        hoverSrc: "/images/services/Production/prod_card/prodcol2.svg",
      },
      {
        src: "/images/services/Production/prod_card/prodbw3.svg",
        hoverSrc: "/images/services/Production/prod_card/prodcol3.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Print Media & Public Relation (PR)",
    images: [
      {
        src: "/images/services/Print Media & Public Relations (PR)/media_card/mediabw1.svg",
        hoverSrc:
          "/images/services/Print Media & Public Relations (PR)/media_card/mediacol1.svg",
      },
      {
        src: "/images/services/Print Media & Public Relations (PR)/media_card/mediabw2.svg",
        hoverSrc:
          "/images/services/Print Media & Public Relations (PR)/media_card/mediacol2.svg",
      },
      {
        src: "/images/services/Print Media & Public Relations (PR)/media_card/mediabw3.svg",
        hoverSrc:
          "/images/services/Print Media & Public Relations (PR)/media_card/mediacol3.svg",
      },
    ],
  },
];
const extendsImage = {
  rest: {
    scaleX: 1,
    transformOrigin: "right",
    boxShadow: "none",
    filter: "grayscale(100%)",
  },
  hover: {
    scaleX: 1.1,
    transformOrigin: "right",
    boxShadow: "-4px 4px 4px 0px #00000040",
    filter: "grayscale(0%)",
  },
};
export default function OurServices() {
  const [contentExtend, setExtend] = useState("rest");
  const router = useRouter();
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const handleHoverEnd = () => {
    setExtend("rest");
    setHoveredImage(null);
  };
  const handleHoverStart = (id: number) => {
    setExtend("hover");
    setHoveredImage(id);
  };
  const handleNavigation = (title: string) => {
    localStorage.setItem("selectedService", title);
    if (title.includes("Digital")) {
      router.push("/services/digital");
    } else if (title.includes("Web & App")) {
      router.push("/services/webapp");
    } else if (title.includes("Market Place")) {
      router.push("/services/marketplace");
    } else if (title.includes("E-Commerce")) {
      router.push("/services/e-commerce");
    } else if (title.includes("Production")) {
      router.push("/services/production");
    } else if (title.includes("Print Media")) {
      router.push("/services/media");
    }
  };

  return (
    <CustomSection sectionId="our-services">
      <div className="flex flex-col justify-center items-center min-h-[650px] sm:min-h-[1000px] md:min-h-[1000px] lg:min-h-[870px] py-8">
        <div className="pb-32 flex w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className="text-center font-amazingSlab whitespace-pre-wrap w-full text-lg capitalize font-bold text-[#0066FF] h-[29px]  size-14"
          >
            <Header name="Our services" type="h2" />
          </motion.div>
          <Link
            href="/services"
            className="flex gap-5 justify-center font-amazingSlab text-center whitespace-pre-wrap w-full text-xl capitalize font-bold text-white h-[29px]  size-14"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex justify-center items-center gap-2"
            >
              View all
              <Image
                src="/images/aboutCompany/arrow.svg"
                alt="arrow"
                width={12}
                height={12}
                objectFit="contain"
              />
            </motion.div>
          </Link>
        </div>
        <div className="pb-6 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:px-10">
          <AnimatePresence mode="wait">
            {serviceDetails.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => handleNavigation(service.title)}
                id="image-scroll"
                className="flex border-2 border-[#0066FF] rounded-[15px] bg-[#000000] sm:min-w-[450px] md:min-w-[300px] lg:min-w-[400px]   h-[179px] group hover:shadow-[2px_2px_6px_0px_#0066FF]"
                whileHover="hover"
                transition={{ duration: 8, ease: "easeInOut" }}
                initial="rest"
                onHoverStart={() => handleHoverStart(service.id)}
                onHoverEnd={handleHoverEnd}
              >
                <div className="pl-2 md:pl-10 flex justify-center items-center w-full ">
                  <p
                    className="break-words text-white text-lg font-amazingSlab
                   font-semibold group-hover:text-[#0066FF] w-full text-center"
                  >
                    {service.id === 6
                      ? service.title.split("&").map((part, index) => (
                          <span key={index}>
                            {part} {index === 0 && "&"}
                            {index === 0 && <br />}{" "}
                          </span>
                        ))
                      : service.title}{" "}
                  </p>
                </div>
                <motion.div
                  variants={extendsImage}
                  animate={hoveredImage === service.id ? "hover" : "rest"}
                  className="w-full h-[175px] relative"
                >
                  {service.images.map((image, index) => (
                    <Image
                      key={index}
                      src={
                        // hoveredImage === service.id ? image.hoverSrc : image.src
                        image.hoverSrc
                      }
                      alt={`img${index + 1}`}
                      width={
                        hoveredImage === service.id
                          ? index === 0
                            ? 95 + 50
                            : index === 1
                            ? 55 + 30
                            : 27 + 20
                          : index === 0
                          ? 95
                          : index === 1
                          ? 55
                          : 27
                      }
                      height={175}
                      className="object-cover h-[175px] rounded-tr-[15px] rounded-br-[15px] absolute right-0 group-hover:shadow-[-4px_4px_4px_0px_#00000040]"
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </CustomSection>
  );
}
