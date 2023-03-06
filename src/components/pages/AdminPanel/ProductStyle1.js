import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import { UseProductContext } from "../../Context/ProductContext";

const ProductStyle1 = ({
  productImages,
  productName,
  hoverImg,
  productPrize,
  oldPrize,
  id,
  stock,
  amount,
  sizes,
}) => {
  const { editSingleProduct, openModal } = UseProductContext();
  const { addToCart, cartOpen } = UseCartContext();
  return (
    <>
      <div className="product-cart overflow-hidden bg-item_color">
        <Link to={"/single-product"} onClick={() => editSingleProduct(id)}>
          <div className="relative border pb-[100%]">
            <img
              src={productImages}
              alt="product"
              className="img max-w-full p-3 h-full w-full absolute left-0 top-0 block object-cover object-[center_center]"
            />
            <img
              src={hoverImg[0]}
              alt="product"
              className="hover-img p-3 max-w-full w-full h-full absolute left-0 top-0 block object-cover object-[center_center]"
            />
            <div className="star absolute bottom-6 left-0 w-full flex justify-center gap-1 text-lg">
              {[1, 2, 3, 4, 5].map((index) => (
                <span key={index} className="text-[#FEC42D]">
                  <AiFillStar />
                </span>
              ))}
            </div>
          </div>
        </Link>
        <div className="text-center">
          <h4 className="my-2">
            <Link
              title={productName}
              to={"/single-product"}
              onClick={() => editSingleProduct(id)}
              className="font-[600] text-base capitalize"
            >
              {productName.length < 22
                ? productName
                : `${productName.slice(0, 22)}...`}
            </Link>
          </h4>
          <p>
            {oldPrize > 0 && (
              <span className="font-semibold text-base mr-2">
                <del>${oldPrize}</del>
              </span>
            )}
            <span className="font-[500] text-base">${productPrize}</span>
          </p>
          <div className="icons flex gap-2 justify-center mt-2">
            <button
              className="btn-basic text-btn_text bg-btn_bg hover:text-btn_text_hover hover:bg-btn_bg_hover md:hidden"
              onClick={() => {
                addToCart(
                  id,
                  productName,
                  productPrize,
                  stock,
                  amount,
                  sizes,
                  productImages
                );
                cartOpen();
              }}
            >
              Add To Cart
            </button>
            <span
              className="text-xl p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer hidden md:inline-block"
              onClick={() => {
                addToCart(
                  id,
                  productName,
                  productPrize,
                  stock,
                  amount,
                  sizes,
                  productImages
                );
                cartOpen();
              }}
            >
              <AiOutlineShoppingCart />
            </span>
            <span
              className="text-xl p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer"
              onClick={() => {
                openModal();
                editSingleProduct(id);
              }}
            >
              <FaEye />
            </span>
            <span className="text-xl p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer">
              <AiOutlineHeart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductStyle1;
