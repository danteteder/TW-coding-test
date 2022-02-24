import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import ArticleImage from "../components/ArticleImage";

//loader
import { ReactComponent as Loader } from "../assets/images/loader.svg";

function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //load the article from the api
  const getTheArticle = async () => {
    //set loading to true to show the loader
    setIsLoading(true);

    //get the data
    await fetch("https://midaiganes.irw.ee/api/list/972d2b8a")
      .then((response) => response.json())
      .then((article) => setArticle(article));

    //set isloading to false to display the data
    setIsLoading(false);
  };

  useEffect(() => {
    getTheArticle();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader className="loader" />
      ) : (
        <div>
          <h1>{article.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: article.intro }}></div>

          <ArticleImage article={article} />

          <div dangerouslySetInnerHTML={{ __html: article.body }}></div>

          {article.tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default Article;
const Wrapper = styled.div`
  color: white;

  .loader {
    width: 100%;
    display: block;
    height: 6.25rem;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.8125rem;
  }

  p {
    margin: 2.5rem 0;
    font-weight: 700;
    font-family: var(--twn-textFont);
  }

  .tag {
    background: var(--twn-secondaryColor);
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 14px;
    font-weight: 700;
    margin-right: 1rem;
  }

  .img_container {
    display: block;
    padding-bottom: 50%;
    position: relative;
    border-radius: 0.375rem;
    transform: translate(0);
  }

  .img_title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
    z-index: 6;
    background: rgba(0, 0, 0, 0.5);
  }
`;
