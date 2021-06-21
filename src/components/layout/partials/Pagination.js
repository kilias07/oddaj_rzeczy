import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, activePage, activePageClass}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="helpInfo__pagination">
      <ul>
        {pageNumbers.map((number, i) => (
          <li
          key={i}
          onClick={() => {
            paginate(number);
            activePage(i)
            }}
            className={activePageClass === i ? "helpInfo__active" : ""}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
