import React, { useEffect, useState } from "react";
import styled from "styled-components";

//loader
import { ReactComponent as Loader } from "../assets/images/loader.svg";

//components
import ArticlesTable from "../components/Table/ArticlesTable";
import Pagination from "../components/Table/Pagination";

function Table() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [defaultArticles, setDefaultArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  //this function helps getting all the JSON data from the url
  const getArticles = async () => {
    setIsLoading(true);

    await fetch("https://midaiganes.irw.ee/api/list?limit=500")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.list);
        setDefaultArticles(data.list);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    getArticles();
  }, []);

  //get  the index of the last article
  const indexOfLastArticle = currentPage * articlesPerPage;
  //get  the index of the first article
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  useEffect(() => {
    setCurrentArticles([
      ...articles.slice(indexOfFirstArticle, indexOfLastArticle),
    ]);
  }, [articles]);

  return (
    <Wrapper>
      <h1>NIMEKIRI</h1>

      {isLoading ? (
        <Loader className="loader" />
      ) : (
        <div>
          <ArticlesTable
            currentArticles={currentArticles}
            articles={articles}
            setArticles={setArticles}
            defaultArticles={defaultArticles}
          />

          <Pagination
            articlesPerPage={articlesPerPage}
            totalArticles={articles.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </Wrapper>
  );
}

export default Table;

const Wrapper = styled.div`
  color: white;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.8125rem;
    margin: 2rem;
  }

  .loader {
    width: 100%;
    display: block;
    height: 6.25rem;
    margin: 0 auto;
  }
`;
