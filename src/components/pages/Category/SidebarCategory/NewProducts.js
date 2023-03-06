import React, { useState } from "react";
import { UseProductContext } from "../../../Context/ProductContext";
import { GrFormDown } from "react-icons/gr";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const { products, editSingleProduct } = UseProductContext();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="new-products mt-5 border">
      <h3
        className="flex justify-between items-center cursor-pointer text-lg capitalize px-3 py-2 bg-[#F5F5F5] text-gray-600 lg:cursor-auto"
        onClick={handleClick}
      >
        New Products
        <GrFormDown
          className={`${
            open ? "rotate-180" : "rotate-0"
          } transition-all duration-500 lg:hidden`}
        />
      </h3>
      <ul
        className={`${
          open ? "max-h-[800px] py-2" : "max-h-0 py-0"
        } px-3 flex flex-col gap-3 overflow-hidden transition-all duration-500 lg:max-h-[500px] lg:py-2`}
      >
        {products.slice(0, 3).map((product) => (
          <Link
            key={product.id}
            to={"/single-product"}
            onClick={() => editSingleProduct(product.id)}
          >
            <li
              className="flex gap-4 cursor-pointer [&_.hoverImg]:hover:opacity-[1] [&_.mainImg]:hover:opacity-[0]"
              key={product.id}
            >
              <div className="img relative w-[20%] pb-[20%] border md:w-1/3 md:pb-[25%]">
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

                <p className="flex gap-3">
                  {product.oldPrize !== 0 && (
                    <del className="text-gray-400">${product.oldPrize}</del>
                  )}
                  <span className="font-semibold">${product.productPrize}</span>
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NewProducts;
