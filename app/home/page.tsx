import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import Image from "next/image";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        {/* <Space className="w-full h-4" /> */}
        <CompanyDescription />
        <OurServices />
        <WhyChooseUs />
        <OurWorks />
      </main>
    </div>
  );
}
