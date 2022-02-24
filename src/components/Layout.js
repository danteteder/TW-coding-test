import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

//decoration
import DecoRight from "../assets/images/bg-deco-right.svg";
import DecoLeft from "../assets/images/bg-deco-left.svg";

function Layout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <div className="container">
        <div className="page_container">{children}</div>
      </div>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
 width: 100%;
  display: flex;
  .container {
    width: 100%;
    background-color: var(--twn-backgroundColor);
    background-image: url("${DecoLeft}"), url("${DecoRight}");
    background-repeat: no-repeat;
    background-position: 220px bottom, 100% 0;
    background-size: 150px, 250px;
    background-attachment: fixed;
    display: block;
    height: 100vh;
    overflow: auto;
    padding: 5rem 2.5rem;
  }

  .bpx{
    width: 100%;
    background-color: aliceblue;
    height: 20rem;
  }

  @media screen and (min-width: 960px) {
    .page_container {
      position: relative;
      margin: 0 auto;
      min-height: 100%;
      width: 1000px;
    }
  }
`;
