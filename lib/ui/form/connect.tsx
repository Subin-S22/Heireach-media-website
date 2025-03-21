"use client";
import { ToastContainer } from "react-toastify";
import CustomSection from "../customSection";
import InputField from "../input";
import { motion } from "motion/react";

const classNames = {
  paragraph: "font-amazingSlab text-base",
};

const formContent = [
  { name: "Name", state: "name", type: "text" },
  { name: "Phone", state: "phone", type: "text" },
  { name: "Email", state: "email", type: "email" },
  { name: "Message", state: "message", type: "text" },
];

interface LayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
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

interface FormProps {
  formState: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmit: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
}
const FormContent = ({ formState, onChange, formSubmit }: FormProps) => {
  return (
    <CustomSection sectionId="let-connect">
      <Layout>
        {/** Let's connect text */}
        <section className="w-full">
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
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  translateX: 3,
                  translateY: -3,
                }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                className="relative bg-primary_text rounded-lg px-4 py-2 mt-8 font-amazingSlab border border-blue-500"
                type="submit"
              >
                <motion.div
                  initial={{ translateX: 0, translateY: 0 }}
                  whileHover={{
                    translateX: -4,
                    translateY: 4,
                  }}
                  className="absolute w-full border border-primary_text h-full top-0 left-0 rounded-lg"
                />
                Submit
              </motion.button>
            </div>
          </form>
        </section>
      </Layout>
    </CustomSection>
  );
};

export default FormContent;
