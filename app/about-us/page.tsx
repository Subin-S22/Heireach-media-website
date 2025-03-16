"use client";

import Description from "./components/description";
import WhyChooseUs from "./components/why-choosen-us";
import Brands from "./components/brands";
export default function AboutUs() {
  return (
    <section className="bg-[#a0a0a0]">
      <Description />
      <WhyChooseUs />
      <Brands />
    </section>
  );
}
