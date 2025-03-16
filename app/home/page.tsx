"use client";
import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import OurServices from "@/features/home/OurServices";
import OurWorks from "./components/our-works";
import WhyChooseUs from "../about-us/components/why-choosen-us";
import OurApproach from "@/features/home/OurApproach";
import Space from "@/lib/ui/space";
import useConnectForm from "@/lib/hooks/useConnectForm";
import FormContent from "@/lib/ui/form/connect";

export default function Home() {
  const { formState, formSubmit, onChange } = useConnectForm();

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
        <div className="overflow-hidden">
          <FormContent
            formState={formState}
            formSubmit={formSubmit}
            onChange={onChange}
          />
        </div>
      </main>
    </div>
  );
}
