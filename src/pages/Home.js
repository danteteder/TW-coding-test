import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="text_container">
        <h1>TRINIDAD WISEMAN</h1>
        <h2>SPA test work</h2>
      </div>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 85vh;

  .text_container {
    width: 100%;
  }

  h1 {
    font-size: 2.8125rem;
    color: var(--twn-highlightColor);
    font-weight: 700;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 2.4375rem;
    display: block;
    color: white;
    text-align: center;
    font-weight: 700;
  }
`;
