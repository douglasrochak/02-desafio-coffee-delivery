import { forwardRef, InputHTMLAttributes } from "react";
import { Error, InputContainer } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, error, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <input ref={ref} placeholder={placeholder} {...props} />
        {error && <Error>{error}</Error>}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";
