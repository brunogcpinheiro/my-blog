import React from "react"

import * as S from "./styles"
import SocialLinks from "../SocialLinks"

const active = {
  normal: { borderBottom: "2px solid #999" },
  special: { borderBottom: "2px solid #78e08f" }
}

const animation = {
  cover: true,
  duration: 1,
  bg: `#191919`
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
            direction="right"
            title="inicio"
            >
            Início
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/conhecimentos"
            activeStyle={active.normal}
            {...animation}
            direction="left"
            title="conhecimentos"
            >
            Conhecimentos
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/projetos"
            activeStyle={active.normal}
            {...animation}
            direction="up"
            title="projetos"
            >
            Projetos
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/blog"
            activeStyle={active.special}
            {...animation}
            direction="down"
            bg="#78e08f"
            style={{ color: "#78e08f" }}
            title="blog"
            >
            Blog
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink
            to="/contato"
            activeStyle={active.normal}
            {...animation}
            title="contato"
            >
            Contato
          </S.MenuLink>
        </li>
      </S.Menu>
      <SocialLinks />
    </S.NavigationWrapper>
  )
}

export default Navigation