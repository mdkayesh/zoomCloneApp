import React, { useEffect, useState } from "react";
import { UseProductContext } from "../../../Context/ProductContext";
import ProductStyle1 from "../../AdminPanel/ProductStyle1";
import { AnimatePresence, motion } from "framer-motion";
import ProductaStyle2 from "../../AdminPanel/ProductaStyle2";
import Pagination from "../../../Pagination";

const CategoryProducts = ({ col }) => {
  const { filterProducts } = UseProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = filterProducts.length;

  // ---------
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndx = startIndex + itemsPerPage;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className={`grid gap-x-5 gap-y-7 mt-6`}
        style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` }}
      >
        {filterProducts.length !== 0 ? (
          filterProducts.slice(startIndex, endIndx).map((product) => (
            <AnimatePresence key={product.id}>
              <motion.div
                layout
                animate={{ scale: 1, opacity: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                className="product-item"
                key={product.id}
                exit={{ opacity: 0, scale: 0 }}
              >
                {col !== 1 && <ProductStyle1 {...product} />}
                {col === 1 && <ProductaStyle2 {...product} />}
              </motion.div>
            </AnimatePresence>
          ))
        ) : (
          <div className="flex justify-center items-center col-span-4 row-span-5">
            <p className="text-2xl font-semibold capitalize text-primary">
              There is no product is available !
            </p>
          </div>
        )}
      </div>
      {/* pagination */}

      <div className="pagination flex justify-between w-full bg-[#F5F5F5] items-center py-4 px-5 transition-all duration-500 mt-7">
        <p>Showing 9 -15 of 15 items</p>

        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={onPageChange}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default CategoryProducts;
