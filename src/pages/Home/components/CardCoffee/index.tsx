import { BuyInputBox, CardCoffeeContainer, Tags } from "./style";
import coffeeImage from "../../../../assets/coffee-images/americano.png";
import { ShoppingCart } from "phosphor-react";

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src={coffeeImage} alt="" />
      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>
      <strong>Cafe Expresso</strong>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <BuyInputBox>
        <span>9,90</span>
        <input type="number" />
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </BuyInputBox>
    </CardCoffeeContainer>
  );
}
