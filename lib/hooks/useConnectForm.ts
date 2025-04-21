"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function useConnectForm() {
  //state
  const [formState, setFormState] = useState<{
    name: string;
    phone: string;
    email: string;
    message: string;
  }>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  //onchange function for state update
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      //email js code.
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formState,
      );
      if (response.status) {
        toast.success("Thanks!!, we will connect to you soon.");
      } else {
        throw new Error("Emailjs failed " + response.status);
      }
    } catch (err) {
      console.log("ERR_FORM_SUBMIT: ", err);
      toast.error("Error while form submit!!.");
      toast.error("Try again later!");
    }
  };

  return { formState, formSubmit, onChange };
}
