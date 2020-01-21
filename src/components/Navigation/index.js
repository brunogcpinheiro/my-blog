import React from "react"

import * as S from "./styles"

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <S.Logo>
        <h1>B.</h1>
      </S.Logo>
      <S.Menu>
        <li>Início</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Contato</li>
      </S.Menu>  
    </S.NavigationWrapper>
  )
}

export default Navigation