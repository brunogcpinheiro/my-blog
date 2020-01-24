import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import * as S from "./styles"

import AsideText from "../AsideText"
import Navigation from "../Navigation"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <AsideText />
      </aside>
      <S.ContentWrapper>
        <nav>
          <Navigation />
        </nav>
        <S.MainWrapper>
          {children}
        </S.MainWrapper>
        <Footer />
      </S.ContentWrapper>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
