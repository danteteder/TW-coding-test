import React, { useState } from "react";
import styled from "styled-components";
import ArticleRow from "./ArticleRow";

//helpers
import {
  sortArticlesByFirstNameAsc,
  sortArticlesByFirstNameDesc,
} from "../../helpers/sortByFirstName";

import {
  sortArticlesByLastNameAsc,
  sortArticlesByLastNameDesc,
} from "../../helpers/sortByLastName";

import {
  sortArticlesBySexMale,
  sortArticlesBySexFemale,
} from "../../helpers/sortBySex";

import {
  sortArticlesByDateAsc,
  sortArticlesByDateDesc,
} from "../../helpers/sortByDate";

function ArticlesTable({
  currentArticles,
  setArticles,
  articles,
  defaultArticles,
}) {
  const [firstNameSorter, setfirstNameSorter] = useState("asc");
  const [lastNameSorter, setLastNameSorter] = useState("asc");
  const [sexSorter, setSexSorter] = useState("m");
  const [dateSorter, sedivateSorter] = useState("asc");

  const firstNameSortHandler = () => {
    switch (firstNameSorter) {
      case "asc":
        setArticles([...sortArticlesByFirstNameAsc(articles)]);
        setfirstNameSorter("desc");
        return;

      case "desc":
        setArticles([...sortArticlesByFirstNameDesc(articles)]);
        setfirstNameSorter("default");
        return;

      default:
        setArticles([...defaultArticles]);
        setfirstNameSorter("asc");
        return;
    }
  };

  const lastNameSortHandler = () => {
    switch (lastNameSorter) {
      case "asc":
        setArticles([...sortArticlesByLastNameAsc(articles)]);
        setLastNameSorter("desc");
        return;

      case "desc":
        setArticles([...sortArticlesByLastNameDesc(articles)]);
        setLastNameSorter("default");
        return;

      default:
        setArticles([...defaultArticles]);
        setLastNameSorter("asc");
        return;
    }
  };

  const sexSortHandler = () => {
    switch (sexSorter) {
      case "m":
        setArticles([...sortArticlesBySexMale(articles)]);
        setSexSorter("f");
        return;
      case "f":
        setArticles([...sortArticlesBySexFemale(articles)]);
        setSexSorter("default");
        return;
      default:
        setArticles([...defaultArticles]);
        setSexSorter("m");
        return;
    }
  };

  const dateSortHandler = () => {
    switch (dateSorter) {
      case "asc":
        setArticles([...sortArticlesByDateAsc(articles)]);
        sedivateSorter("desc");
        return;

      case "desc":
        setArticles([...sortArticlesByDateDesc(articles)]);
        sedivateSorter("default");
        return;

      default:
        setArticles([...defaultArticles]);
        sedivateSorter("asc");
        return;
    }
  };

  return (
    <Wrapper>
      <div className="head">
        <div className="column">
          Eesnimi
          <i
            aria-hidden="true"
            className="fa fa-sort fa-lg"
            onClick={firstNameSortHandler}
          ></i>
        </div>
        <div className="column">
          Perekonnanimi
          <i
            aria-hidden="true"
            className="fa fa-sort fa-lg"
            onClick={lastNameSortHandler}
          ></i>
        </div>
        <div className="column">
          Sugu
          <i
            aria-hidden="true"
            className="fa fa-sort fa-lg"
            onClick={sexSortHandler}
          ></i>
        </div>
        <div className="column">
          Sünnikuupäev
          <i
            aria-hidden="true"
            className="fa fa-sort fa-lg"
            onClick={dateSortHandler}
          ></i>
        </div>
        <div className="column">Telefon</div>
      </div>
      {currentArticles.map((article) => (
        <ArticleRow key={article.id} article={article} />
      ))}
    </Wrapper>
  );
}

export default ArticlesTable;

const Wrapper = styled.div`
  min-width: 100%;
  font-size: 1rem;
  table-layout: fixed;
  border-collapse: collapse;

  tbody {
    width: 100%;
  }

  .head {
    width: 100%;
    background: #333;
    color: #fff;
    text-align: left;
    white-space: nowrap;
    font-family: var(--twn-textFont);
    font-size: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    div {
      padding: 0.625rem 1rem;
      border-bottom: #fff 0.0625rem solid;
    }
  }

  .column {
    i {
      cursor: pointer;
      margin-left: 0.25rem;
    }
  }
`;
