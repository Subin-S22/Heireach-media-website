import React from "react";
import emailjs from "@emailjs/browser";
import { Metadata } from "next";
import ConnectContainer from "@/lib/ui/form/ConnectContainer";

export const metadata: Metadata = {
  title: " Best Marketing Agency in Bangalore | Heireach Media",
  description:
    "The Best Marketing Agency in Bangalore. We deliver digital marketing, web & app development, e-commerce, and PR services for business growth.",
};

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function LetsConnect() {
  return <ConnectContainer />;
}
