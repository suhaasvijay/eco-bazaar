import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-lightGray-300 rounded-md">
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-lightGray-300 rounded-md mr-4">
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border-2 border-solid border-lightGray hover:bg-lightGray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-purple-400 text-white"
      />
    </div>
  );
};

export default Pagination;
