import { Trash } from "phosphor-react";
import { useState } from "react";
import { NumberInput } from "../../../../components/NumberInput";
import {
  ButtonRemove,
  ButtonWrapper,
  CoffeeCardContainer,
  Price,
  Title,
} from "./style";

interface CoffeeCardProps {
  coffeeImg: string;
  coffeeName: string;
  coffeePrice: string;
  quantity: number;
}

export function CoffeeCard({
  coffeeImg,
  coffeeName,
  coffeePrice,
  quantity,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" />
      <div>
        <Title>{coffeeName}</Title>
        <ButtonWrapper>
          {" "}
          <NumberInput
            quantity={quantity}
            // quantityIncrease={}
            // quantityDecrease={}
          />
          <ButtonRemove>
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </ButtonWrapper>
      </div>
      <Price>R$ {coffeePrice}</Price>
    </CoffeeCardContainer>
  );
}
