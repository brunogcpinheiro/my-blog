import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
`

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: #191919;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li:first-child {
    padding-left: 50px;
  }

  li {
    padding: 0 10px;
    font-family: "Quicksand";
  }
`