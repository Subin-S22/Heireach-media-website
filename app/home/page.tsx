import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import OurApproach from "@/features/home/OurApproach";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        <CompanyDescription />
        <OurServices />
        <OurApproach />
        <WhyChooseUs />
        <OurWorks />
      </main>
    </div>
  );
}
