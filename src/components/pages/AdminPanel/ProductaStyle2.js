import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseProductContext } from "../../Context/ProductContext";

const ProductaStyle2 = ({
  productImages,
  productName,
  hoverImg,
  productPrize,
  oldPrize,
  discription,
  id,
}) => {
  const { editSingleProduct } = UseProductContext();

  return (
    <div className="flex flex-col gap-5 overflow-hidden md:flex-row">
      <Link
        to="/single-product"
        onClick={() => editSingleProduct(id)}
        className="block relative border pb-[100%] md:pl-[30%] md:pb-[30%]"
      >
        <img
          src={productImages[0]}
          alt="product"
          className="img max-w-full p-3 h-full w-full absolute left-0 top-0 object-cover object-[center_center]"
        />
        <img
          src={hoverImg[0]}
          alt="product"
          className="hover-img p-3 max-w-full w-full h-full absolute left-0 top-0 object-cover object-[center_center]"
        />
        <div className="star absolute bottom-6 left-0 w-full flex justify-center gap-1 text-lg">
          {[1, 2, 3, 4, 5].map((index) => (
            <span key={index} className="text-[#FEC42D]">
              <AiFillStar />
            </span>
          ))}
        </div>
      </Link>
      <div>
        <h4 className="my-2">
          <Link
            title={productName}
            to="/single-product"
            onClick={() => editSingleProduct(id)}
            className="font-[600] text-lg capitalize"
          >
            {productName.length < 35
              ? productName
              : `${productName.slice(0, 35)}...`}
          </Link>
        </h4>
        <p className="text-gray-800">
          {oldPrize > 0 && (
            <span className="font-semibold text-base mr-2">
              <del>${oldPrize}</del>
            </span>
          )}
          <span className="font-[500] text-base">${productPrize}</span>
        </p>
        <pre className="disc my-2 text-gray-500 leading-relaxed">
          {discription.length < 200
            ? discription
            : discription.slice(0, 200) + "..."}
        </pre>
        <div className="icons flex gap-2 mt-3">
          <button className="py-2 px-3 text-sm transition-all duration-500 text-btn_text bg-btn_bg hover:text-btn_text_hover hover:bg-btn_bg_hover">
            Add To Cart
          </button>
          {/* <span className="text-xl p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer hidden md:inline-block">
            <AiOutlineShoppingCart />
          </span> */}
          <span className="text-xl flex items-center p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer">
            <FaEye />
          </span>
          <span className="text-xl flex items-center p-1.5 border border-gray-300 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 cursor-pointer">
            <AiOutlineHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductaStyle2;
