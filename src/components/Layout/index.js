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
      <main>
        <nav>
          <Navigation />
        </nav>
        {children}
      </main>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
