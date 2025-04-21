import InputField from "../input";
import { motion } from "motion/react";

const formContent = [
  { name: "Name", state: "name", type: "text" },
  { name: "Phone", state: "phone", type: "text" },
  { name: "Email", state: "email", type: "email" },
  { name: "Message", state: "message", type: "text" },
];

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

export default function ConnectForm({
  formSubmit,
  formState,
  onChange,
}: FormProps) {
  return (
    <form
      className="md:flex border border-primary_text relative mt-4"
      onSubmit={formSubmit}
    >
      {/**background layout with border */}
      <div className="absolute -z-[1] top-2 -left-3 w-full h-full border border-primary_text"></div>

      {/** for blue section */}
      <div className="hidden w-full max-w-96 h-[440px] md:flex justify-center items-center bg-black">
        <video
          src="/logov.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "90%", height: "80%", objectFit: "cover" }}
        />
      </div>

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
  );
}
