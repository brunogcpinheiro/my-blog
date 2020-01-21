import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  padding: 12px 24px;
  background: ${props => props.inverse ? "white" : "black"};
  color: ${props => props.inverse ? "black" : "white"};
  font-family: "Quicksand", sans-serif;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 10px;
  border: 2px solid #191919;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #191919;
    border: 2px solid #191919;
    transition: all 0.3s ease-in;
  }
`