import { motion } from "framer-motion";
import React from "react";
import { fadeUp } from "./Animation";

const SectionTitle = ({ title, children }) => {
  return (
    <motion.div
      className={`bg-[url('https://cdn.shopify.com/s/files/1/0249/6803/6449/files/seperator_1.png?v=1666091167')] bg-no-repeat bg-[center_top] text-center`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className={`text-4xl font-semibold mb-3`}>
        {title}
        <span className="text-primary">.</span>
      </h2>
      <p className="text-base">{children}</p>
    </motion.div>
  );
};

export default SectionTitle;
