import styled from "styled-components"

export const Button = styled.a`
  padding: 12px 24px;
  background: ${props => props.inverse ? "white" : "black"};
  color: ${props => props.inverse ? "black" : "white"};
  font-family: "Quicksand", sans-serif;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid #191919;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #191919;
    border: 2px solid #191919;
    transition: all 0.3s ease-in;
  }
`