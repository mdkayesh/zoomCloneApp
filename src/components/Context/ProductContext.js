import { createContext, useContext, useReducer, useEffect } from "react";
import productReducer from "./ProductReducer";
import { productsRef } from "../Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";

const Context = createContext();

// initial value

const initialValue = {
  products: [],
  homeProducts: [],
  filterProducts: [],
  filteres: {
    category: "",
    subCategory: "",
    stock: "",
    color: "",
    size: [],
    fromPrize: 0,
    toPrize: 0,
    clearFilter: null,
  },
  sorting: "",
  colors: [],
  sizes: [],
  singleProduct: [],
  isSearch: false,
  isOpenModal: false,
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialValue);

  useEffect(() => {
    onSnapshot(
      productsRef,
      (snapshot) => {
        const products = [];
        snapshot.docs.forEach((doc) =>
          products.unshift({ ...doc.data(), id: doc.id })
        );
        dispatch({ type: "GET_PRODUCTS", payload: products });
        dispatch({ type: "GET_FEATURED" });
        dispatch({ type: "GET_COLORS" });
        dispatch({ type: "GET_SIZES" });
      },
      (err) => console.log(err)
    );

    return () => null;
  }, []);

  // get home featured products

  const featured = () => {
    dispatch({ type: "GET_FEATURED" });
  };

  const newArrival = () => {
    dispatch({ type: "GET_NEW_ARRIVAL" });
  };

  const bestSellers = () => {
    dispatch({ type: "GET_BESTSELLERS" });
  };

  // FILTER PRODUCTS

  const getFilteredProducts = (name) => {
    dispatch({ type: "GET_FILTERED_PRODUCTS", payload: name });
  };

  const updateFilterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    dispatch({
      type: "UPDATE_FILTER_VALUE",
      payload: { name, value, checked },
    });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  useEffect(() => {
    dispatch({ type: "FILTERED_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCT" });
  }, [state.filteres, state.sorting]);

  const sortingProducts = (e) => {
    dispatch({ type: "SORTING_VALUE", payload: e.target.value });
  };

  // get single product

  const editSingleProduct = (id) => {
    dispatch({ type: "EDIT_SINGLE_PRODUCT", payload: id });
  };

  const searchProducts = (e) => {
    dispatch({
      type: "SEARCH_PRODUCTS",
      payload: e.target.value,
    });
  };

  // quantiy functions for products

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        newArrival,
        featured,
        bestSellers,
        getFilteredProducts,
        updateFilterValue,
        clearFilter,
        sortingProducts,
        editSingleProduct,
        searchProducts,
        increment,
        decrement,
        openModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// custom hook

const UseProductContext = () => {
  return useContext(Context);
};

export { UseProductContext, ProductContextProvider };
