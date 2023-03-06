import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaVimeoV } from "react-icons/fa";
import { GrSnapchat } from "react-icons/gr";
import { motion } from "framer-motion";
import { container, fadeUp, scale } from "../../Animation";

const Contact = () => {
  return (
    <div className="contact py-16">
      <div className="container px-4">
        <h1 className="text-3xl text-center text-semibold">Contact</h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-center items-center gap-4 mt-10 md:flex-row"
        >
          <motion.div
            variants={fadeUp}
            className="relative basis-1/2 after:content[''] after:w-full after:h-full after:absolute after:-bottom-5 after:left-5 mr-5 after:border-4 after:border-[#EEEEEE] after:z-[4] hover:after:border-[#d5d5d5]"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/c1.png?v=1656069191"
              alt="contact"
              className="w-full z-[5] relative"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="sm:px-6 basis-1/2 mt-4 md:mt-0 md:px-3"
          >
            <h1 className="font-bold text-3xl mb-3">GET IN TOUCH</h1>
            <p className="text-base mb-3">
              We'd Love to Hear From You, Lets Get In Touch!
            </p>
            <div className="content">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="min-w-[170px]">
                  <h5 className="text-base font-bold text-gray-800 mb-3">
                    Address
                  </h5>
                  <p>4005, Silver business</p>
                  <p>point</p>
                  <p>Bangladesh</p>
                </div>
                <div>
                  <h5 className="text-base font-bold text-gray-800 mb-3">
                    Phone
                  </h5>
                  <p>911234567890</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5 sm:flex-row">
                <div className="min-w-[170px]">
                  <h5 className="text-base font-bold text-gray-800 mb-3">
                    Email
                  </h5>
                  <a href="mailto:info@gmail.com">info@gmail.com</a>
                </div>
                <div>
                  <h5 className="text-base font-bold text-gray-800 mb-3">
                    Additional Information
                  </h5>
                  <p>
                    We are open: Monday - Saturday, 10AM - 5PM and closed on
                    sunday sorry for that.
                  </p>
                </div>
              </div>
              <div className="social mt-7">
                <h5 className="text-base font-bold text-gray-800 mb-3">
                  Social
                </h5>
                <motion.div
                  varients={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-2 mt-3"
                >
                  <motion.a variants={scale} href="https:www.facebook.com">
                    <span className="rounded-full h-10 w-10 flex justify-center items-center border overflow-hidden cursor-pointer relative after:content[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_35px_#fff] after:z-[-1] after:transition-[box-shadow_transform] after:scale-[1] after:rounded-full after:duration-300 hover:after:shadow-[inset_0_0_0_0px_#40655E] hover:border-[3px] hover:text-btn_bg hover:border-primary transition-all duration-300">
                      <FaFacebookF />
                    </span>
                  </motion.a>
                  <motion.a variants={scale} href="https:www.instagram.com">
                    <span className="rounded-full h-10 w-10 flex justify-center items-center border overflow-hidden cursor-pointer relative after:content[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_35px_#fff] after:z-[-1] after:transition-[box-shadow_transform] after:scale-[1] after:rounded-full after:duration-300 hover:after:shadow-[inset_0_0_0_0px_#40655E] hover:border-[3px] hover:text-btn_bg hover:border-primary transition-all duration-300">
                      <FaInstagram />
                    </span>
                  </motion.a>
                  <motion.a variants={scale} href="https:www.tiktok.com">
                    <span className="rounded-full h-10 w-10 flex justify-center items-center border overflow-hidden cursor-pointer relative after:content[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_35px_#fff] after:z-[-1] after:transition-[box-shadow_transform] after:scale-[1] after:rounded-full after:duration-300 hover:after:shadow-[inset_0_0_0_0px_#40655E] hover:border-[3px] hover:text-btn_bg hover:border-primary transition-all duration-300">
                      <FaTiktok />
                    </span>
                  </motion.a>
                  <motion.a variants={scale} href="https:www.vimeo.com">
                    <span className="rounded-full h-10 w-10 flex justify-center items-center border overflow-hidden cursor-pointer relative after:content[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_35px_#fff] after:z-[-1] after:transition-[box-shadow_transform] after:scale-[1] after:rounded-full after:duration-300 hover:after:shadow-[inset_0_0_0_0px_#40655E] hover:border-[3px] hover:text-btn_bg hover:border-primary transition-all duration-300">
                      <FaVimeoV />
                    </span>
                  </motion.a>
                  <motion.a variants={scale} href="https:www.snapshot.com">
                    <span className="rounded-full h-10 w-10 flex justify-center items-center border overflow-hidden cursor-pointer relative after:content[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_35px_#fff] after:z-[-1] after:transition-[box-shadow_transform] after:scale-[1] after:rounded-full after:duration-300 hover:after:shadow-[inset_0_0_0_0px_#40655E] hover:border-[3px] hover:text-btn_bg hover:border-primary transition-all duration-300">
                      <GrSnapchat />
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* map location */}

      <div className="map container py-20 px-4">
        <iframe
          title="this is our location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.1024927116835!2d90.46437395423524!3d23.66779660272798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b74ca9833025%3A0xe8fc7672feb8df3e!2z4KaG4Kaw4Kas4Ka_IOCmrOCnh-Cmt-CnjeCmnyDgpqvgpr7gprDgp43gpqjgpr_gpprgpr7gprAg4Kau4Ka-4Kaw4KeN4Kaf!5e0!3m2!1sen!2sbd!4v1675797867678!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/*contact form  */}

      <div className="form container px-4 text-center tracking-widest">
        <h1 className="text-2xl font-bold mb-4 md:text-4xl">
          LEAVE US A MESSAGE
        </h1>
        <p className="md:text-base">-Good For Nature, Good For You-</p>
        <form action="">
          <div className="flex flex-wrap md:flex-nowrap gap-6 my-4">
            <div className="basis-[100%] relative md:basis-1/3">
              <label
                className="absolute text-gray-600 top-2 left-3 text-sm focus:text-[10px] "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className=" py-2 px-3 outline-none w-full border focus:border focus:border-primary"
                required
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="basis-[100%] relative md:basis-1/3">
              <label
                className="absolute text-gray-600 top-2 left-3 text-sm focus:text-[10px] "
                htmlFor="contactEmail"
              >
                Email
              </label>
              <input
                className=" py-2 px-3  outline-none w-full border focus:border focus:border-primary"
                required
                type="email"
                name="email"
                id="contactEmail"
              />
            </div>
            <div className="basis-[100%] relative md:basis-1/3">
              <label
                className="absolute text-gray-600 top-2 left-3 text-sm focus:text-[10px] "
                htmlFor="number"
              >
                Phone number
              </label>
              <input
                className=" py-2 px-3 outline-none w-full border focus:border focus:border-primary"
                required
                type="number"
                name="number"
                id="number"
              />
            </div>
          </div>
          <div className="w-full relative">
            <label
              className="absolute text-gray-600 top-2 left-3 text-sm focus:text-[10px] "
              htmlFor="message"
            >
              Comment
            </label>
            <textarea
              className=" py-2 px-3 outline-none w-full border focus:border focus:border-primary"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-basic text-btn_text bg-btn_bg hover:bg-btn_bg_hover hover:text-btn_text_hover mt-5"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
