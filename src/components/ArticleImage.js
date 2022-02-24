import React from "react";
import styled from "styled-components";

function ArticleImage({ article }) {
  return (
    <Wrapper bg={article.image.large}>
      <div>
        <div className="img_title">{article.image.title}</div>
        <div className="img_container">
          <img src={article.image.large} alt="" className="article_img" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ArticleImage;

const Wrapper = styled.div`
  display: block;
  position: relative;
  transform: translate(0);
  overflow: hidden;
  height: 32rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: url(${(props) => props.bg});
    background-repeat: no-repeat;
    filter: blur(0.625rem);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .img_container {
    width: 80%;
    display: block;
    margin: auto;
  }

  .article_img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .img_title {
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    z-index: 6;
    background: rgba(0, 0, 0, 0.5);
  }
`;
