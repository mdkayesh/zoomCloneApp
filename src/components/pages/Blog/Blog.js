import React, { useState } from "react";
import { UseBlogContext } from "../../Context/BlogContext";
import Pagination from "../../Pagination";
import BlogItem from "./BlogItem";

const Blog = () => {
  const { blogPost } = UseBlogContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = blogPost.length;

  // ---------
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndx = startIndex + itemsPerPage;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="blog py-16">
      <h1 className="text-4xl mb-6 text-center">Fashion</h1>
      <div className="container px-4">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPost.slice(startIndex, endIndx).map((blog) => (
            <div key={blog.id}>
              <BlogItem {...blog} />
            </div>
          ))}
        </div>
        <div className="pagination-container py-3 px-4 bg-[#F5F5F5] flex items-center justify-center mt-5">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            onPageChange={onPageChange}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
