import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  padding: 0 10px;
`

export const SocialLinksLink = styled.a`
  text-decoration: none;
  transition: color 0.5s;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`