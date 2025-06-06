import servicesData from "@/features/Json/ServicesData.json";
import ServiceContainer from "@/lib/ui/animation/services-container";
import ServiceContainerRow from "@/lib/ui/animation/services-container-row";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Digital Marketing Agency in Bangalore | Heireach Media",
  description:
    "Boost your brand’s growth with Heireach Media, a top digital marketing agency in Bangalore. We specialize in SEO, PPC, and social media strategies to enhance your online presence.",
};

export default function DigitalServices() {
  const service = servicesData.services.find(
    (value) => value.header === "Digital Marketing",
  );
  if (!service) return <div>No data found</div>;
  return (
    <div className="p-4 md:p-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl text-[#0066FF] font-amazingSlab font-bold p-8 py-16">
        {service.header}
      </h2>

      <div className="hidden md:flex flex-wrap gap-8 justify-center items-center w-fit mx-4">
        <ServiceContainerRow serviceContent={service.cardData.slice(0, 2)} />
        <ServiceContainerRow serviceContent={service.cardData.slice(2, 4)} />
        <ServiceContainerRow serviceContent={service.cardData.slice(4, 6)} />
        <ServiceContainerRow serviceContent={service.cardData.slice(6)} />
      </div>
      <div className="flex md:hidden flex-wrap gap-4 justify-center items-center w-fit mx-4">
        <ServiceContainer serviceContent={service.cardData.slice(0, 2)} />
        <ServiceContainer serviceContent={service.cardData.slice(2, 4)} />
        <ServiceContainer serviceContent={service.cardData.slice(4, 6)} />
        <ServiceContainer serviceContent={service.cardData.slice(6)} />
      </div>
      {/* <ServiceContainerRow /> */}
    </div>
  );
}
