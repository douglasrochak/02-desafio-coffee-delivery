import { CardCoffee } from "../CardCoffee";
import { CoffeeListContainer } from "./style";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CardCoffee />
      </div>
    </CoffeeListContainer>
  );
}
