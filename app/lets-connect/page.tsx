import React from "react";
import { Metadata } from "next";
import ConnectContainer from "@/lib/ui/form/ConnectContainer";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Bangalore | Heireach Media",
  description:
    "Partner with the best digital marketing agency in Bangalore. We offer SEO, SMM, PPC, and branding solutions to scale your business effectively.",
};

export default function LetsConnect() {
  return <ConnectContainer />;
}
