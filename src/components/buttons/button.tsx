import classNames from "classnames";
import { FC, ReactNode, PropsWithChildren } from "react";

interface Iprops extends PropsWithChildren {
  children?: ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  width?: string ;
}

const Button: FC<Iprops> = ({ children, type = "button", width }) => {
  return (
    <button
      type={type}
      className={classNames('bg-primary-100 border-none p-3 rounded-xl text-white shadow-md', {
        'w-full': width
      })}
    >
      {children}
    </button>
  );
};

export default Button;
