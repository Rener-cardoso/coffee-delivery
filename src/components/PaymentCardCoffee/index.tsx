import { useCart } from "../../hooks/useCart";
import { PlusMinusButtonLittle } from "../PlusMinusButtonLittle";
import { ButtonCountainer, PaymentCardCoffeeCountainer, PaymentCardCoffeeMain, RemoveButton, TextCardCoffee } from "./styles";
import { Trash } from "@phosphor-icons/react";

interface PaymentCardCoffeeProps {
  name: string;
  price?: string;
  quantity: number;
  image: string;
  sumOrderedCoffee: string;
}

export function PaymentCardCoffee({ name, quantity, image, sumOrderedCoffee }: PaymentCardCoffeeProps) {
  const { changeCartItemQuantity, removeProduct } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(name, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(name, "decrease")
  }

  function handleRemoveProduct() {
    removeProduct(name)
  }

  return (
    <PaymentCardCoffeeCountainer>
      <img src={image} alt="" />
      <PaymentCardCoffeeMain>
        <TextCardCoffee>
          <span>{name}</span>
          <strong>R$ {sumOrderedCoffee}</strong>
        </TextCardCoffee>
        <ButtonCountainer>
          <PlusMinusButtonLittle
            title={quantity} 
            handleDecrease={handleDecrease} 
            handleIncrease={handleIncrease} 
          />
          <RemoveButton onClick={handleRemoveProduct}>
            <Trash size={16} color="#8047F8" />
            Remover
          </RemoveButton>
        </ButtonCountainer>
      </PaymentCardCoffeeMain>
    </PaymentCardCoffeeCountainer>
  )
}

