import { Minus, Plus } from "phosphor-react";
import { Number, NumberInputContainer } from "./style";

interface NumberInputProps {
  quantity: number;
  quantityIncrease: () => void;
  quantityDecrease: () => void;
}

export function NumberInput({
  quantity,
  quantityIncrease,
  quantityDecrease,
}: NumberInputProps) {
  function handleQuantityIncrease() {
    quantityIncrease();
  }

  function handleQuantityDecrease() {
    quantityDecrease();
  }

  return (
    <NumberInputContainer>
      <span onClick={handleQuantityDecrease}>
        <Minus size={14} />
      </span>
      <Number>{quantity}</Number>
      <span onClick={handleQuantityIncrease}>
        <Plus size={14} />
      </span>
    </NumberInputContainer>
  );
}
