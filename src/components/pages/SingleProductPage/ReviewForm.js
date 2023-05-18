import { useFormik } from "formik";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import validationSchemas from "./schemas";
import { db } from "../../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

const ReviewForm = ({
  setReviewIsOpen,
  setThanksIsOpen,
  id,
  setReviews,
  reviews,
}) => {
  const [ratingNum, setRatingNum] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  // const [comments, setComments] = useState([]);

  // formik

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        userName: "",
        userEmail: "",
        rating: "",
        reviewTitle: "",
        reviewComment: "",
      },
      validationSchema: validationSchemas,
      onSubmit: (values, actions) => {
        actions.resetForm();
        const docRef = doc(db, "reviewComments", id);
        setReviews((prev) => {
          return [...prev, values];
        });

        setDoc(docRef, {
          comments: reviews,
        })
          .then(() => {
            alert("successfully added");
          })
          .catch((err) => console.log(err.message));

        console.log(reviews);

        setReviewIsOpen(false);
        setThanksIsOpen(true);
        setTimeout(() => {
          setThanksIsOpen(false);
        }, 10000);
      },
    });

  // handleMouseOver

  const handleMouseOver = (num) => {
    setRatingHover(num);
  };

  return (
    <div className="form">
      <h4 className="text-base font-semibold mb-4">Write a rewiew</h4>
      <form
        action=""
        onSubmit={handleSubmit}
        className="[&_label]:block [&_label]:mb-2 [&_label]:font-semibold [&_label]:text-gray-600 [&_input]:w-full [&_input]:px-3 [&_input]:py-2 [&_input]:border [&_input]:outline-none [&_input]:mb-4"
      >
        {/* input name */}
        <label htmlFor="userName">Name</label>
        {touched.userName && errors.userName && (
          <p className="text-xs text-red-600">{errors.userName}</p>
        )}

        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Write your name"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.userName && errors.userName ? "border border-red-600" : ""
          }
        />

        {/* input email  */}

        <label htmlFor="userEmail">Email</label>
        {touched.userEmail && errors.userEmail && (
          <p className="text-xs text-red-600">{errors.userEmail}</p>
        )}
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="info@gmail.com"
          value={values.userEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.userEmail && errors.userEmail ? "border border-red-600" : ""
          }
        />

        {/* rating */}

        <label htmlFor="rating">Rating</label>
        {touched.rating && errors.rating ? (
          <p className="text-xs text-red-600">{errors.rating}</p>
        ) : null}

        <div className="rating flex text-gray-500 w-fit mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="relative" key={num}>
              <input
                type="radio"
                key={num}
                value={num}
                name="rating"
                className="appearance-none border-none relative z-[3] cursor-pointer"
                style={{ padding: "8px" }}
                onChange={handleChange}
                onBlur={handleBlur}
                onClick={() => setRatingNum(num)}
                onMouseOver={() => handleMouseOver(num)}
                onMouseLeave={() => handleMouseOver(0)}
              />
              <BsStarFill
                className={`absolute top-0 left-0 ${
                  ratingNum >= num
                    ? "text-[#FFBF56]"
                    : ratingHover >= num
                    ? "text-[#FFBF56]"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* review title */}

        <label htmlFor="reviewTitle">Review Title</label>
        {touched.reviewTitle && errors.reviewTitle ? (
          <p className="text-xs text-red-600">{errors.reviewTitle}</p>
        ) : null}

        <input
          type="text"
          name="reviewTitle"
          id="reviewTitle"
          placeholder="Give your review a title"
          value={values.reviewTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.reviewTitle && errors.reviewTitle
              ? "border border-red-600"
              : ""
          }
        />

        {/* comment */}

        <label htmlFor="reviewComment">Body of Review (1500)</label>
        {touched.reviewComment && errors.reviewComment ? (
          <p className="text-xs text-red-600">{errors.userName}</p>
        ) : null}

        <textarea
          name="reviewComment"
          id="reviewComment"
          cols="30"
          rows="3"
          placeholder="write your comments here"
          value={values.reviewComment}
          className={`${
            touched.reviewComment && errors.reviewComment
              ? "border border-red-600"
              : ""
          } py-2 px-3 w-full outline-none border`}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>

        {/*submit button */}

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="btn-basic bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
          >
            Sumbit review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
