import React from "react"

import * as S from "./styles"

const Footer = () => (
  <S.FooterWrapper>
    <p>Direitos Reservados &copy; {new Date().getFullYear()}</p>
  </S.FooterWrapper>
)

export default Footer