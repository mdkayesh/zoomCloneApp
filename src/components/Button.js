import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, children, url }) => {
  return (
    <Link to={url} className={`btn-basic lg:px-5 text-base ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
