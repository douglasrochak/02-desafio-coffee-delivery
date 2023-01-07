import { Trash } from "phosphor-react";
import { useContext } from "react";
import { NumberInput } from "../../../../components/NumberInput";
import { CartContext } from "../../../../contexts/CartContextProvider";
import {
  ButtonRemove,
  ButtonWrapper,
  CoffeeCardContainer,
  Price,
  Title,
} from "./style";

interface CoffeeCardProps {
  coffeeID: string;
  coffeeImg: string;
  coffeeName: string;
  coffeePrice: string;
  quantity: number;
}

export function CoffeeCard({
  coffeeID,
  coffeeImg,
  coffeeName,
  coffeePrice,
  quantity,
}: CoffeeCardProps) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  function handleQuantityIncrease() {
    addToCart(coffeeID, 1);
  }
  function handleQuantityDecrease() {
    if (quantity <= 1) {
      return;
    }
    addToCart(coffeeID, -1);
  }

  function handleRemoveFromCart() {
    removeFromCart(coffeeID);
  }

  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" />
      <div>
        <Title>{coffeeName}</Title>
        <ButtonWrapper>
          {" "}
          <NumberInput
            quantity={quantity}
            quantityIncrease={handleQuantityIncrease}
            quantityDecrease={handleQuantityDecrease}
          />
          <ButtonRemove type="button" onClick={handleRemoveFromCart}>
            <Trash size={16} />
            Remover
          </ButtonRemove>
        </ButtonWrapper>
      </div>
      <Price>R$ {coffeePrice}</Price>
    </CoffeeCardContainer>
  );
}
