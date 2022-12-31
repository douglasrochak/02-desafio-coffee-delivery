import { Trash } from "phosphor-react";
import { NumberInput } from "../../../../components/NumberInput";
import {
  ButtonRemove,
  ButtonWrapper,
  CoffeeCardContainer,
  Price,
  Title,
} from "./style";

interface CoffeeCardProps {
  CoffeeImg: string;
  CoffeeName: string;
  CoffeePrice: string;
}

export function CoffeeCard({
  CoffeeImg,
  CoffeeName,
  CoffeePrice,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeImg} alt="" />
      <div>
        <Title>{CoffeeName}</Title>
        <ButtonWrapper>
          {" "}
          <NumberInput />
          <ButtonRemove>
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </ButtonWrapper>
      </div>
      <Price>R$ {CoffeePrice}</Price>
    </CoffeeCardContainer>
  );
}
