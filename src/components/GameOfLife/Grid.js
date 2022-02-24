import React from "react";
import styled from "styled-components";

//box
import Box from "./Box";

//this component is responsible for genrating the array of small boxes
function Grid({ gridFull }) {
  return (
    <Wrapper style={{ width: "auto" }}>
      <div>
        {gridFull.map((row, index) => (
          <div className="row" key={index}>
            {row.map((column, index) => (
              <div className={`box  ${column ? "on" : "off"}`} key={index}>
                <Box />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Grid;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  & > * {
    margin: 0;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  tr {
    width: 0.75rem;
    height: 0.75rem;
  }

  .box {
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    margin: 1px;
  }

  .on {
    background-color: white;
  }
`;
