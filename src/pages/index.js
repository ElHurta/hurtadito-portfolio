import * as React from "react"
// import { Link } from "gatsby"

import "../sass/main.sass"

import { Hero } from "../components/Hero"
import { Position } from "../components/Position"

const IndexPage = () => (
  <React.Fragment>
    <Hero />
    <Position />
  </React.Fragment>
)

export default IndexPage
