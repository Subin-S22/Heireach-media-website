import style from "./index.module.css";
import classnames from "@/lib/function/classnames";
import Image from "next/image";
import Link from "next/link";

const personalDetails = [
  { info: "grow@heireachmedia.com", href: "" },
  { info: "heireachmedia", href: "https://www.heireachmedia.com/" },
  { info: "9972772416 / 89784561230", href: "" },
];

const ternsAndConditions = [
  {
    name: "Terms & Conditions",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
];

const redirects = [
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
    href: "/services",
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

const Typeography = ({ children, href }) => {
  return (
    <Link href={href} className={classnames(style.font_family, "block")}>
      {children}
    </Link>
  );
};
const PlaneBox = () => {
  return (
    <div className={classnames(style.bg_white_100, "w-[230px] h-[230px]")} />
  );
};

export default function Footer() {
  return (
    <div className={classnames(style.footer_container)}>
      <div className={"grid grid-cols-5 relative"}>
        <div>
          <Image
            src="/images/footer/footerRectangle1.svg"
            alt="rectangle1"
            width={200}
            height={200}
            className="absolute top-0 left-0"
          />
        </div>
        <div className="mt-20">
          {personalDetails.map((details, index) => (
            <Typeography key={index} href={details.href}>
              {details.info}
            </Typeography>
          ))}
          <div className="flex flex-wrap gap-8">
            <Image
              src="/images/footer/linkedin.svg"
              alt="linkedIn"
              width={20}
              height={20}
            />
            <Image
              src="/images/footer/youtube.svg"
              alt="linkedIn"
              width={20}
              height={20}
            />
            <Image
              src="/images/footer/Vector.svg"
              alt="linkedIn"
              width={20}
              height={20}
            />
            <Image
              src="/images/footer/facebook.svg"
              alt="linkedIn"
              width={20}
              height={20}
            />
            <Image
              src="/images/footer/whatsapp.svg"
              alt="linkedIn"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="ml-10 mt-20">
          {redirects.map((redirect, index) => (
            <Typeography key={index} href={redirect.href}>
              {redirect.name}
            </Typeography>
          ))}
        </div>
        <div className="mt-20">
          {ternsAndConditions.map((tnc, index) => (
            <Typeography key={index} href={tnc.href}>
              {tnc.name}
            </Typeography>
          ))}
        </div>
        <div className="pr-10">
          <PlaneBox />
        </div>
      </div>
      <div className="flex relative">
        <div className="flex-grow w-16"></div>
        <div className="flex-shrink justify-self-center">
          <Image
            src="/images/footer/footerText1.svg"
            alt="company name"
            width={1500}
            height={180}
            className="mt-24 justify-self-center mb-20"
          />
          <Image
            src="/images/footer/footerText2.svg"
            alt="company name"
            width={350}
            height={45}
            className="absolute top-2/3 left-1/2 transform -translate-x-1/2"
          />
          <Image
            src="/images/footer/copyright.svg"
            alt="copyright"
            width={115}
            height={18}
            className="justify-self-center pb-5"
          />
        </div>
        <div className="flex-grow w-16"></div>
        <Image
          src="/images/footer/footerRectangle2.svg"
          alt="rectangle2"
          width={250}
          height={250}
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
