import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages);
    }
    if (currentPage <= 1) {
      setCurrentPage(1);
    }
  }, [currentPage, itemsPerPage, setCurrentPage, totalPages]);

  return (
    <nav>
      <ul className="pagination flex gap-3">
        {/* prev btn */}
        {currentPage > 1 && (
          <li
            className="left-arrow cursor-pointer h-7 w-7 flex justify-center items-center text-lg hover:bg-primary hover:text-white transition-all duration-300 border bg-slate-50"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <AiOutlineLeft />
          </li>
        )}
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`${
              currentPage === page
                ? "bg-primary text-white"
                : "bg-slate-50 text-gray-800"
            } pageNum cursor-pointer h-7 w-7 flex justify-center items-center text-base border`}
            onClick={() => {
              onPageChange(page);
            }}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
        {/* next btn */}
        {currentPage < totalPages && (
          <li
            className="right-arrow cursor-pointer h-7 w-7 flex justify-center items-center text-lg hover:bg-primary hover:text-white transition-all duration-300 border bg-slate-50"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <AiOutlineRight />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
