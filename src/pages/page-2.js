import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const SecondPage = () => (
  <React.Fragment>
    <Seo title="Page Two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </React.Fragment>
)

export default SecondPage
