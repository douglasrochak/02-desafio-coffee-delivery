import { CardCoffee } from "./CardCoffee";
import { CoffeeListContainer } from "./style";

import { coffeeData } from "../../../../coffee-data";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffeeData.map((coffee) => (
          <CardCoffee key={coffee.id} {...coffee} />
        ))}
      </div>
    </CoffeeListContainer>
  );
}
