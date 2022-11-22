import { BuyInputBox, CardCoffeeContainer, Tags } from "./style";
import { ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../../../../coffee-data";

interface CardCoffeeProps extends CoffeeType {}

export function CardCoffee({
  id,
  image,
  name,
  description,
  tags,
  price,
}: CardCoffeeProps) {
  console.log(name, tags);
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
        <span>{price}</span>
        <input min={1} type="number" />
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </BuyInputBox>
    </CardCoffeeContainer>
  );
}
