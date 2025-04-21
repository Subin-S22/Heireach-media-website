import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import OurApproach from "@/features/home/OurApproach";
import Space from "@/lib/ui/space";
import { Metadata } from "next";
import FormContainer from "./components/FormContaier";
import Modal from "@/lib/ui/modal/Modal";

export const metadata: Metadata = {
  title: "Best Digital Marketing Services in Bangalore | Heireach Media",
  description:
    "Get result-driven digital marketing services in Bangalore with SEO, PPC, SMM, and branding. Boost your online presence and grow your business today!",
};

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto overflow-x-hidden">
      <main className="">
        <InitialView />
        <CompanyDescription />
        <OurServices />
        <Space className="h-20" />
        <OurApproach />
        <Space className="h-20" />
        <WhyChooseUs />
        <OurWorks />
        <FormContainer />
      </main>
      <Modal />
    </div>
  );
}
