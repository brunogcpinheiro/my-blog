import styled from "styled-components"
import { Button } from "../Button/styles"

export const IntroduceWrapper = styled.div`
  width: 90%;
  height: 450px;
  display: flex;
  align-self: center;
  padding: 0 50px;
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
  margin-top: -20px;

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