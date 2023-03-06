import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReviewForm from "./ReviewForm";
import ReviewsComments from "./ReviewsComments";

const ProductDiscription = ({ discription, id, reviewsComment }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [reviewIsOpen, setReviewIsOpen] = useState(false);
  const [thanksIsOpen, setThanksIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const tabButtons = [
    "discription",
    "reviews",
    "shopping & returns",
    "custom tab1",
  ];

  const handleTab = (index) => {
    setActiveTab(index === activeTab ? index : index);
  };

  const animateVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="pt-16" id="review">
      <div className="discription border px-5 pb-7 [&_p]:leading-loose [&_p]:text-gray-500">
        <div className="flex justify-center">
          <ul className="flex gap-3 flex-wrap">
            {tabButtons.map((title, index) => (
              <li key={index} onClick={() => handleTab(index)}>
                <button
                  type="button"
                  className={`${
                    index === activeTab
                      ? "bg-black text-white"
                      : "bg-[#F5F5F5] text-black"
                  } discription-btn`}
                >
                  <span className="z-[2] relative">{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-pane">
          {/* tab-1 */}
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                className="py-5"
                variants={animateVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="text-gray-500 leading-relaxed">{discription}</p>

                {/* unorder list  */}

                <div className="mt-7">
                  <h5 className="text-lg font-semibold mb-3 capitalize">
                    Sample Unordered List
                  </h5>
                  <ul className="pl-5 list-disc text-gray-500 leading-loose">
                    <li className="list-disc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta, cumque?
                    </li>
                    <li className="list-disc">
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="list-disc">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-disc">
                      Lorem ipsum consectetur adipisicing.
                    </li>
                  </ul>
                </div>

                {/* orderd list */}

                <div className="mt-7">
                  <h5 className="text-lg font-semibold mb-3 capitalize">
                    Sample ordered List
                  </h5>
                  <ul className="pl-5 list-disc text-gray-500 leading-loose">
                    <li className="list-decimal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta, cumque?
                    </li>
                    <li className="list-decimal">
                      Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li className="list-decimal">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="list-decimal">
                      Lorem ipsum consectetur adipisicing.
                    </li>
                  </ul>
                </div>

                {/* sample paragraph text */}

                <h5 className="mb-3 font-semibold mt-5 capitalize text-lg">
                  sample paragraph text
                </h5>
                <div className="border-l-4 pl-5 py-2">
                  <p className="first-letter:capitalize">
                    {discription.slice(-300)}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* tab-2 */}
          <AnimatePresence mode="wait">
            {activeTab === 1 && (
              <motion.div
                className="py-5"
                variants={animateVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex justify-between mb-7">
                  <p>no reviews yet</p>
                  <button
                    type="button"
                    className="btn-basic text-btn_text bg-btn_bg hover:bg-btn_bg_hover hover:text-btn_text_hover"
                    onClick={() => setReviewIsOpen(true)}
                  >
                    write a review
                  </button>
                </div>
                <hr />

                <div className="review-form mt-5">
                  {reviewIsOpen && (
                    <ReviewForm
                      setReviewIsOpen={setReviewIsOpen}
                      setThanksIsOpen={setThanksIsOpen}
                      id={id}
                      setReviews={setReviews}
                      reviews={reviews}
                    />
                  )}

                  {thanksIsOpen && (
                    <div variants={animateVariants}>
                      <p className="text-primary font-semibold text-xl">
                        Thanks for submiting review
                      </p>
                    </div>
                  )}
                </div>
                <ReviewsComments reviewsComments={reviewsComment} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* tab-3 */}

          <AnimatePresence mode="wait">
            {activeTab === 2 && (
              <motion.div
                className="py-5"
                variants={animateVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Returns Policy
                </h4>
                <p>
                  You may return most new, unopened items within 30 days of
                  delivery for a full refund. We'll also pay the return shipping
                  costs if the return is a result of our error (you received an
                  incorrect or defective item, etc.).
                </p>
                <p className="mt-4">
                  You should expect to receive your refund within four weeks of
                  giving your package to the return shipper, however, in many
                  cases you will receive a refund more quickly. This time period
                  includes the transit time for us to receive your return from
                  the shipper (5 to 10 business days), the time it takes us to
                  process your return once we receive it (3 to 5 business days),
                  and the time it takes your bank to process our refund request
                  (5 to 10 business days).
                </p>
                <p className="mt-4">
                  If you need to return an item, simply login to your account,
                  view the order using the 'Complete Orders' link under the My
                  Account menu and click the Return Item button. We'll notify
                  you via e-mail of your refund once we've received and
                  processed the returned item.
                </p>
                <h5 className="text-lg font-semibold mb-3 text-gray-800 mt-4">
                  Shipping
                </h5>
                <p>
                  We can ship to virtually any address in the world. Note that
                  there are restrictions on some products, and some products
                  cannot be shipped to international destinations.
                </p>
                <p className="mt-4">
                  When you place an order, we will estimate shipping and
                  delivery dates for you based on the availability of your items
                  and the shipping options you choose. Depending on the shipping
                  provider you choose, shipping date estimates may appear on the
                  shipping quotes page
                </p>{" "}
                <p className="mt-4">
                  Please also note that the shipping rates for many items we
                  sell are weight-based. The weight of any such item can be
                  found on its detail page. To reflect the policies of the
                  shipping companies we use, all weights will be rounded up to
                  the next full pound.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* tab-4 */}

          <AnimatePresence mode="wait">
            {activeTab === 3 && (
              <motion.div
                className=""
                variants={animateVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="mt-4">
                  This is a custom product tab. You can set different content
                  for tabs for each product. You can add content of the tabs in
                  the admin on product configuration page.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductDiscription;
