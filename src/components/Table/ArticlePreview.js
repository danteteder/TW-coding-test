import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

function ArticlePreview({ article }) {
  const history = useHistory();
  return (
    <Wrapper>
      <img src={article.image.large} alt="" />
      <div className="article_info">
        <p dangerouslySetInnerHTML={{ __html: article.intro }}></p>
        <Button
          buttonText="LOE ROHKEM"
          onClick={() => history.push("/article/" + article.id)}
        />
      </div>
    </Wrapper>
  );
}

export default ArticlePreview;

const Wrapper = styled.div`
  width: 100%;
  background-color: white !important;
  display: flex;
  padding: 0.5rem;

  img {
    width: 12.5rem;
    height: 12.5rem;
    flex-shrink: 0;
    flex-grow: 0;
    background: center center no-repeat;
    margin: 0.375rem;
    background-color: #f1f1f1;
    overflow: hidden;
  }

  .article_info {
    padding: 0.5rem;
    padding-left: 1rem;
    p {
      width: 100%;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* number of lines to show */
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    button {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
