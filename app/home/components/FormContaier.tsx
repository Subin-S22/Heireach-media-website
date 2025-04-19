"use client";
import FormContent from "@/lib/ui/form/connect";
import useConnectForm from "@/lib/hooks/useConnectForm";

const FormContainer = () => {
  const { formState, formSubmit, onChange } = useConnectForm();
  return (
    <div className="overflow-hidden">
      <FormContent
        formState={formState}
        formSubmit={formSubmit}
        onChange={onChange}
      />
    </div>
  );
};

export default FormContainer;
