import { BuyInputBox, CardCoffeeContainer, Price, Tags } from "./style";
import { ShoppingCart } from "phosphor-react";
import { CoffeeItem } from "../../../../../coffee-data";
import { NumberInput } from "../../../../../components/NumberInput";
import { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContextProvider";

interface CardCoffeeProps extends CoffeeItem {}

export function CardCoffee({
  id,
  image,
  name,
  description,
  tags,
  price,
}: CardCoffeeProps) {
  const { addToCart } = useContext(CartContext);

  function addItemToCart() {
    addToCart(id, 1);
  }

  return (
    <CardCoffeeContainer>
      <img src={image} alt="" />
      <Tags>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
      <strong>{name}</strong>
      <p>{description}</p>
      <BuyInputBox>
        <Price>{price}</Price>
        <NumberInput />
        <button onClick={addItemToCart} type="button">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </BuyInputBox>
    </CardCoffeeContainer>
  );
}
