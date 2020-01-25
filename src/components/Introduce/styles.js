import styled from "styled-components"
import { Button } from "../Button/styles"

export const IntroduceWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 180px;
  align-self: center;
  margin: -100px auto 0 auto;
  align-items: center;
  border-radius: 10px;
`

export const AvatarWrapper = styled.div`
  border: 5px solid black;
  border-radius: 50%;
`

export const InfoWrapper = styled.div`
  padding: 0 30px;

  h1 {
    padding: 10px 0;
    font-size: 3rem;
  }

  p:last-child {
    text-align: justify;
  }

  span {
    font-weight: bold;
  }
`

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;

  ${Button} {
    margin: 0 20px 0 0;
  }
  
`