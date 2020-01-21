import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Introduce from "../components/Introduce"

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <Introduce />
  </Layout>
)

export default IndexPage
