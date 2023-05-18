import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { currentUser, loginWithGoogle } = useAuthContext();

  const actionCodeSettings = {
    url: "http://localhost:3000/signUp",

    handleCodeInApp: false,
    // When multiple custom dynamic link domains are defined, specify which
    // one to use.
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("example@gmail.com")
      .required("email is required"),
    password: Yup.string()
      .min(6, "password must be at least 6 charecter")
      .required("password is required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      (async () => {
        try {
          const userCred = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );

          // send the email varification

          await sendEmailVerification(userCred.user, actionCodeSettings);
        } catch (err) {
          console.log(err);
        }
      })();

      resetForm();
    },
  });

  // send the verification again

  const sendVarificationAgain = async () => {
    try {
      await sendEmailVerification(currentUser, actionCodeSettings);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentUser);

  // sign up with google

  return (
    <div className="signUp max-w-[400px] mx-auto p-5 my-24">
      {!currentUser ? (
        <>
          <h1 className="text-center text-bold text-2xl mb-10">
            Sign up for free
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-4">
              {errors.email && touched.email && (
                <p className="text-xs capitalize text-red-600 text-left mb-2">
                  {errors.email}
                </p>
              )}
              <input
                type="email"
                name="email"
                id="signUp-email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.email && touched.email
                    ? "border border-solid border-red-600"
                    : "border border-gray-300"
                } w-full py-2 px-3 outline-none mb-5`}
              />

              {/* for password */}

              {errors.password && touched.password && (
                <p className="text-xs capitalize text-red-600 text-left mb-2">
                  {errors.password}
                </p>
              )}
              <input
                type="password"
                name="password"
                id="signUp-password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${
                  errors.password && touched.password
                    ? "border border-red-600"
                    : "border border-gray-200"
                } w-full py-2 placeholder:font-light placeholder:text-base px-3 outline-none mb-3`}
              />
              {/* sign in with google */}

              <button
                type="button"
                className="w-full py-2 px-3 rounded-lg bg-slate-800 text-gray-200 flex gap-4 items-center mt-4"
                onClick={loginWithGoogle}
              >
                <span>
                  <FcGoogle />
                </span>
                <span>Sign up with google</span>
              </button>

              <button
                type="submit"
                className="btn-basic w-full border mt-4 text-btn_text bg-btn_bg hover:bg-btn_bg_hover"
              >
                Create Your Account
              </button>
            </div>
          </form>
        </>
      ) : currentUser.emailVerified ? (
        <div className="verify flex flex-col items-center gap-10">
          <h1 className="text-3xl font-semibold">Your account is varified</h1>
          <Link
            className="btn-basic bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
            to="/"
          >
            Continue to Shop
          </Link>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-10">
          <h1 className="text-3xl font-semibold">Varify Your Email Address</h1>
          <p className="base text-gray-600">
            Get an email in your email account.
          </p>
          <button
            type="button"
            className="btn-basic bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
            onClick={sendVarificationAgain}
          >
            Resend Email
          </button>
        </div>
      )}

      {/* current user is not varified */}
    </div>
  );
};

export default SignUp;
