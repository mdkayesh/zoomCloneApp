import React, { useEffect, useRef, useState } from "react";
import { UseProductContext } from "../Context/ProductContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchFilterProducts = () => {
  const { filterProducts, isSearch, editSingleProduct } = UseProductContext();
  const [isOpen, setIsOpen] = useState(false);
  const searchDrop = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("click", (e) => {
      if (e.target.closest("#searchDrop") === searchDrop.current) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <ul
      className={`${
        isSearch || isOpen
          ? "opacity-100 mt-0 visible"
          : "opacity-0 mt-6 invisible"
      } absolute top-[75px] left-[-30%] max-h-[70vh] bg-white min-w-[300px] border px-3 py-2 flex flex-col gap-3 overflow-auto shadow-lg transition-all duration-500 z-20 lg:top-[130%]`}
      ref={searchDrop}
      id="searchDrop"
    >
      {filterProducts.map((product) => (
        <Link
          to={"single-product"}
          onClick={() => editSingleProduct(product.id)}
          key={product.id}
        >
          <motion.li
            className="flex gap-4 cursor-pointer bg-transparent [&_.hoverImg]:hover:opacity-[1] [&_.mainImg]:hover:opacity-[0]"
            key={product.id}
            layout
          >
            <div className="img relative w-[35%] pb-[35%] border md:w-1/3 md:pb-[25%]">
              <img
                src={product.productImages[0]}
                alt="product"
                className="mainImg absolute p-1 top-0 left-0 w-full h-full object-cover transition-all duration-500"
              />
              <img
                src={product.hoverImg[0]}
                alt="product"
                className="hoverImg absolute p-1 top-0 left-0 w-full object-cover transition-all duration-500 h-full opacity-0"
              />
            </div>
            <div className="w-[80%] flex flex-col justify-center">
              <h4 className="font-bold text-sm mb-2 capitalize">
                {product.productName}
              </h4>

              <p className="flex gap-3 text-sm lg:text-base">
                {product.oldPrize !== 0 && (
                  <del className="text-gray-400">${product.oldPrize}</del>
                )}
                <span className="font-semibold">${product.productPrize}</span>
              </p>
            </div>
          </motion.li>
        </Link>
      ))}
    </ul>
  );
};

export default SearchFilterProducts;
