import { BuyInputBox, CardCoffeeContainer, Price, Tags } from "./style";
import { ShoppingCart } from "phosphor-react";
import { CoffeeItem } from "../../../../../coffee-data";
import { NumberInput } from "../../../../../components/NumberInput";
import { useContext, useState } from "react";
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

  const [quantity, setQuantity] = useState(1);

  function quantityIncrease() {
    setQuantity(quantity + 1);
  }
  function quantityDecrease() {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  function handleAddItemToCart() {
    addToCart(id, quantity);
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
        <NumberInput
          quantity={quantity}
          quantityIncrease={quantityIncrease}
          quantityDecrease={quantityDecrease}
        />
        <button onClick={handleAddItemToCart} type="button">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </BuyInputBox>
    </CardCoffeeContainer>
  );
}
