"use client";
import HoverEffectCards from "@/lib/ui/animation/extend";
import { useState, useEffect } from "react";
import servicesData from "@/features/Json/ServicesData.json";
import ServiceContainer from "@/lib/ui/animation/services-container";
import ServiceContainerRow from "@/lib/ui/animation/services-container-row";
import DigitalServices from "./digital/page";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [cardData, setCardData] = useState<
    {
      header: string;
      cardData: {
        title: string;
        description: string;
        longDescription: string;
        image: string;
      }[];
    }[]
  >([]);

  // useEffect(() => {
  //   const service = localStorage.getItem("selectedService");
  //   if (service) {
  //     setSelectedService(service);

  //     if (service.toLowerCase() === "all") {
  //       setCardData(servicesData.services); // Show all sections separately
  //     } else {
  //       const foundService = servicesData.services.find(
  //         (item) => item.header.toLowerCase() === service.toLowerCase()
  //       );
  //       setCardData(foundService ? [foundService] : []);
  //     }
  //   }
  // }, []);

  return (
    <div>
      <DigitalServices />
    </div>
  );
}
