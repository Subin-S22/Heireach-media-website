"use client";
import { useState } from "react";
import "./index.css";
import InputField from "@/lib/ui/input";
import { motion } from "motion/react";

const formContent = [
  { name: "First Name", state: "firstName", type: "text" },
  { name: "Last Name", state: "Last Name", type: "text" },
  { name: "Email", state: "email", type: "email" },
  { name: "Phone", state: "phone", type: "text" },
  { name: "Field of Interest", state: "interest", type: "text" },
  { name: "Portfolio Link", state: "portfolio", type: "text" },
  { name: "Why do you want intern with us?", state: "job", type: "text" },
];

export default function Careers() {
  //state
  const [formState, setFormState] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    interest: string;
    portfolio: string;
    job: string;
  }>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    interest: "",
    portfolio: "",
    job: "",
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="a1" className="max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <>
          <h1 className="font-bold">
            <span className="white text-2xl">Careers at </span>
            <span
              className="blue"
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              HEIREACH MEDIA
            </span>
          </h1>
          <p id="c1" className="my-4 font-amazingSlab">
            {" "}
            Ready to shape the future of branding and creativity? At Heireach
            Media, we&apos;re all about fresh ideas, bold creativity, and
            <br /> collaborative growth. If you&apos;re a passionate,
            eager-to-learn individual looking for an internship that challenges
            and inspires, we&apos;d
            <br /> love to hear from you.
          </p>
        </>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 id="c2" className="text-xl font-amazingSlab font-semibold">
          Internship opportunities
        </h1>
        <p id="c3" className="font-amazingSlab my-4">
          Step into the world of real-world projects, creative collaborations,
          and hands-on learning. Our internships are designed for freshers
          <br /> who want to make an impact and grow alongside a dynamic team.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <>
          <h1 id="c4" className="text-xl font-amazingSlab font-semibold">
            Why Us?
          </h1>
          <ul id="c6" className="font-amazingSlab my-4 list-disc px-8">
            <li>Work oon innovative,high-impact projects</li>
            <br />
            <li>Collaborate with passionate creatives</li>
            <br />
            <li>Learn and grow in a flexible hands-on enivronment.</li>
          </ul>
        </>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <>
          <h1 id="c5" className="text-xl font-amazingSlab font-semibold">
            What We Look For:
          </h1>
          <ul id="c7" className="font-amazingSlab my-4 list-disc px-8">
            <li>Fresh minds with a love for creativity</li>
            <br />
            <li>A proactive attitude and curiosity to Learn</li>
            <br />
            <li>Skills in design, content, marketing, or media</li>
          </ul>
        </>
      </motion.div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-[var(--bg-blue-100)] font-amazingSlab text-2xl mt-10 mb-2 font-bold">
          Application
        </h1>
        <p className="text-base font-amazingSlab">
          Please enter your details below to apply:
        </p>
      </motion.div>
      {/** connect form */}
      <form
        className="md:flex flex-col border border-primary_text relative 
        mt-4 mb-10 md:mb-20 justify-center items-center bg-background"
        onSubmit={formSubmit}
      >
        {/**background layout with border */}
        <div className="absolute -z-[1] top-2 -left-3 w-full h-full border border-primary_text"></div>

        {/**form section */}
        <div
          className="w-full h-auto p-4 flex justify-between items-center 
        flex-col md:flex-row md:flex-wrap gap-2 md:gap-8 bg-background py-12"
        >
          {formContent.map((content) => {
            const key = content.state as keyof typeof formState;
            return (
              <InputField
                className="basis-5/12"
                key={content.name}
                labelName={content.name}
                name={content.state}
                value={formState[key]}
                onChange={onChange}
              />
            );
          })}
        </div>
        {/** submit button */}
        <button
          className="bg-primary_text rounded-lg px-4 py-2 mt-8 mb-8"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
