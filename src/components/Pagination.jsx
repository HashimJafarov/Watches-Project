import React from "react";

function Pagination({ page, itemPerPage, itemCount, setPage }) {
  const totalPageCount = Math.ceil(itemCount / itemPerPage);
  const start = page - 3 > 0 ? page - 3 : 1;
  const end = page + 3;
  const pages = [];
  const nextPage = () => {
    setPage(page + 1);
  };
  const lastPage = () => {
    setPage((page = totalPageCount));
  };
  const firstPage = () => {
    setPage((page = 1));
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const checkNext = page < totalPageCount;
  const checkPrev = page === 1;
  for (let i = start; i <= end && i <= totalPageCount; i++) {
    pages.push(
      <button
        className={i === page ? "active" : ""}
        onClick={() => setPage(i)}
        key={i}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="pagination">
      <button onClick={firstPage} disabled={checkPrev}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
      <button onClick={prevPage} disabled={checkPrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {pages}
      <button onClick={nextPage} disabled={!checkNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button onClick={lastPage} disabled={!checkNext}>
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
