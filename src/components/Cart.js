import React from "react";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";
import { UseCartContext } from "./Context/CartContext";
import Quantity from "./Quantity";
import Button from "./Button";

const Cart = () => {
  const {
    // cartProducts,
    removeFromCart,
    isCartOpen,
    cartOpen,
    increment,
    decrement,
  } = UseCartContext();

  document.body.style.overflow = isCartOpen ? "hidden" : "auto";

  const _cartProducts = JSON.parse(window.localStorage.getItem("cartProducts"));

  const totalPrize = _cartProducts?.reduce((prev, curr) => {
    return prev + Number(curr.productPrize) * curr.amount;
  }, 0);

  return (
    <>
      <div
        className={`fixed top-0 bg-bg_primary w-[320px] z-20 h-full transition-all duration-500 px-3 border-l border-l-gray-300 flex flex-col justify-between ${
          isCartOpen ? "right-0" : "right-[-100vw]"
        } md:w-[400px]`}
      >
        <div className="flex justify-between items-center text-md py-3 border-b border-b-gray-300 uppercase">
          <p>cart</p>
          <AiOutlineClose
            className="text-xl cursor-pointer transition-all duration-500 hover:rotate-180"
            onClick={cartOpen}
          />
        </div>

        {/* cart Products */}
        <div className="flex flex-col gap-5 items-center overflow-auto py-3 h-[80%]">
          {!_cartProducts?.length && (
            <div className="bg-[#FFF3CD] flex items-center px-1 py-3 w-full md:px-2">
              <AiOutlineExclamationCircle className="text-xl mr-1" />
              <p className="text-xs">
                Spend $80.00 more and get free shipping!
              </p>
            </div>
          )}

          {_cartProducts?.map((product) => (
            <div className="flex gap-3 w-full relative" key={product.id}>
              <div className="img relative pb-[40%] pl-[40%] border">
                <img
                  src={product.productImages}
                  className="absolute top-0 left-0 w-full h-full p-3 object-cover"
                  alt="product"
                />
              </div>
              <div className="content capitalize">
                <div className="pr-5">
                  <p>{product.productName}</p>
                </div>
                <div className="flex mt-3 text-gray-500 items-center">
                  <span>size:{product.selectedItems.size}</span>/color:
                  <span
                    className="h-3 w-3"
                    style={{ backgroundColor: product.selectedItems.color }}
                  ></span>
                </div>
                <p className="flex items-center gap-2 my-3">
                  {product.amount} <RxCross2 />
                  <span className="font-semibold text-primary">
                    ${product.productPrize}
                  </span>
                </p>
                <Quantity
                  increment={increment}
                  decrement={decrement}
                  id={product.id}
                  amount={product.amount}
                />
              </div>
              <div className="close-cart">
                <RiDeleteBin5Line
                  className="cursor-pointer text-lg absolute top-0 right-2"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* buttons */}

        <div className="w-full border-t mt-2 py-2">
          <p className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalPrize}</span>
          </p>
          <p>Taxes and shipping calculated at checkout</p>
          <div className="button grid grid-cols-2 gap-3 mt-2">
            <Button
              url={"/cart-list"}
              type="button"
              className="text-center bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
            >
              Your Cart
            </Button>
            <Button
              url={"/checkout"}
              type="button"
              className="text-center text-btn_text_hover bg-btn_bg_hover hover:bg-btn_bg hover:text-btn_text"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${
          isCartOpen ? "opacity-1 visible" : "opacity-0 invisible"
        }`}
        onClick={cartOpen}
      ></div>
    </>
  );
};

export default Cart;
