import React from "react"

import * as S from "./styles"

import Avatar from "../Avatar"
import Button from "../Button"

const Introduce = () => {
  return (
    <S.IntroduceWrapper>
      <S.AvatarWrapper>
        <Avatar />
      </S.AvatarWrapper>
      <S.InfoWrapper>
        <p>Olá, eu sou</p>
        <h1>Bruno Carpinelli</h1>
        <p>Desenvolvedor Full Stack JavaScript web e mobile e blogger apaixonado por tecnologia.
          Construindo aplicações <span>INCRÍVEIS!</span></p>
        <br />
        <Button to="/contato">Contrate-me</Button>
        <Button to="/sobre" inverse>Quem sou eu</Button>
      </S.InfoWrapper>
    </S.IntroduceWrapper>
  )
}

export default Introduce