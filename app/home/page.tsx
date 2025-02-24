import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        <CompanyDescription />
        <OurServices />
        <WhyChooseUs />
        <OurWorks />
      </main>
    </div>
  );
}
