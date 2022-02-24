import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      {" "}
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: white;

  .logo {
    display: block;
    margin: 0 auto;
    width: 8rem;
  }

  @media screen and (min-width: 960px) {
    .logo {
      width: 15rem;
      margin: 1.5rem 0 3rem;
    }
  }
`;
