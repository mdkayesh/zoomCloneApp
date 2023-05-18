import "./App.css";
import Header from "./components/Header/Header";
import "./index.css";
import Home from "./components/pages/Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//
import AdminPanel from "./components/pages/AdminPanel/AdminPanel";
import AddProduct from "./components/pages/AdminPanel/AddProduct";
import AllProducts from "./components/pages/AdminPanel/AllProducts";
import Contact from "./components/pages/Contact.js/Contact";
import About from "./components/pages/About/About";
import Collection from "./components/pages/Collection.js/Collection";
import Category from "./components/pages/Category/Category";
import Blog from "./components/pages/Blog/Blog";
import SingleProductPage from "./components/pages/SingleProductPage/SingleProductPage";
import CartPage from "./components/pages/CartPage/CartPage";
import Dashboard from "./components/pages/AdminPanel/Dashboard";
import Orders from "./components/pages/AdminPanel/Orders";
import SignUp from "./components/pages/SignUp/SIgnUp";

function App() {
  document.documentElement.classList.add("light");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="admin-panel" element={<AdminPanel />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="collection" element={<Collection />} />
        <Route path="about" element={<About />} />
        <Route path="category" element={<Category />} />
        <Route path="blog" element={<Blog />} />
        <Route path="single-product" element={<SingleProductPage />} />
        <Route path="cart-list" element={<CartPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
