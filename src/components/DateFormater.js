import React from "react";

const DateFormater = ({ timestamp, className }) => {
  const date = timestamp.toDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndx = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  return (
    <span
      className={className}
    >{`${monthNames[monthIndx]} ${day}, ${year}`}</span>
  );
};

export default DateFormater;
