import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { auth } from "../Firebase/Firebase";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../Context/AuthContext";

const validationSchema = Yup.object({
  email: Yup.string().email("example@gmail.com").required("email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 charecter")
    .required("password is required"),
});

const LoginForm = () => {
  const { loginWithGoogle } = useAuthContext();
  const { handleBlur, handleChange, errors, handleSubmit, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          await signInWithEmailAndPassword(auth, values.email, values.password);
        } catch (err) {
          console.log(err.message);
        }
      },
    }
  );

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mt-4">
        {errors.email && touched.email && (
          <p className="text-xs capitalize text-red-600 text-left">
            {errors.email}
          </p>
        )}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.email && touched.email ? "border border-red-600" : "border"
          } w-full py-2 px-3 outline-none border-gray-300 mb-5`}
        />

        {/* for password */}

        {errors.password && touched.password && (
          <p className="text-xs capitalize text-red-600 text-left">
            {errors.password}
          </p>
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.password && touched.password
              ? "border border-red-600"
              : "border"
          } w-full py-2 placeholder:font-light placeholder:text-base px-3 outline-none border border-gray-300 mb-3`}
        />
        <div className="text-right mb-3">
          <Link to="" className="capitalize">
            Forgot your password?
          </Link>
        </div>

        {/* sign in with google */}

        <button
          type="button"
          className="w-full py-2 px-3 rounded-lg bg-slate-800 text-gray-200 flex gap-4 items-center mb-4"
          onClick={loginWithGoogle}
        >
          <span>
            <FcGoogle />
          </span>
          <span>Log in with google</span>
        </button>

        <button
          type="submit"
          className="btn-basic w-full bg-btn_bg text-btn_text hover:text-btn_text_hover hover:bg-btn_bg_hover"
        >
          Login
        </button>
        <Link
          to={"signUp"}
          className="btn-basic w-full border border-gray-200 mt-4 hover:text-btn_text hover:bg-btn_bg"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
