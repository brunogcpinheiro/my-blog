import React from "react"

import * as S from "./styles"
import Background from "../../images/bg.jpg"

const active = {
  borderBottom: "2px solid #999"
}

const animation = {
  cover: true,
  duration: 2,
  bg: `
    url(${Background})
    center / cover
    no-repeat   
    fixed
    padding-box
    content-box
    white
  `
}

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <S.Logo>
        <h1>B!</h1>
      </S.Logo>
      <S.Menu>
        <li>
          <S.MenuLink to="/" activeStyle={active} {...animation}>Início</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/sobre" activeStyle={active} {...animation}>Sobre mim</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/projetos" activeStyle={active} {...animation}>Projetos</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/habilidades" activeStyle={active} {...animation}>Habilidades</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/contato" activeStyle={active} {...animation}>Contato</S.MenuLink>
        </li>
      </S.Menu>
    </S.NavigationWrapper>
  )
}

export default Navigation