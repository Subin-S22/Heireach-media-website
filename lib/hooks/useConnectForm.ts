"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

export default function useConnectForm() {
  //state
  const [hasSubmitted, setHasSubmitted] = useState(false);
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
      setHasSubmitted(false);
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
      setHasSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong!. Try again later.");
      }
    }
  };

  useEffect(() => {
    setHasSubmitted(false);
  }, []);

  return { formState, formSubmit, onChange, hasSubmitted };
}
