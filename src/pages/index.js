import * as React from "react"
// import { Link } from "gatsby"

import "../sass/main.sass"

import { Hero } from "../components/Hero"
import { Position } from "../components/Position"
import { Projects } from "../components/Projects"
import { References } from "../components/References"
import { Contact } from "../components/Contact"

import Seo from "../components/Seo"


const IndexPage = () => (
  <React.Fragment>
    <Seo title="Juan Hurtado Portfolio 🚀"/>
    <Hero />
    <Position/>
    <Projects/>
    <References />
    <Contact />
  </React.Fragment>
)

export default IndexPage
