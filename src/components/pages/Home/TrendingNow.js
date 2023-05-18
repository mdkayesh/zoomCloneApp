import React, { useState } from "react";
import Button from "../../Button";
import SectionTitle from "../../SectionTitle";
import { UseProductContext } from "../../Context/ProductContext";
import ProductStyle1 from "../AdminPanel/ProductStyle1";
import { AnimatePresence, motion } from "framer-motion";
import { container, fadeLeft, fadeUp, scale } from "../../Animation";

const TrendingNow = () => {
  const { homeProducts, newArrival, featured, bestSellers } =
    UseProductContext();

  const [activeIndx, setActiveIndx] = useState(0);

  const handleClick = (index) => {
    setActiveIndx(index === activeIndx ? index : index);
  };

  return (
    <section className="py-24">
      <SectionTitle title={"Trending Now"}>
        We have thousands of new accessories for men and women in zoom store.
      </SectionTitle>
      <motion.div
        className="flex gap-3 flex-wrap justify-center mt-5 overflow-hidden"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeLeft}>
          <button
            type="button"
            className={`btn-basic transition-all duration-500 capitalize border border-gray-200 ${
              0 === activeIndx
                ? "bg-btn_bg text-btn_text"
                : "bg-btn_text text-btn_bg"
            }`}
            onClick={() => {
              featured();
              handleClick(0);
            }}
          >
            Featured
          </button>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <button
            type="button"
            className={`btn-basic transition-all duration-500 capitalize border border-gray-200 ${
              1 === activeIndx
                ? "bg-btn_bg text-btn_text"
                : "bg-btn_text text-btn_bg"
            }`}
            onClick={() => {
              newArrival();
              handleClick(1);
            }}
          >
            New Arrival
          </button>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <button
            type="button"
            className={`btn-basic transition-all duration-500 capitalize border border-gray-200 ${
              2 === activeIndx
                ? "bg-btn_bg text-btn_text"
                : "bg-btn_text text-btn_bg"
            }`}
            onClick={() => {
              bestSellers();
              handleClick(2);
            }}
          >
            Best Sellers
          </button>
        </motion.div>
      </motion.div>

      {/* products */}
      <div className="products">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 mt-10 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {homeProducts.slice(-4).map((product, index) => (
              <motion.div
                variants={scale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, stiffness: 80 }}
                key={product.id}
              >
                <motion.div
                  layout
                  variants={scale}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ProductStyle1 {...product} />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          className="flex justify-center mt-5"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
        >
          <Button
            url={"/collection"}
            className={
              "bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
            }
          >
            View All
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 pt-10 lg:grid-cols-3 gap-7 mt-8"
      >
        <motion.div className="relative" variants={fadeUp}>
          <div className="">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner-1-554x547.png?v=1655785427"
              alt=""
              width={"100%"}
            />
          </div>
          <div className="absolute w-[90%] bottom-3 text-center left-[50%] translate-x-[-50%] bg-white/60 p-5">
            <button
              type="button"
              className="bg-white text-primary capitalize py-1 px-5 tracking-wider mb-3"
            >
              Trendy Collection
            </button>
            <h2 className="text-xl font-semibold uppercase transition-all duration-500">
              Trendi olive green
            </h2>
            <Button
              url={"/"}
              className="bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover mt-3"
            >
              shop now
            </Button>
          </div>
        </motion.div>
        <motion.div className="relative" variants={fadeUp}>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner-2-554x547.png?v=1655785450"
              alt="img"
              width={"100%"}
            />
          </div>
          <div className="absolute w-[90%] top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/60 p-5">
            <button
              type="button"
              className="bg-white text-primary capitalize py-1 px-5 tracking-wider mb-3"
            >
              Trendy Collection
            </button>
            <h2 className="text-xl text-gray-500 font-semibold uppercase transition-all duration-500">
              70% off
            </h2>
            <Button
              url={"/"}
              className="bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover mt-3"
            >
              shop now
            </Button>
          </div>
        </motion.div>
        <motion.div className="relative" variants={fadeUp}>
          <div className="">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner-3-554x547.png?v=1655785469"
              alt=""
              width={"100%"}
            />
          </div>
          <div className="absolute w-[90%] bottom-3 text-center left-[50%] translate-x-[-50%] bg-white/60 p-5">
            <button
              type="button"
              className="bg-white text-primary capitalize py-1 px-5 tracking-wider mb-3"
            >
              Get 30% Off On Order
            </button>
            <h2 className="text-xl font-semibold uppercase transition-all duration-500">
              NEW TRENDY ARRIVAL
            </h2>
            <Button
              url={"/"}
              className="bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover mt-3"
            >
              shop now
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrendingNow;
