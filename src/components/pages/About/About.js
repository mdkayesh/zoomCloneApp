import React from "react";
import Button from "../../Button";
import SectionTitle from "../../SectionTitle";
import { container, fadeUp, scale } from "../../Animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about py-10 px-4">
      <h1 className="text-3xl text-center text-semibold mb-7">About Us</h1>
      <motion.div
        varients={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 items-center container lg:flex-row"
      >
        <motion.div
          variants={fadeUp}
          className="about-img relative overflow-hidden w-full lg:basis-1/2"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/a2.png?v=1656069084"
            alt="img"
            className="w-full"
          />
        </motion.div>
        <motion.div variants={fadeUp} className="px-3 basis-full lg:basis-1/2">
          <h2 className="text-3xl mb-4">We Have Everything You Need ?</h2>
          <p className="mb-6 text-gray-500">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer!
          </p>
          <h4 className="font-bold ">Sample Unordered List</h4>
          <ul className="list-disc pl-5 leading-7 mt-3 text-gray-500">
            <li>Lorem ipsum, or lipsum as it is sometimes known</li>
            <li>Dummy text used in laying out print, graphic or web designs</li>
            <li>The passage is attributed to.</li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremou.
            </li>
            <li>Dummy text used in laying out print, graphic or web designs</li>
          </ul>
          <Button
            className="bg-btn_bg text-btn_text hover:text-btn_text_hover hover:bg-btn_bg_hover mt-7"
            url={"/contact"}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Our services */}

      <div className="services container mt-20">
        <SectionTitle title={"Our Services"} />
        <motion.div
          className="flex flex-col gap-3 mt-5 md:flex-row"
          varients={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={scale}
            className="basis-1/3 flex flex-col items-center text-center"
          >
            <div className="img w-[80px] h-[80px] mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/2_96f7e4c4-3788-4eb9-811f-d854bb9e4aec.png?v=1654339482"
                alt="services"
                className="w-full h-full"
              />
            </div>
            <h4 className="text-xl font-semibold uppercase hover:tracking-widest hover:text-primary transition-all duration-500 mb-3">
              Multi purpose
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore nemo ex.
            </p>
          </motion.div>
          <motion.div
            variants={scale}
            className="basis-1/3 flex flex-col items-center text-center"
          >
            <div className="img w-[80px] h-[80px] mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/1_dd84ac77-9f73-4e43-8d30-1a7ccd549a2e.png?v=1654339482"
                alt="services"
                className="w-full h-full"
              />
            </div>
            <h4 className="text-xl font-semibold uppercase hover:tracking-widest hover:text-primary transition-all duration-500 mb-3">
              Multi purpose
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore nemo ex nesciunt.
            </p>
          </motion.div>
          <motion.div
            variants={scale}
            className="basis-1/3 flex flex-col items-center text-center"
          >
            <div className="img w-[80px] h-[80px] mb-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/3_1ff18ec5-99a8-478b-9579-b9b63309c3d0.png?v=1654339482"
                alt="services"
                className="w-full h-full"
              />
            </div>
            <h4 className="text-xl font-semibold uppercase hover:tracking-widest hover:text-primary transition-all duration-500 mb-3">
              Multi purpose
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore nemo ex.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* onother section */}

      <motion.div
        varients={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 items-center container lg:flex-row-reverse py-20"
      >
        <motion.div
          variants={fadeUp}
          className="about-img relative overflow-hidden w-full lg:basis-1/2"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/a1.png?v=1656069084"
            alt="img"
            className="w-full"
          />
        </motion.div>
        <motion.div variants={fadeUp} className="px-3 basis-full lg:basis-1/2">
          <h2 className="text-3xl mb-4">We Have Everything You Need ?</h2>
          <p className="mb-6 text-gray-500">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer!
          </p>
          <h4 className="font-bold ">Sample Unordered List</h4>
          <ul className="list-disc pl-5 leading-7 mt-3 text-gray-500">
            <li>Lorem ipsum, or lipsum as it is sometimes known</li>
            <li>Dummy text used in laying out print, graphic or web designs</li>
            <li>The passage is attributed to.</li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremou.
            </li>
            <li>Dummy text used in laying out print, graphic or web designs</li>
          </ul>
          <Button
            className="bg-btn_bg text-btn_text hover:text-btn_text_hover hover:bg-btn_bg_hover mt-7"
            url={"/contact"}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
