import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import * as S from "./styles"

import AsideText from "../AsideText"
import Navigation from "../Navigation"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <AsideText />
      </aside>
      <div>
        <nav>
          <Navigation />
        </nav>
        <S.MainWrapper>
          {children}
        </S.MainWrapper>
      </div>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
