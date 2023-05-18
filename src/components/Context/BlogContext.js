import { createContext, useContext, useEffect, useReducer } from "react";
import { blogRef } from "../Firebase/Firebase";
import { onSnapshot } from "firebase/firestore";
import blogReducer from "./BlogReducer";

const Context = createContext();

// initiaol value

const initialValue = {
  blogPost: [],
  isSidebarShow: false,
};

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialValue);

  // get the blogPost data from the firebase

  useEffect(() => {
    onSnapshot(blogRef, (snapshot) => {
      const blogPost = [];
      snapshot.docs.forEach((doc) => {
        blogPost.unshift({ ...doc.data(), id: doc.id });
      });
      //   get the data and pass the data on reducer
      dispatch({ type: "GET_BLOG_DATA", payload: blogPost });
    });
  }, []);

  const setIsSidebarShow = () => {
    dispatch({ type: "IS_SIDEBAR_SHOW", payload: !state.isSidebarShow });
  };

  return (
    <Context.Provider value={{ ...state, setIsSidebarShow }}>
      {children}
    </Context.Provider>
  );
};

const UseBlogContext = () => {
  return useContext(Context);
};

export { BlogContextProvider, UseBlogContext };
