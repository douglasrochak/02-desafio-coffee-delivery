import { Minus, Plus } from "phosphor-react";
import { Number, NumberInputContainer } from "./style";

import { useState } from "react";

export function NumberInput() {
  const [currentNumber, setCurrentNumber] = useState(1);

  function currentNumberPlus() {
    const newNumber = currentNumber + 1;
    setCurrentNumber(newNumber);
  }

  function currentNumberMinus() {
    const newNumber = currentNumber - 1;
    setCurrentNumber(newNumber);
  }

  return (
    <NumberInputContainer>
      <span onClick={currentNumberMinus}>
        <Minus size={14} />
      </span>
      <Number>{currentNumber}</Number>
      <span onClick={currentNumberPlus}>
        <Plus size={14} />
      </span>
    </NumberInputContainer>
  );
}
