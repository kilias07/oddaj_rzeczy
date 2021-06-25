import decoration from "../../assets/images/Decoration.svg";
import { useState } from "react";
import database from "../../dummy_data";
import Pagination from "../layout/partials/Pagination";



const Section4 = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activePageClass, setActivePageClass] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = database[activeIndex].posts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const activePage = (index) => setActivePageClass(index);

  return (
    <div id="fundacje" className="helpInfo">
      <h1>Komu pomagamy?</h1>
      <img src={decoration} alt="decoration" />
      <div className="helpInfo__list">
        {database.map((el, i) => (
          <button
            key={i}
            className={activeIndex === i ? "helpInfo__active" : ""}
            onClick={() => {
              setActiveIndex(i);
              setCurrentPage(1);
              setActivePageClass(0);
            }}
          >
            {el.title}
          </button>
        ))}
      </div>
      <p>{database[activeIndex].description}</p>
      <ul className="helpInfo__list-desc">
        {currentPosts.map((el) => (
          <div key={el.id}>
            <li>
              <div>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
              </div>
              <p>{el.additional}</p>
            </li>
            <hr />
          </div>
        ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={database[activeIndex].posts.length}
        paginate={paginate}
        activePage={activePage}
        activePageClass={activePageClass}
      />
    </div>
  );
};

export default Section4;
