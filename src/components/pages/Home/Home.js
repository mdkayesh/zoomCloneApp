import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { container, fadeUp, scale } from "../../Animation";
import Button from "../../Button";
import SectionTitle from "../../SectionTitle";
import BlogSlider from "./BlogSlider";
import HeroSection from "./HeroSection";
import { Slider2 } from "./Slider2";
import Slider3 from "./Slider3";
import SliderBrands from "./SliderBrands";
import TrendingNow from "./TrendingNow";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container px-4">
        <Slider2 />
        <TrendingNow />
      </div>
      {/* service cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 pb-20"
      >
        {/* item1 */}
        <Link to={""}>
          <motion.div
            variants={scale}
            className="service-item text-center flex flex-col shadow-md border border-gray-200 rounded py-5"
          >
            <div className="flex justify-center mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/services-1-40x40_5707629a-2029-42f0-bc4a-4e5aca6a0329.png?v=1665565139"
                alt="service img"
                className="bg-primary rounded-full p-1 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
            <p>Lorem ipsum dolor sit amet, conse</p>
          </motion.div>
        </Link>
        {/* item-4 */}
        <Link to={""}>
          <motion.div
            variants={scale}
            className="service-item text-center flex flex-col shadow-md border border-gray-200 rounded py-5"
          >
            <div className="flex justify-center mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/services-1-40x40_5707629a-2029-42f0-bc4a-4e5aca6a0329.png?v=1665565139"
                alt="service img"
                className="bg-primary rounded-full p-1 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
            <p>Lorem ipsum dolor sit amet, conse</p>
          </motion.div>
        </Link>
        {/* item-3 */}
        <Link to={""}>
          <motion.div
            variants={scale}
            className="service-item text-center flex flex-col shadow-md border border-gray-200 rounded py-5"
          >
            <div className="flex justify-center mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/services-1-40x40_5707629a-2029-42f0-bc4a-4e5aca6a0329.png?v=1665565139"
                alt="service img"
                className="bg-primary rounded-full p-1 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
            <p>Lorem ipsum dolor sit amet, conse</p>
          </motion.div>
        </Link>
      </motion.div>
      {/* gellary */}
      <div className="container px-4 grid grid-col-1 gap-4 mb-20 items-center justify-items-center md:grid-cols-[30%_70%]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.p variants={fadeUp}>Get 10% Off on Order</motion.p>
          <motion.div
            variants={fadeUp}
            className={`bg-[url('https://cdn.shopify.com/s/files/1/0249/6803/6449/files/seperator_1.png?v=1666091167')] bg-no-repeat bg-[center_top]  text-center my-3 md:bg-[left-top] md:text-left`}
          >
            <h2 className={`text-4xl font-semibold mb-3`}>
              Our Gallery<span className="text-primary">.</span>
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum
            </p>
          </motion.div>
          <Button
            url={"/"}
            className={
              "bg-btn_bg text-btn_text hover:text-btn_text_hover hover:bg-btn_bg_hover mt-4"
            }
          >
            shop now
          </Button>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5 md:flex-row"
        >
          <div className="flex flex-col items-center md:items-end">
            <motion.div variants={scale} className="mt-5">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner1_db56c2d4-6ccd-4e61-b846-41b581eb7bba.png?v=1655443619"
                alt="img"
              />
            </motion.div>
            <motion.div variants={scale} className="mt-5">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner2_9aacf692-56d7-4296-ab64-5507a4ce26b9.png?v=1655443619"
                alt="img"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <motion.div variants={scale}>
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner3_8ff73dae-c799-4282-8ee0-44db0c8afb8b.png?v=1655443620"
                alt="img"
              />
            </motion.div>
            <motion.div variants={scale} className="mt-5">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/banner4_98abb0e5-b453-4898-9948-ffb7f3f23e5f.png?v=1655443619"
                alt="img"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* trending now slider3 */}

      <div className="bg-[#F8F8F8] py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container px-4 flex items-center justify-center flex-col gap-5 lg:flex-row"
        >
          <div className="w-full lg:w-2/3">
            <SectionTitle title={"Trending Now"}>
              We have thousands of new accessories for men and women in zoom
              store.
            </SectionTitle>
            <motion.div variants={scale} className="trending-slider py-3">
              <Slider3 />
            </motion.div>
          </div>
          <motion.div
            variants={scale}
            className="relative w-full after:content['*'] after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 after:scale-0 after:origin-center after:rotate-0 after:transition-all after:duration-500 hover:after:scale-1 hover:after:rotate-180 lg:w-1/3"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/specialbanner.png?v=1655351746"
              alt="img"
              className="mx-auto"
            />
            <div className="bg-white/60 text-center absolute bottom-4 py-2 px-1 w-[90%] left-[50%] translate-x-[-50%]">
              <p>Trendy Men’s Wear</p>
              <p className="capitalize underline">shop now</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* collective */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container px-4 py-16"
      >
        <div className="flex flex-col gap-10 items-center md:flex-row">
          <motion.div variants={scale} className="md:w-2/3 overflow-hidden">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/productbanner1_7b0e2ef6-9a83-4715-8d56-e37df3a7fdfe.png?v=1657775347"
              alt="trending"
              className="w-full hover:scale-[1.2] transition-all duration-[2s]"
            />
          </motion.div>
          <motion.div variants={scale} className="md:w-1/3">
            <div className="overflow-hidden">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/productimage1_115a9e36-7bc7-4976-a762-219549413860.png?v=1657775347"
                alt="trending"
                className="w-full hover:scale-[1.2] transition-all duration-[2s]"
              />
            </div>

            <div className="mt-4 text-center text-lg">
              <p>2022 Collective Collection</p>
              <button className="text-primary text-base underline py-1 hover:tracking-wider transition-all duration-500">
                Shop now
              </button>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col-reverse gap-10 items-center mt-10 md:flex-row-reverse">
          <motion.div variants={scale} className="md:w-2/3 overflow-hidden">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/productbanner2.png?v=1655803406"
              alt="trending"
              className="w-full hover:scale-[1.2] transition-all duration-[2s]"
            />
          </motion.div>
          <div className="md:w-1/3">
            <motion.div variants={scale} className="overflow-hidden">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/productimage2.png?v=1655803406"
                alt="trending"
                className="w-full hover:scale-[1.2] transition-all duration-[2s]"
              />
            </motion.div>

            <div className="mt-4 text-center text-lg">
              <p>2022 Cup Collection</p>
              <button className="text-primary text-base underline py-1 hover:tracking-wider transition-all duration-500">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* slider brands */}

      <SliderBrands />

      {/* blog sectcion */}
      <div className="blog container">
        <SectionTitle title={"Our Blog"}>
          We have thousands of new accessories for men and women in zoom store.
        </SectionTitle>
        <BlogSlider />
        {/* <Slider /> */}
      </div>
    </div>
  );
};

export default Home;
