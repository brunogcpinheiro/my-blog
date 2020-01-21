import React from "react"
import { Link } from "gatsby"

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
        <S.Buttons>
          <Link to="/contato">
            <Button>Contrate-me</Button>
          </Link>
          <Link to="/sobre" inverse>
            <Button inverse>Quem sou eu</Button>
          </Link>
        </S.Buttons>
      </S.InfoWrapper>
    </S.IntroduceWrapper>
  )
}

export default Introduce