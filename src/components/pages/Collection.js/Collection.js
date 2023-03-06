import React, { useEffect, useState } from "react";
import { UseProductContext } from "../../Context/ProductContext";
import { motion } from "framer-motion";
import { container, scale } from "../../Animation";

const Collection = () => {
  const { products } = UseProductContext();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const category = products.map((product) => {
      return product.category[0];
    });

    const uniqueCategory = [...new Set(category)];

    const arry = uniqueCategory.map((currElem) => {
      let collectArr = products.filter((product) =>
        product.category.includes(currElem)
      );

      let img = collectArr.map((elem) => elem.productImages[0]);

      return { name: currElem, arr: collectArr, img: img[0] };
    });

    setCollection(arry);
  }, [products]);

  return (
    <div className="collection">
      <div className="container px-4 py-20">
        <h1 className="text-3xl text-center mb-4">Collections</h1>
        <motion.div
          className="flex flex-col justify-center items-center gap-4 md:flex-row"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {collection.map((item, index) => (
            <motion.div
              varients={scale}
              className="basis-full border p-3 w-[350px] max-w-[350px] text-center md:basis-1/3"
              key={index}
            >
              <div className="img h-[350px] md:h-[250px] relative">
                <img
                  src={item.img}
                  alt="collection"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 z-10 block bg-primary text-white py-1 px-3 rounded-md">
                  {item.arr.length} Items
                </span>
              </div>
              <h4 className="text-lg uppercase mt-4">{item.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Collection;
