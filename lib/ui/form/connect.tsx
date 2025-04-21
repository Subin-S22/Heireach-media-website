"use client";
import { ToastContainer } from "react-toastify";
import CustomSection from "../customSection";
import ConnectForm from "./ConnectForm";

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
        <section className="w-full pt-36 lg:pt-2">
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
          <ConnectForm
            formSubmit={formSubmit}
            formState={formState}
            onChange={onChange}
          />
        </section>
      </Layout>
    </CustomSection>
  );
};

export default FormContent;
