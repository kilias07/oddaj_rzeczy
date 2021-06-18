import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, test, activePageClass}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="helpInfo__pagination">
      <ul>
        {pageNumbers.map((number, i) => (
          <li
          key={number}
          onClick={() => {
            paginate(number);
            test(i)
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
