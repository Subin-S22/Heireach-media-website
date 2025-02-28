"use client";
import HoverEffectCards from "@/lib/ui/animation/extend";
import { useState, useEffect } from "react";
import servicesData from "@/features/Json/ServicesData.json";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [cardData, setCardData] = useState<{ header: string; cardData: { title: string; description: string,longDescription: string, image: string }[] }[]>([]);

  useEffect(() => {
    const service = localStorage.getItem("selectedService");
    if (service) {
      setSelectedService(service);

      if (service.toLowerCase() === "all") {
        setCardData(servicesData.services); // Show all sections separately
      } else {
        const foundService = servicesData.services.find(
          (item) => item.header.toLowerCase() === service.toLowerCase()
        );
        setCardData(foundService ? [foundService] : []);
      }
    }
  }, []);

  return (
    <div>
      {selectedService && <h2 className="text-3xl lg:mx-[10rem] text-[#0066FF] md:mx-[3rem] xs:flex xs:justify-center xs:text-justify md:my-[3rem] xs:my-[3rem] lg:text-[32px] md:[text-lg] xs:[text-base] font-amazingSlab font-bold mb-6">{selectedService === "All" ? "Our Services" : selectedService}</h2>}

      {cardData.length > 0 ? (
        cardData.map((section, index) => (
          <div key={index} className="mb-10 font-amazingSlab text-3xl lg:text-[32px] md:[text-lg] xs:[text-base]">
            {
              selectedService === "All" ? <h2 className="text-2xl lg:mx-[10rem] text-[#0066FF] md:mx-[3rem] xs:flex xs:justify-center xs:text-justify md:my-[3rem] xs:my-[3rem] lg:text-[32px] md:[text-lg] xs:[text-base] font-amazingSlab font-semibold mb-4">{section.header}</h2> :''
            }
            
            <HoverEffectCards cardItems={section.cardData} />
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
