import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const cartTotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItem[item._id] > 0) {
        total += item.price * cartItem[item._id];
      }
      return total;
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{ cartItem, addToCart, removeFromCart, cartTotal }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
