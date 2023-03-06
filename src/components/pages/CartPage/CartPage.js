import React from "react";
import { UseCartContext } from "../../Context/CartContext";
import { UseProductContext } from "../../Context/ProductContext";
import Quantity from "../../Quantity";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const CartPage = () => {
  const { cartProducts, removeFromCart } = UseCartContext();
  const { increment, decrement } = UseProductContext();

  return (
    <div className="cart-products container px-4 py-20">
      <h1 className="text-gray-800 font-semibold mb-7 text-3xl capitalize text-center">
        Your Shopping Cart
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto [&_tr]:border-b [&_tr]:py-3 [&_th]:py-3 [&_td]:text-center [&_td]:py-3 [&_td]:px-3 after:capitalize">
          <thead className="bg-[#F5F5F5] [&_th]:text-base [&_th]:font-semibold [&_th]:text-gray-800 [&_th]:whitespace-nowrap [&_th]:px-4">
            <tr>
              <th>Product Details</th>
              <th>Prize</th>
              <th>Quantity</th>
              <th>Total Prize</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {cartProducts.map((product, index) => (
                <motion.tr
                  key={index}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <td className="flex gap-3 items-center min-w-[25rem]">
                    <div className="img relative pb-[30%] border pl-[30%] overflow-hidden min-w-[10rem] min-h-[10rem]">
                      <img
                        src={product.productImages[0]}
                        alt="product"
                        className="w-full h-full object-cover p-2 absolute top-0 left-0"
                      />
                    </div>
                    <div className="name text-base font-[500] text-gray-700 text-left">
                      {product.productName}
                    </div>
                  </td>
                  <td className="font-semibold text-gray-700 text-lg">
                    ${product.productPrize}
                  </td>
                  <td className="font-semibold text-gray-700 text-lg">
                    <Quantity
                      amount={product.amount}
                      increment={increment}
                      decrement={decrement}
                      id={product.id}
                    />
                  </td>
                  <td className="font-semibold text-gray-700 text-lg">
                    ${product.productPrize * product.amount}
                  </td>
                  <td className="font-semibold text-gray-700 text-lg">
                    <div className="flex justify-center items-center">
                      <RiDeleteBin5Line
                        className="cursor-pointer"
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
