import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CartBox, CoffeeCartCountainer, CoffeeCartFooter, CoffeeCartHeader, PlusMinusBox, ShoppingCartBox, TypeCoffeeCountainer } from "./styles";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export interface CoffeeCardProps {
  typeCoffee: string[];
  name: string;
  description: string;
  price: string;
  image: string;
}

export function CoffeeCard({typeCoffee, name, description, price, image}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleQuanityAdd() {
    setQuantity(state => state + 1)
  }

  function handleQuanityRemove() {
    setQuantity(state => state - 1)
  }
  
  function handleAddToCart() {

    const coffeeToAdd = {
      typeCoffee,
      name, 
      description, 
      price, 
      image,
      quantity: quantity
    }

    addCoffeeToCart(coffeeToAdd)
    setQuantity(1)
  }

  return (
    <CoffeeCartCountainer>
      <CoffeeCartHeader>
        <img src={image} alt="" />
        <TypeCoffeeCountainer>
          {
            typeCoffee.map(type => {
              return <span key={type} >{type}</span>
            })
          }
        </TypeCoffeeCountainer>
        <strong>{name}</strong>
        <p>{description}</p>      
      </CoffeeCartHeader>
      <CoffeeCartFooter>
        <span>R$<strong>{price}</strong></span>
        <CartBox>
        <PlusMinusBox>
         <button disabled={quantity <= 1} onClick={handleQuanityRemove}>
          <Minus 
            weight="bold" 
            color="#8047F8" 
            size={14}
          />
         </button>
            {quantity}
          <button onClick={handleQuanityAdd}>
          <Plus
            weight="bold" 
            color="#8047F8" 
            size={14} 
          />
          </button>
          </PlusMinusBox>
          <ShoppingCartBox onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="white" weight="fill" />
          </ShoppingCartBox>
        </CartBox>
      </CoffeeCartFooter>
    </CoffeeCartCountainer>
  )
}