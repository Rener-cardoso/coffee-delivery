import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeContext";

export function useCart() {
  const context = useContext(CoffeeContext)

  return context;
}