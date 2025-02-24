import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import OurWorks from "./components/our-works";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        {/* <Space className="w-full h-4" /> */}
        {/* <CompanyDescription /> */}
        <OurWorks />
        <WhyChooseUs />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
