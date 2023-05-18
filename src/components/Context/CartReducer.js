import { DECREMENT, INCREMENT } from "./ProductReducerHelper";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const {
        id,
        productName,
        productPrize,
        stock,
        amount,
        selectedItems,
        productImages,
      } = action.payload;

      const existingItem = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingItem) {
        return { ...state };
      } else {
        const cartProduct = {
          id,
          productName,
          productPrize,
          stock,
          amount,
          selectedItems,
          productImages,
        };

        localStorage.setItem(
          "cartProducts",
          JSON.stringify([...state.cartProducts, cartProduct])
        );

        return { ...state, cartProducts: [...state.cartProducts, cartProduct] };
      }

    // remove from cart

    case "REMOVE_FROM_CART":
      const updateCart = state.cartProducts.filter((product) => {
        return product.id !== action.payload;
      });

      localStorage.setItem("cartProducts", JSON.stringify(updateCart));
      return { ...state, cartProducts: updateCart };

    case "IS_CART_OPEN":
      return { ...state, isCartOpen: !state.isCartOpen };

    // increment and decrement

    case "INCREMENT":
      const cartProductInc = INCREMENT(state, action, "cartProducts");
      localStorage.setItem("cartProducts", JSON.stringify(cartProductInc));

      return { ...state, cartProducts: cartProductInc };

    case "DECREMENT":
      const cartProductDec = DECREMENT(state, action, "cartProducts");

      localStorage.setItem("cartProducts", JSON.stringify(cartProductDec));

      return { ...state, cartProducts: cartProductDec };

    default:
      return state;
  }
};

export default CartReducer;
