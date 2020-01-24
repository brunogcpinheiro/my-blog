import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 30px;
  -webkit-box-shadow: 0px 1px 16px -6px #666;
  -moz-box-shadow: 0px 1px 16px -6px #666;
  box-shadow: 0px 1px 16px -6px #666;
  width: 100%;
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
     border-bottom: 2px dashed ${props => props.borderColor}; 
  }

  &:visited, &:active {
    color: inherit;
  }
`