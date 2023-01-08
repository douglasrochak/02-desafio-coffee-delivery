import { createContext, ReactNode, useState } from "react";
import { coffeeData, CoffeeItem } from "../coffee-data";
import { produce } from "immer";
interface CartItem extends CoffeeItem {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (itemID: string, quantity: number) => void;
  removeFromCart: (itemID: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(itemID: string, quantity: number) {
    const newCartItem = coffeeData.find(
      (item) => item.id === itemID
    ) as CartItem;
    if (!newCartItem) {
      return;
    }

    const itemAlreadyExist = cartItems.findIndex(
      (cartItem) => cartItem.id === itemID
    );

    const newCart = produce(cartItems, (draft) => {
      if (itemAlreadyExist < 0) {
        draft.push({ ...newCartItem, quantity });
      } else {
        draft[itemAlreadyExist].quantity += quantity;
      }
    });

    setCartItems(newCart);
  }

  function removeFromCart(itemID: string) {
    const isItemInTheCart = cartItems.findIndex(
      (cartItem) => cartItem.id === itemID
    );

    if (isItemInTheCart < 0) {
      return;
    }

    const newCart = produce(cartItems, (draft) => {
      draft.splice(isItemInTheCart, 1);
    });

    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
