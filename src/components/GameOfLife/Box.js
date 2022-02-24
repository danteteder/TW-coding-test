import React from "react";
import styled from "styled-components";

function Box({ column }) {
  return <BoxElement column={column} />;
}

export default Box;

const BoxElement = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${(props) => (props.column ? "white" : "#adf0d028")};
`;
