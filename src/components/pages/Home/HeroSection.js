import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../../Button";
import { container, fadeUp, fadeLeft } from "../../Animation";

const HeroSection = () => {
  return (
    <div className="hero-section bg-[#DCE5E4]">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative container">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Slider-2-1920x900.png?v=1656913019"
                alt="slider"
                width={"100%"}
                className="min-h-[250px]"
              />
            </div>
            <motion.div
              className="absolute top-[50%] translate-y-[-50%] max-w-[150px] right-[4%] sm:right-[15%] sm:max-w-[200px] md:max-w-[250px] lg:right-[90px]  lg:max-w-[400px]"
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
            >
              <div className="overflow-hidden">
                <motion.button
                  className="bg-white text-primary py-1 text-[10px] tracking-wide w-[80px] sm:w-[100px] md:tracking-widest md:text-sm md:w-[140px] lg:w-[155px] uppercase"
                  variants={fadeUp}
                >
                  New Arrival
                </motion.button>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-xl text-heading_color font-semibold whitespace-pre-wrap my-2 sm:text-3xl md:text-4xl lg:text-5xl lg:my-3"
                  variants={fadeUp}
                >
                  New Women's Fashion
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  className="text-xs sm:text-sm md:text-base"
                  variants={fadeUp}
                >
                  Save up to 40% off zoom collection
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={fadeUp}>
                  <Button
                    url={"/"}
                    className={
                      "mt-3 bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
                    }
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative container">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Slider-1-1920x900.png?v=1656913019"
                alt="slider"
                width={"100%"}
                className="min-h-[250px]"
              />
            </div>
            <motion.div
              className="absolute overflow-hidden top-[50%] translate-y-[-50%] max-w-[150px] left-[4%] sm:left-[15%] sm:max-w-[200px] md:max-w-[250px] lg:left-[90px]  lg:max-w-[400px]"
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
            >
              <motion.button
                className="bg-white text-primary py-1 text-[10px] tracking-wide w-[80px] sm:w-[100px] md:tracking-widest md:text-sm md:w-[140px] lg:w-[155px] uppercase"
                variants={fadeLeft}
              >
                New Arrival
              </motion.button>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-xl text-heading_color font-semibold whitespace-pre-wrap my-2 sm:text-3xl md:text-4xl lg:text-5xl lg:my-3"
                  variants={fadeUp}
                >
                  Luxarious fashion world
                </motion.h1>
              </div>

              <motion.p
                className="text-xs sm:text-sm md:text-base"
                variants={fadeLeft}
              >
                Save up to 40% off zoom collection
              </motion.p>
              <motion.div variants={fadeLeft}>
                <Button
                  url={"/"}
                  className={
                    "mt-3 bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
                  }
                >
                  Shop Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
