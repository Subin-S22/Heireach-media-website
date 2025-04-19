import servicesData from "@/features/Json/ServicesData.json";
import ServiceContainer from "@/lib/ui/animation/services-container";
import ServiceContainerRow from "@/lib/ui/animation/services-container-row";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Production Services in Bangalore | Heireach Media",
  description:
    "Heireach Media offers the best production services in Bangalore. Create impactful videos, audio, and multimedia content to elevate your brand.",
};

export default function DigitalServices() {
  const service = servicesData.services.find(
    (value) => value.header === "Production",
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
