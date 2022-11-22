import {
  IntroContainer,
  CartIconBox,
  CoffeeIconBox,
  PackageIconBox,
  TimerIconBox,
  IconsBox,
  IntroBackground,
} from "./style";
import introImage from "../../../../assets/intro-images/intro-coffee-image.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroBackground></IntroBackground>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h4>
        <IconsBox>
          <p>
            <CartIconBox>
              <ShoppingCart weight="fill" size={16} />
            </CartIconBox>
            Compra simples e segura
          </p>
          <p>
            <PackageIconBox>
              <Package weight="fill" size={16} />
            </PackageIconBox>
            Embalagem mantém o café intacto
          </p>
          <p>
            <TimerIconBox>
              <Timer weight="fill" size={16} />
            </TimerIconBox>
            Entrega rápida e rastreada
          </p>
          <p>
            <CoffeeIconBox>
              <Coffee weight="fill" size={16} />
            </CoffeeIconBox>
            O café chega fresquinho até você
          </p>
        </IconsBox>
      </div>
      <img src={introImage} alt="" />
    </IntroContainer>
  );
}
