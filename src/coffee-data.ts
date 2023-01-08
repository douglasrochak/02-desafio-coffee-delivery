import { v4 as uuidv4 } from "uuid";

import expressoTradicionalImage from "./assets/coffee-images/expresso-tradicional.png";
import expressoAmericanoImage from "./assets/coffee-images/expresso-americano.png";
import expressoCremosoImage from "./assets/coffee-images/expresso-cremoso.png";
import expressoGeladoImage from "./assets/coffee-images/expresso-gelado.png";
import cafeComLeiteImage from "./assets/coffee-images/cafe-com-leite.png";
import latteImage from "./assets/coffee-images/latte.png";
import cappuccinoImage from "./assets/coffee-images/cappuccino.png";
import macchiatoImage from "./assets/coffee-images/macchiato.png";
import mochaccinoImage from "./assets/coffee-images/mochaccino.png";
import chocolateQuenteImage from "./assets/coffee-images/chocolate-quente.png";
import cubanoImage from "./assets/coffee-images/cubano.png";
import havaianoImage from "./assets/coffee-images/havaiano.png";
import arabeImage from "./assets/coffee-images/arabe.png";
import irlandesImage from "./assets/coffee-images/irlandes.png";

export interface CoffeeItem {
  id: string;
  image: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
}

const randomPrice = () => Number(Math.floor(Math.random() * (9 - 0))) + 0.9;

export const coffeeData: CoffeeItem[] = [
  {
    id: uuidv4(),
    image: expressoTradicionalImage,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: expressoAmericanoImage,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: expressoCremosoImage,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: expressoGeladoImage,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", "gelado"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: cafeComLeiteImage,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: latteImage,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: cappuccinoImage,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: macchiatoImage,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: mochaccinoImage,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: chocolateQuenteImage,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: cubanoImage,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: havaianoImage,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: arabeImage,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    price: randomPrice(),
  },
  {
    id: uuidv4(),
    image: irlandesImage,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    price: randomPrice(),
  },
];
