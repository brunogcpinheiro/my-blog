import styled from "styled-components"

export const Button = styled.button`
  padding: 12px 24px;
  background: #191919;
  color: #fff;
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