import React from "react";
import emailjs from "@emailjs/browser";
import { Metadata } from "next";
import ConnectContainer from "@/lib/ui/form/ConnectContainer";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Bangalore | Heireach Media",
  description:
    "Partner with the best digital marketing agency in Bangalore. We offer SEO, SMM, PPC, and branding solutions to scale your business effectively.",
};

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function LetsConnect() {
  return <ConnectContainer />;
}
