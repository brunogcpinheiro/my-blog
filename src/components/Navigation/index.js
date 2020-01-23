import React from "react"

import * as S from "./styles"
// import Background from "../../images/bg.jpg"
// import Biker from "../../images/biker.gif"

const active = {
  normal: { borderBottom: "2px solid #999" },
  special: { borderBottom: "2px solid #78e08f" }
}

const animation = {
  paintDrip: true,
  duration: 0.7,
  hex: `#191919`
}

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <S.Logo>
        <h1>B!</h1>
      </S.Logo>
      <S.Menu>
        <li>
          <S.MenuLink
            to="/"
            activeStyle={active.normal}
            {...animation}
            direction="right">
            Início
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/sobre"
            activeStyle={active.normal}
            {...animation}
            direction="left">
            Sobre mim
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/projetos"
            activeStyle={active.normal}
            {...animation}
            direction="up">
            Projetos
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/blog"
            activeStyle={active.special}
            {...animation}
            direction="down"
            hex="#78e08f"
            style={{ color: "#78e08f" }}>
            Blog
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/contato"
            activeStyle={active.normal}
            {...animation}>
            Contato
          </S.MenuLink>
        </li>
      </S.Menu>
    </S.NavigationWrapper>
  )
}

export default Navigation