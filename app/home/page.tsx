import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import Marquee from "@/features/home/Marquee/MarqueeImages";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import Space from "@/lib/ui/space";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        <Marquee />
        <Space className="w-full h-4" />
        <CompanyDescription />

        <WhyChooseUs />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
