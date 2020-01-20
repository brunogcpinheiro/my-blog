import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import AsideText from "../AsideText"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <aside>
        <AsideText />
      </aside>
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
