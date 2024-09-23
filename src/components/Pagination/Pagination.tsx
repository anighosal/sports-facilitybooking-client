import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
