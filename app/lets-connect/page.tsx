"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });
const classNames = {
  paragraph: "font-amazingSlab text-base",
};

interface InputFieldProps {
  labelName: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

const formContent = [
  { name: "Name", state: "name", type: "text" },
  { name: "Phone", state: "phone", type: "text" },
  { name: "Email", state: "email", type: "email" },
  { name: "Message", state: "message", type: "text" },
];
export default function LetsConnect() {
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
        formState
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
  return (
    <Layout>
      {/** Let's connect text */}
      <>
        <h2 className="text-primary_text font-bold font-amazingSlab text-2xl">
          Hei, React out us!
        </h2>
        <p className={classNames.paragraph}>
          Ready to elevate your Brand to new heights{" "}
        </p>
        <p className={classNames.paragraph}>Let&apos;s make it happen.</p>
      </>

      {/** connect form */}
      <form
        className="md:flex border border-primary_text relative mt-4"
        onSubmit={formSubmit}
      >
        {/**background layout with border */}
        <div className="absolute -z-[1] top-2 -left-3 w-full h-full border border-primary_text"></div>

        {/** for blue section */}
        <div className="hidden md:block w-full max-w-96 h-[440px] bg-primary_text"></div>

        {/**form section */}
        <div className="w-full h-[440px] flex justify-center items-center flex-col gap-2 bg-background">
          {formContent.map((content) => {
            const key = content.state as keyof typeof formState;
            return (
              <InputField
                key={content.name}
                labelName={content.name}
                name={content.state}
                value={formState[key]}
                onChange={onChange}
              />
            );
          })}

          {/** submit button */}
          <button
            className="bg-primary_text rounded-lg px-4 py-2 mt-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <section
      className="flex flex-col mt-2 p-8 md:p-16 max-w-screen-lg mx-auto"
      {...rest}
    >
      {children}
      <ToastContainer />
    </section>
  );
};

const InputField = ({ labelName, name, value, onChange }: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full px-8">
      <label>{labelName}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        className="bg-background border-b border-white outline-none text-white px-1 py-2"
      />
    </div>
  );
};
