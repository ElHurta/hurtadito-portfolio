import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import {Navbar} from "./Navbar"

import "../sass/header.sass"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
