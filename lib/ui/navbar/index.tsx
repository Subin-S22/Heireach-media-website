import classnames from "@/lib/function/classnames";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const navbarContent = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  // {
  //   name: "Services",
  //   href: "/services",
  // },
  // {
  //   name: "Careers",
  //   href: "/careers",
  // },
  // {
  //   name: "Let's Connect",
  //   href: "/lets-connect",
  // },
];
export default function Navbar() {
  return (
    <div
      // className={classnames(
      //   style.flex,
      //   style.justify_between,
      //   style.items_center,
      //   style.padding_header
      // )}
      className="flex justify-between items-center px-8 py-4 sticky top-0 bg-[#0a0a0a] z-50"
    >
      <div className={classnames(style.flex, style.gap_4)}>
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        {/* <Image
          src="/images/navText.svg"
          alt="appname"
          width={200}
          height={100}
        /> */}
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
            <li key={content.name} className={classnames(style.text_xl)}>
              <Link href={content.href}>{content.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
