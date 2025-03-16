interface InputFieldProps {
  labelName: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField = ({
  labelName,
  name,
  value,
  onChange,
  className,
}: InputFieldProps) => {
  return (
    <div className={"flex flex-col w-full px-8 " + className}>
      <label className="font-amazingSlab font-bold">{labelName}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        className="bg-background font-amazingSlab border-b border-white outline-none text-white px-1 py-2"
      />
    </div>
  );
};

export default InputField;
