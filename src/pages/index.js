import * as React from "react"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"

import "../sass/main.sass"

import { Hero } from "../components/Hero"
import { Position } from "../components/Position"

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
          <title>Juan Hurtado Portfolio 🤖</title>
    </Helmet>
    <Hero />
    <Position/>
  </React.Fragment>
)

export default IndexPage
