import { createContext, ReactNode, useState } from "react";
import { coffeeData, CoffeeItem } from "../coffee-data";

interface cartItem extends CoffeeItem {}

interface CartContextType {
  cartItems: cartItem[];
  addToCart: (itemID: string, quantity: number) => void;
  removeFromCart: (itemID: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

// function cartReducer() {}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItens] = useState([] as cartItem[]);

  function addToCart(itemID: string) {
    const newCartItem = coffeeData.find((obj) => obj.id === itemID);
    setCartItens([...cartItems, newCartItem]);
  }

  function removeFromCart(id: string) {
    // remove o item do carrinho
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
