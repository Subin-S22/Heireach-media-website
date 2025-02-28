"use client";
import HoverEffectCards from "@/lib/ui/animation/extend";
import { useState, useEffect } from "react";
const cardData = [
  { title: "Branding", description: "A strong <strong>Brand Identity</strong> sets you apart in a competitive market." },
  { title: "SEO & Marketing", description: "Our SEO Strategies drive organic traffic, improve Google rankings, and enhance visibility." },
  { title: "Retargeting", description: "We implement Strategic Retargeting campaigns to reconnect with potential customers." },
  { title: "Social Media Marketing", description: "We craft data-driven Social Media Strategies to enhance brand awareness." },
  { title: "Email Marketing", description: "Engage with your audience through personalized email campaigns." },
  { title: "Web Development", description: "Custom websites tailored to your business needs." },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const service = localStorage.getItem("selectedService");
    if (service) {
      setSelectedService(service);
      localStorage.removeItem("selectedService"); // Optional: Remove after retrieving
    }
  }, []);

  return (
    <div>
      <h3>{selectedService}</h3>
      <HoverEffectCards cardItems={cardData} ></HoverEffectCards>
    </div>
  );
}
