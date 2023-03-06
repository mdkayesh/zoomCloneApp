import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlogContextProvider } from "./components/Context/BlogContext";
import { CartContextProvider } from "./components/Context/CartContext";

import { ProductContextProvider } from "./components/Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <BlogContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BlogContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
