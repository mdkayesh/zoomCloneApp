import React from "react";

const BlogItem = ({ imgUrl, heading, text, date }) => {
  return (
    <div className="blogitem p-4">
      <div className="img relative overflow-hidden [&_.date]:hover:opacity-[1] [&_.date]:opacity-0">
        <img
          src={imgUrl}
          alt="blog"
          className="w-full hover:scale-[1.2] transition-all duration-[2s]"
        />
        <div className="date absolute top-3 left-3 bg-primary text-white py-4 px-3 text-lg text-center font-semibold uppercase transition-all duration-500">
          <span>{date}</span>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-lg font-semibold mb-2">{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;
