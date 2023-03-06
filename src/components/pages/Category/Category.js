import React, { useState } from "react";
import { motion } from "framer-motion";
import Main from "./MainCategory/Main";
import ByCategories from "./SidebarCategory/ByCategories";
import FilterBy from "./SidebarCategory/FilterBy";
import NewProducts from "./SidebarCategory/NewProducts";
import SpecialProduct from "./SidebarCategory/SpecialProduct";
import { container, fadeUp } from "../../Animation";

const Category = () => {
  // these state for main and by categories

  const [activeIndx, setActiveIndx] = useState(null);

  const handleClick = (index) => {
    setActiveIndx(index === activeIndx ? null : index);
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="category"
    >
      <div className="container px-4">
        <div className="flex flex-col-reverse gap-6 py-10 lg:flex-row">
          <motion.div variants={fadeUp} className="filter-area lg:w-[25%]">
            <ByCategories activeIndx={activeIndx} handleClick={handleClick} />
            <FilterBy />
            <NewProducts />
            <div className="add w-3/4 mx-auto mt-5 p-3 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/10 z-[2] md:w-[90%] after:rotate-0 after:scale-0 after:origin-center after:transition-all after:duration-500 hover:after:scale-[1] hover:after:rotate-180">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/lb.png?v=1656069360"
                alt="add"
                className="w-full"
              />
            </div>
            <SpecialProduct />
          </motion.div>
          <motion.div variants={fadeUp} className="main-area lg:w-[75%]">
            <Main activeIndx={activeIndx} handleClick={handleClick} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Category;
