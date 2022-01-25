import * as React from "react"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"

import "../sass/main.sass"

import { Hero } from "../components/Hero"
import { Position } from "../components/Position"
import { Projects } from "../components/Projects"
import { References } from "../components/References"

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
          <title>Juan Hurtado Portfolio 🤖</title>
    </Helmet>
    <Hero />
    <Position/>
    <Projects/>
    <References />
  </React.Fragment>
)

export default IndexPage
