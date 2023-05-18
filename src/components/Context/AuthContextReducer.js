const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default authReducer;
