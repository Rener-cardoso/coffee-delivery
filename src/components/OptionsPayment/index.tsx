import { ReactNode } from "react";

import { OptionPaymentCountainer } from "./styles";
import { useCart } from "../../hooks/useCart";

interface OptionsPaymentProps {
  id: number;
  title:string;
  icon: ReactNode;
  ischecked: string;
}

export function OptionsPayment({title, icon, ischecked, id}: OptionsPaymentProps) {
  const { toggleCheckedPaymentForm } = useCart();

  function handletoggleCheckedPaymentForm() {
    toggleCheckedPaymentForm(id)
  }

  return (
    <OptionPaymentCountainer onClick={handletoggleCheckedPaymentForm} ischecked={ischecked}>
      {icon}
      {title}
    </OptionPaymentCountainer>
  )
}