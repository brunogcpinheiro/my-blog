import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styles"

import Avatar from "../Avatar"
import Button from "../Button"

const animation = {
  paintDrip: true,
  duration: 0.7,
  hex: `#191919`
}

const Introduce = () => {
  return (
    <S.IntroduceWrapper>
      <S.AvatarWrapper>
        <Avatar />
      </S.AvatarWrapper>
      <S.InfoWrapper>
        <p>Olá, eu sou</p>
        <h1>Bruno Carpinelli</h1>
        <p>Desenvolvedor Full Stack JavaScript desktop, web, mobile e blogger apaixonado por tecnologia.
          Construindo aplicações <span>INCRÍVEIS!</span></p>
        <br />
        <S.Buttons>
          <AniLink {...animation} direction="down" to="/contato">
            <Button>Contrate-me</Button>
          </AniLink>
          <AniLink {...animation} direction="up" to="/sobre">
            <Button>Quem sou eu</Button>
          </AniLink>
        </S.Buttons>
      </S.InfoWrapper>
    </S.IntroduceWrapper>
  )
}

export default Introduce