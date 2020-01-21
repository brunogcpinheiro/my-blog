import styled from "styled-components"

export const IntroduceWrapper = styled.div`
  width: 90%;
  height: 400px;
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

  h1 {
    padding: 20px 0;
    font-size: 3rem;
  }

  p:last-child {
    text-align: justify;
  }

  span {
    font-weight: bold;
  }
`