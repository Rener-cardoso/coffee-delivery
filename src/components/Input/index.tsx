import { InputHTMLAttributes } from "react";
import { InputBox, InputCountainer, OpcionalInputTrue } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ title, placeholder, type }: InputProps) {

  return (
    <InputCountainer>
      <InputBox placeholder={placeholder} type={type} />
      <OpcionalInputTrue>{title}</OpcionalInputTrue>
    </InputCountainer>
  )
}