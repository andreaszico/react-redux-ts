import { InputHTMLAttributes, RefAttributes, forwardRef } from "react";
import "./input.css";
import cx from "classnames";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    RefAttributes<HTMLInputElement> {
  label: string;
  labelColor?: string;
  placeholder?: string;
  classNames?: string;
  obscure?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    labelColor = "default",
    placeholder = "",
    obscure = false,
    classNames = "",
    ...rest
  }: InputProps, ref) => {
    const otherOption = {
      "text-primary": labelColor === "primary",
      "label-white": labelColor === "white",
    };

    return (
      <div className={`w-full ${classNames}`}>
        <label
          htmlFor=""
          className={cx(`mb-2 block text-base font-medium`, otherOption)}
        >
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          type={obscure ? "password" : "text"}
          className="text-base border border-slate-300 rounded-md px-4 py-[9px] w-full  focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default Input;
