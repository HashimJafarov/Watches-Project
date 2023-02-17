import React from "react";

function Pagination() {
  const totalPageCount = Math.ceil(itemCount / itemPerPage);
  const start = page - 1 > 0 ? page - 1 : 1;
  const end = page + 1;
  const pages = [];
  for (let i = start; i <= end && i <= totalPageCount; i++) {
    pages.push(
      <li
        className={i === page ? "active" : ""}
        onClick={() => setPage(i)}
        key={i}
      >
        {i}
      </li>
    );
  }
  return <ul id="pagination">{pages}</ul>;
}

export default Pagination;
