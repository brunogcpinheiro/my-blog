import React from "react"

import * as S from "./styles"

const active = {
  borderBottom: "2px solid #999"
}

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <S.Logo>
        <h1>B.</h1>
      </S.Logo>
      <S.Menu>
        <li>
          <S.MenuLink to="/" activeStyle={active}>Início</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/sobre" activeStyle={active}>Sobre mim</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/projetos" activeStyle={active}>Projetos</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/habilidades" activeStyle={active}>Habilidades</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/contato" activeStyle={active}>Contato</S.MenuLink>
        </li>
      </S.Menu>  
    </S.NavigationWrapper>
  )
}

export default Navigation