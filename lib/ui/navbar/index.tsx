"use client";
import classnames from "@/lib/function/classnames";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

const navbarContent = [
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
    href: "#",
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

const serviceContent = [
  { name: "Digital Marketing", href: "/services/digital" },
  { name: "Web & App Development", href: "/services/webapp" },
  { name: "Marker Place & Marketing", href: "/services/marketplace" },
  { name: "E-Commerce & Marketing", href: "/services/e-commerce" },
  { name: "Production", href: "/services/production" },
  { name: "Print Media & Public Relations (PR)", href: "/services/media" },
];

export default function Navbar() {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [showSerivces, setShowServices] = useState<boolean>(false);
  //router
  const router = useRouter();

  return (
    <div
      className="flex justify-between items-center px-2 lg:px-8 py-4 sticky 
    top-0 bg-[#0a0a0a] z-50 max-w-screen-xl mx-auto"
    >
      <div className={classnames(style.flex, style.gap_4)}>
        <AnimatePresence>
          {openSidebar ? (
            <div className="relative">
              {/**backdrop */}
              <div
                className="absolute z-[5] backdrop-blur-md w-[calc(100vw+2rem)] h-screen -top-8 -left-8"
                onClick={() => setOpenSidebar(false)}
              ></div>
              {/**sidebar */}
              <motion.aside
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`absolute  -top-2 -left-2 z-10 bg-black w-[60vw] md:w-[50vw] max-w-md h-screen `}
              >
                <ul>
                  {navbarContent.map((content) => {
                    return content.name !== "Services" ? (
                      <li
                        key={content.name}
                        className="text-base md:text-xl font-amazingSlab p-4"
                        onClick={() =>
                          // setTimeout(() => setOpenSidebar(false), 200)
                          setOpenSidebar(false)
                        }
                      >
                        <Link href={content.href}>{content.name}</Link>
                      </li>
                    ) : (
                      <li
                        key={content.name}
                        className="text-base md:text-xl font-amazingSlab p-4"
                        onClick={() => setShowServices(!showSerivces)}
                      >
                        <div className="flex gap-2">
                          {content.name}
                          <svg
                            className="-mr-1 size-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                          </svg>
                        </div>
                        {showSerivces && (
                          <ul className="px-4 list-outside">
                            {serviceContent.map((value) => (
                              <Link
                                key={value.name}
                                href={value.href}
                                className="p-4 block"
                                onClick={() => setOpenSidebar(false)}
                              >
                                {value.name}
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.aside>
            </div>
          ) : null}
        </AnimatePresence>
        {/**bread */}
        <div
          className="block lg:hidden text-white text-2xl font-bold p-1 rounded-lg max-h-max rotate-90"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {/* <Image
            src="/breadcrumbs.svg"
            width={30}
            height={30}
            alt="breadcrumbs"
          /> */}
          |||
        </div>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          onClick={() => router.push("/home")}
          className="cursor-pointer"
        />
        <div
          className="hidden lg:block leading-0 cursor-pointer"
          onClick={() => router.push("/home")}
        >
          <div className="font-amazingSlab font-extrabold text-xl md:text-3xl text-white whitespace-nowrap">
            HEIREACH MEDIA
          </div>
          <div
            className="font-amazingSlab font-normal text-[6px] md:text-[8px] text-white whitespace-nowrap
           text-right -translate-y-2"
          >
            Highlighting Brands That Matter
          </div>
        </div>
      </div>
      <ul className={"hidden lg:flex justify-between items-center gap-8"}>
        {navbarContent.map((content) => {
          return (
            <li
              key={content.name}
              className={classnames(
                style.text_xl,
                "font-amazingSlab text-base"
              )}
            >
              {content.name === "Services" ? (
                <DropDown
                  mouseEnter={mouseEnter}
                  setMouseEnter={setMouseEnter}
                />
              ) : (
                <Link href={content.href}>{content.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface DropDownProps {
  mouseEnter: boolean;
  setMouseEnter: (x: boolean) => void;
}
const DropDown = ({ mouseEnter, setMouseEnter }: DropDownProps) => {
  const dropClass = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200";
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-amazingSlab shadow-xs "
          onClick={() => setMouseEnter(!mouseEnter)}
          onBlur={() => setTimeout(() => setMouseEnter(false), 500)}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Services
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </div>

      {mouseEnter ? (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            {serviceContent.map((value) => (
              <Link href={value.href} className={dropClass} key={value.name}>
                {value.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
