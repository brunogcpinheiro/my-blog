import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  -webkit-box-shadow: 0px 2px 16px -6px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 16px -6px rgba(184,184,184,1);
  box-shadow: 0px 2px 16px -6px rgba(184,184,184,1);
  z-index: 2;
`

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: #191919;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  h1 {
    margin-bottom: 5px;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  li:first-child {
    padding-left: 50px;
  }

  li {
    padding: 0 10px;
    font-family: "Quicksand";
    font-size: 0.9rem;
  }
`

export const MenuLink = styled(AniLink)`
  &:hover {
     border-bottom: 2px dashed #999; 
  }

  &:visited, &:active {
    color: inherit;
  }
`