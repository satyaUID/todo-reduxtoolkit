import { FC, FormEvent } from "react";

type IProps = {
  label?: string;
  id: string;
  value?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  classes?: string;
  wrapperClass?: string;
  labelClass?: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
};

const Input: FC<IProps> = ({
  id,
  value='',
  type = "text",
  placeholder = "Enter",
  label,
  classes = "",
  wrapperClass,
  labelClass,
  ...others
}) => {
  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={id} className={`mb-5 ${labelClass}`}>{label}</label>}
      <input
        id={id}
        name={id}
        value={value}
        type={value}
        placeholder={placeholder}
        className={`p-2 ${classes}`}
        {...others}
      />
    </div>
  );
};

export default Input;
