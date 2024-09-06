import { ReactNode, createContext, useState } from "react";

export interface Item {
  id: string;
  name: string;
  imageURL: string;
  priceId: string;
  unitAmount: number;
  
}

interface CartProviderProps {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (priceId: string) => void;
  clear: () => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartProviderProps);

export function CartContextProvider({ children }: CartContextProps) {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(item: Item) {

    const itemsAlreadyExists = items.find(
      (cartItem) => cartItem.priceId === item.priceId
    );

    if (!itemsAlreadyExists) {
      setItems((state) => [...state, item]);
    }
  }

  function removeItem(priceId: string) {
    const filteredItems = items.filter(
      (cartItem) => cartItem.priceId !== priceId
    );

    setItems(filteredItems);
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
