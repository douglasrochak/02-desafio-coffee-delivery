import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./style";

export function CoffeeCartList() {
  return (
    <CoffeeListContainer>
      <CoffeeCard CoffeeImg={""} CoffeeName={""} CoffeePrice={""} />
    </CoffeeListContainer>
  );
}
