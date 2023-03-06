const INCREMENT = (state, action, arr) => {
  return state[arr].map((product) => {
    if (product.id === action.payload) {
      let updatedAmountInc = product.amount + 1;

      if (updatedAmountInc > product.stock) {
        updatedAmountInc = product.stock;
      }

      return { ...product, amount: updatedAmountInc };
    } else {
      return product;
    }
  });
};

// decrement

const DECREMENT = (state, action, arr) => {
  return state[arr].map((product) => {
    if (product.id === action.payload) {
      let upDatedAmountDec = product.amount - 1;
      if (upDatedAmountDec < 1) {
        upDatedAmountDec = 1;
      }
      return { ...product, amount: upDatedAmountDec };
    } else {
      return product;
    }
  });
};

export { INCREMENT, DECREMENT };
