"use client";
import classnames from "@/lib/function/classnames";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
export default function Navbar() {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center px-8 py-4 sticky top-0 bg-[#0a0a0a] z-50 max-w-screen-xl mx-auto">
      <div className={classnames(style.flex, style.gap_4)}>
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        <div className="leading-0">
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
      <ul className={"hidden md:flex justify-between items-center gap-8"}>
        {navbarContent.map((content) => {
          return (
            <li
              key={content.name}
              className={classnames(
                style.text_xl,
                "font-amazingSlab text-base"
              )}
            >
              <Link href={content.href}>
                {content.name === "Services" ? (
                  <DropDown
                    mouseEnter={mouseEnter}
                    setMouseEnter={setMouseEnter}
                  />
                ) : (
                  content.name
                )}
              </Link>
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
  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          className="flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-amazingSlab shadow-xs "
          onClick={() => setMouseEnter(!mouseEnter)}
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
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      {mouseEnter ? (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/digital"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-0"
            >
              Digital Marketing
            </Link>
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/webapp"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-1"
            >
              Web & App Development
            </Link>
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/webapp"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-2"
            >
              Market Place & Marketing
            </Link>
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/e-commerce"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-2"
            >
              E-Commerce & Marketing
            </Link>
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/production"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-2"
            >
              Production
            </Link>
            <Link
              onClick={() => setMouseEnter(false)}
              href="/services/media"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-2"
            >
              Print Media & Public Relations (PR)
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
