import React, { useState } from "react";
import styled from "styled-components";
import ArticlePreview from "./ArticlePreview";

function ArticleRow({ article }) {
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  const newDate = new Date(article.date * 951);
  const formatedDate =
    newDate.getDay() + "." + newDate.getMonth() + "." + newDate.getFullYear();

  return (
    <Wrapper>
      <div className="row" onClick={() => setIsArticleOpen(!isArticleOpen)}>
        <div className="column">{article.firstname} </div>
        <div className="column">{article.surname}</div>
        <div className="column">{article.sex === "m" ? "Mees" : "Naine"}</div>
        <div className="column">{formatedDate}</div>
        <div className="column">{article.phone}</div>
      </div>

      {isArticleOpen && <ArticlePreview article={article} />}
    </Wrapper>
  );
}

export default ArticleRow;

const Wrapper = styled.div`
  width: 100%;
  .row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }

  .column {
    margin: 0;
    padding: 0.625rem 1rem;
    border-bottom: #fff 0.0625rem solid;
  }
`;
