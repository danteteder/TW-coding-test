import React from "react";
import styled from "styled-components";

function Button({ buttonText, onClick }) {
  return <Wrapper onClick={onClick}>{buttonText}</Wrapper>;
}

export default Button;

const Wrapper = styled.button`
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.85em 2.5em;
  transition: background-color 0.25s ease-out;
  font-family: ${(props) => props.theme.twnFont};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  text-decoration: none;
  border-bottom: 0.25rem solid #37945c;
  text-transform: uppercase;
  background-color: #14cc76;
  color: ${(props) => props.theme.twnTextColor};

  &:hover {
    background-color: #41e592;
    color: #3a3d57;
  }
`;
