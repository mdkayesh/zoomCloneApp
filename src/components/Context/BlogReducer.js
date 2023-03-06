const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_DATA":
      return { ...state, blogPost: [...action.payload] };

    default:
      return state;
  }
};

export default blogReducer;
