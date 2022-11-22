import { createContext, ReactNode, useState } from "react";

interface cartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cartItens: cartItem[];
  addToCart: (item: cartItem) => void;
  removeFromCart: (id: string) => void;
  // activeCycle: Cycle | undefined;
  // activeCycleId: string | null;
  // amountSecondsPassed: number;
  // markCurrentCycleAsFinished: () => void;
  // setSecondsPassed: (seconds: number) => void;
  // createNewCycle: (data: CreateCycleData) => void;
  // interruptCurrentCycle: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

// function cartReducer() {}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState([] as cartItem[]);

  function addToCart(item: cartItem) {
    setCartItens([...cartItens, item]);
  }

  function removeFromCart(id: string) {
    // remove o item do carrinho
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        addToCart,
        removeFromCart,
        // activeCycle,
        // activeCycleId,
        // amountSecondsPassed,
        // markCurrentCycleAsFinished,
        // setSecondsPassed,
        // createNewCycle,
        // interruptCurrentCycle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
