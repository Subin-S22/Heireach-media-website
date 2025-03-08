"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import useConnectForm from "@/lib/hooks/useConnectForm";
import FormContent from "@/lib/ui/form/connect";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function LetsConnect() {
  const { formState, formSubmit, onChange } = useConnectForm();

  return (
    <section className="mt-10">
      <FormContent
        formState={formState}
        formSubmit={formSubmit}
        onChange={onChange}
      />
    </section>
  );
}
