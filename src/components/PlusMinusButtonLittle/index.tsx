import { Plus, Minus } from "@phosphor-icons/react"

import { PlusMinusBox } from "./styles";

interface PlusMinusButtonLittleProps {
  title: number;
  handleIncrease: () => void
  handleDecrease: () => void
}

export function PlusMinusButtonLittle({ title, handleIncrease, handleDecrease }: PlusMinusButtonLittleProps) {

  return (
    <PlusMinusBox>
      <button onClick={handleDecrease}>
        <Minus weight="bold" color="#8047F8" size={14} />
      </button>
        {title}
      <button onClick={handleIncrease}>
        <Plus weight="bold" color="#8047F8" size={14} />
      </button>
    </PlusMinusBox>
  )
}