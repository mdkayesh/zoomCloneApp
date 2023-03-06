import { DECREMENT, INCREMENT } from "./ProductReducerHelper";

const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      let productsWithAmount = action.payload.map((product) => {
        return { ...product, amount: 1 };
      });

      return {
        ...state,
        products: [...productsWithAmount],
        filterProducts: [...productsWithAmount],
      };

    // GET HOME PRODUCTS

    case "GET_NEW_ARRIVAL":
      const newArrival = state.products.filter((item) =>
        item.show.includes("newArrivals")
      );
      return { ...state, homeProducts: newArrival };
    case "GET_FEATURED":
      const featured = state.products.filter((item) =>
        item.show.includes("featured")
      );
      return { ...state, homeProducts: featured };
    case "GET_BESTSELLERS":
      const bestSellers = state.products.filter((item) =>
        item.show.includes("bestSellers")
      );
      return { ...state, homeProducts: bestSellers };

    // GET UNIQUE COLOR FROM PRODUCTS

    case "GET_COLORS":
      const colors = state.products.map((product) => product.color);
      const uniqueColor = [...new Set(colors.flat())];

      return { ...state, colors: uniqueColor };

    // GET SIZES

    case "GET_SIZES":
      const sizes = state.products.map((product) => product.sizes);
      const uniqueSize = [...new Set(sizes.flat())];

      uniqueSize.sort((a, b) => {
        let order = ["xs", "sm", "md", "lg", "xl", "xxl"];
        return order.indexOf(a) - order.indexOf(b);
      });

      return { ...state, sizes: uniqueSize };

    // update filter value

    case "UPDATE_FILTER_VALUE":
      const { name, value, checked } = action.payload;

      if (name === "size") {
        if (checked) {
          state.filteres.size.push(value);
          return {
            ...state,
            filteres: { ...state.filteres, clearFilter: true },
          };
        } else {
          let filtered = state.filteres.size.filter((item) => item !== value);
          return {
            ...state,
            filteres: { ...state.filteres, [name]: filtered },
          };
        }
      }

      return {
        ...state,
        filteres: { ...state.filteres, [name]: value, clearFilter: true },
      };

    // get filterd products

    case "FILTERED_PRODUCTS":
      const { products } = state;
      let tempFilter = [...products];
      const { category, subCategory, color, size, fromPrize, toPrize } =
        state.filteres;

      if (category) {
        tempFilter = tempFilter.filter((product) =>
          product.category
            .map((item) => item.toLowerCase())
            .includes(category.toLowerCase())
        );
        if (subCategory) {
          tempFilter = tempFilter.filter((product) =>
            product.category
              .map((item) => item.toLowerCase())
              .includes(subCategory.toLowerCase())
          );
        }
      }

      if (subCategory) {
        tempFilter = tempFilter.filter((product) =>
          product.category
            .map((item) => item.toLowerCase())
            .includes(subCategory.toLowerCase())
        );
      }

      if (color) {
        tempFilter = tempFilter.filter((product) =>
          product.color.includes(color)
        );
      }

      if (size.length > 0) {
        tempFilter = tempFilter.filter((product) =>
          product.sizes.some((elem) => size.includes(elem))
        );
      }

      if (fromPrize > 0) {
        tempFilter = tempFilter.filter(
          (product) => Number(product.productPrize) >= Number(fromPrize)
        );
      }
      if (toPrize > 0) {
        tempFilter = tempFilter.filter(
          (product) => Number(product.productPrize) <= Number(toPrize)
        );
      }

      return { ...state, filterProducts: tempFilter };

    // CLEAR THE FILTERS

    case "CLEAR_FILTER":
      return {
        ...state,
        filteres: {
          ...state.filteres,
          category: "",
          subCategory: "",
          stock: "",
          color: "",
          size: [],
          fromPrize: 0,
          toPrize: 0,
          clearFilter: null,
        },
      };

    // search products

    case "SEARCH_PRODUCTS":
      const searchProducts = state.products.filter((product) =>
        product.productName.toLowerCase().includes(action.payload.toLowerCase())
      );

      let isSearch = false;
      if (action.payload) {
        isSearch = true;
      } else {
        isSearch = false;
      }

      return { ...state, filterProducts: searchProducts, isSearch };

    // SORTING VALUE

    case "SORTING_VALUE":
      return { ...state, sorting: action.payload };

    // SORTING THE PRODUCTS

    case "SORTING_PRODUCT":
      const { sorting, filterProducts } = state;
      const sortingProduct = [...filterProducts];

      switch (sorting) {
        case "a-z":
          sortingProduct.sort((a, b) =>
            a.productName.toLowerCase() > b.productName.toLowerCase() ? 1 : -1
          );
          break;
        case "z-a":
          sortingProduct.sort((a, b) =>
            b.productName.toLowerCase() > a.productName.toLowerCase() ? 1 : -1
          );
          break;
        case "low-to-high":
          sortingProduct.sort((a, b) => a.productPrize - b.productPrize);
          break;
        case "high-to-low":
          sortingProduct.sort((a, b) => b.productPrize - a.productPrize);
          break;

        default:
          break;
      }
      return { ...state, filterProducts: sortingProduct };

    // EDIT SINGLE PRODUCT

    case "EDIT_SINGLE_PRODUCT":
      const singleProduct = state.products.filter(
        (product) => product.id === action.payload
      );
      return { ...state, singleProduct };

    // increment or decrement the quantity

    case "INCREMENT":
      const singleProductInc = INCREMENT(state, action, "singleProduct");
      const productsInc = INCREMENT(state, action, "products");

      return {
        ...state,
        singleProduct: singleProductInc,
        products: productsInc,
      };

    case "DECREMENT":
      const singleProductDec = DECREMENT(state, action, "singleProduct");
      const productsDec = DECREMENT(state, action, "products");

      return {
        ...state,
        singleProduct: singleProductDec,
        products: productsDec,
      };

    case "OPEN_MODAL":
      return { ...state, isOpenModal: !state.isOpenModal };

    // add to the cart

    default:
      return state;
  }
};

export default productReducer;
