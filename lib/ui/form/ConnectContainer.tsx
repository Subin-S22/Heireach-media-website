"use client";
import useConnectForm from "@/lib/hooks/useConnectForm";
import FormContent from "./connect";
import emailjs from "@emailjs/browser";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function ConnectContainer() {
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
