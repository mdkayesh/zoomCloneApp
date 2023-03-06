import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const Context = createContext();

const initialValue = {
  cartProducts: [],
  isCartOpen: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialValue);

  const addToCart = (
    id,
    productName,
    productPrize,
    stock,
    amount,
    selectedItems,
    productImages
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        productName,
        productPrize,
        stock,
        amount,
        selectedItems,
        productImages,
      },
    });
  };

  // remove from cart

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // cart sidebar open

  const cartOpen = () => {
    dispatch({ type: "IS_CART_OPEN" });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        cartOpen,
        increment,
        decrement,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// custom Hook

const UseCartContext = () => {
  return useContext(Context);
};

export { CartContextProvider, UseCartContext };
