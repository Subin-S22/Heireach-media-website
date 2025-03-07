import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import OurApproach from "@/features/home/OurApproach";
import Space from "@/lib/ui/space";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        <CompanyDescription />
        <OurServices />
        <OurApproach />
        <Space className="h-20" />
        <WhyChooseUs />
        <OurWorks />
      </main>
    </div>
  );
}
