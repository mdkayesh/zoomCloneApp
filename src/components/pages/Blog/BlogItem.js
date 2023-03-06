import React from "react";
import { CgProfile } from "react-icons/cg";
import DateFormater from "../../DateFormater";

const BlogItem = ({ date, title, discription, img, userName }) => {
  return (
    <div className="blog-item">
      <div className="img">
        <img src={img} alt="blogimg" />
      </div>
      <div className="content mt-4 px-2">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between mb-2 text-gray-700 flex-wrap">
          <DateFormater timestamp={date} className="" />
          <span className="flex gap-1 items-center">
            <CgProfile />
            {userName}
          </span>
        </div>
        <p className="text-gray-500 leading-relaxed text-sm">{discription}</p>
      </div>
    </div>
  );
};

export default BlogItem;
