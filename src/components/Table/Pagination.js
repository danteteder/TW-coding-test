import React from "react";
import styled from "styled-components";

function Pagination({ currentPage, setCurrentPage }) {
  //in order to display the pagination normally between the number ( 1 & 2) and (49 & 50) to make the selected page be in the middle
  let pageNumbers = [];
  if (
    currentPage !== 1 &&
    currentPage !== 2 &&
    currentPage !== 49 &&
    currentPage !== 50
  ) {
    pageNumbers = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }

  //in order to display the pagination like this when we are at the begining (at 1 or 2) =====> 1 2 3 4 5
  if (currentPage === 1) {
    pageNumbers = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
      currentPage + 4,
    ];
  }

  //in order to display the pagination like this when we are at the begining (at 1 or 2) =====> 1 2 3 4 5
  if (currentPage === 2) {
    pageNumbers = [
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
    ];
  }

  //in order to display the pagination like this when we reach 49 or 50 =====> 46 47 48 49 50
  if (currentPage === 49) {
    pageNumbers = [
      currentPage - 3,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ];
  }

  //in order to display the pagination like this when we reach 49 or 50 =====> 46 47 48 49 50
  if (currentPage === 50) {
    pageNumbers = [
      currentPage - 4,
      currentPage - 3,
      currentPage - 2,
      currentPage - 1,
      currentPage,
    ];
  }

  return (
    <Wrapper>
      <i
        aria-hidden="true"
        className="fa fa-chevron-left fa-md"
        onClick={() => {
          if (currentPage === 1) return;
          setCurrentPage(currentPage - 1);
        }}
      ></i>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`page_item ${
            number === currentPage ? "current_page" : ""
          }`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <i
        aria-hidden="true"
        className="fa fa-chevron-right fa-md"
        onClick={() => {
          if (currentPage === 5) return;
          setCurrentPage(currentPage + 1);
        }}
      ></i>
    </Wrapper>
  );
}

export default Pagination;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  i {
    margin: 0 1rem;
  }

  .page_item {
    font-size: 1rem;
    background: none;
    border: none;
    color: #fff;
    width: 2.5em;
    height: 2.5em;
    font-weight: 900;
    border-radius: 2.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: none;
    margin-left: 1rem;
    &:hover {
      border: 1px solid white;
    }
  }

  .current_page {
    background: white;
    color: #333;
  }
`;
