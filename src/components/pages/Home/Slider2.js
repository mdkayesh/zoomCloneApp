import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container, fadeUp } from "../../Animation";

const slider2Data = [
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/category3-386x450.png?v=1655283915",
    title: "Regular fit desized jeans",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/category2-386x450.png?v=1655283915",
    title: "Regular fit desized jeans",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/category1-386x450.png?v=1655283915",
    title: "Regular fit desized jeans",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/category4-386x450.png?v=1655283915",
    title: "Regular fit desized jeans",
  },
];

const Slider2 = () => {
  return (
    <motion.div
      className="slider-2 py-24"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500 }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slider2Data.map((currElem, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <motion.div className="relative" variants={fadeUp}>
                <img src={currElem.imgUrl} alt="slider-img" width={"100%"} />
                <div className="absolute w-full left-0 bottom-5 flex flex-col justify-center items-center py-3 bg-white/80">
                  <h4 className="text-heading_color text-[20px] ">
                    {currElem.title}
                  </h4>
                  <button className="text-primary text-base underline py-1 hover:tracking-wider transition-all duration-500">
                    Shop now
                  </button>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export { Slider2 };
