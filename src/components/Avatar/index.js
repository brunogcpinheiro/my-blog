import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styles"  

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query AvatarQuery {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.AvatarImage fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar