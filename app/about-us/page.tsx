import Description from "./components/description";
import WhyChooseUs from "./components/why-choosen-us";
import Brands from "./components/brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Marketing Agency in Bangalore | Heireach Media",
  description:
    "The Best Marketing Agency in Bangalore. We deliver digital marketing, web & app development, e-commerce, and PR services for business growth.",
};

export default function AboutUs() {
  return (
    <section className="bg-[#a0a0a0]">
      <Description />
      <WhyChooseUs />
      <Brands />
    </section>
  );
}
