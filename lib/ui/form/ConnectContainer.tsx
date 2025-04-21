"use client";
import useConnectForm from "@/lib/hooks/useConnectForm";
import FormContent from "./connect";

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
