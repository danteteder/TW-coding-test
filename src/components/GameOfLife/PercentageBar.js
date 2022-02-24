import React from "react";
import styled from "styled-components";

function PercentageBar() {
  return (
    <Wrapper>
      <p>Currently Alive</p>

      <div className="percentage_bg">
        <div className="percentage_alive">5%</div>
      </div>
    </Wrapper>
  );
}

export default PercentageBar;

const Wrapper = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  p {
    color: white;
  }

  .percentage_bg {
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }
`;
