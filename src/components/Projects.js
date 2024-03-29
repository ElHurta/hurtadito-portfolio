import React from "react"

import "../sass/projects.sass"

import { IoAnalytics } from "@react-icons/all-files/io5/IoAnalytics"

import { useStaticQuery, graphql } from "gatsby"
import { ProjectDescription } from "./ProjectDescription"

function Projects() {
  const dataQuery = useStaticQuery(graphql`
    {
      allStrapiProject {
        nodes {
          data {
            id
            attributes {
              project_description
              project_title
              project_type
              project_url
            }
          }
        }
      }
    }
  `)

  const {
    allStrapiProject: { nodes: projects },
  } = dataQuery

  const [currentProj, setCurrentProj] = React.useState(1)

  let proj_simple_list = []

  projects[0].data.forEach(element => {
    proj_simple_list.push(
      <button
        onClick={() => setCurrentProj(element.id)}
        key={"projectSV_" + element.id}
        className="proj_menu_item"
      >
        <div className="menu_text">
          <p className="mi_proj_title">{element.attributes.project_title}</p>
          <p className="mi_proj_type">{element.attributes.project_type}</p>
        </div>
        <div
          className={`menu_indicator ${
            element.id === currentProj ? "active_proj" : ""
          }`}
        >
          |
        </div>
      </button>
    )
  })

  let currentProjAttr = projects[0].data[currentProj-1].attributes
  return (
    <section id="projects">
      <div className="section_title_container">
        <h1>
          My Projects <IoAnalytics />
        </h1>
        <p>(The Stuff I Have Created)</p>
      </div>
      <div className="projects_container">
        <div className="project_menu">{proj_simple_list}</div>

        <div className="project_info">
          <div className="project_info_header">
            <div>
              <h2 className="project_title">{currentProjAttr.project_title}</h2>
              <h3 className="project_type">{currentProjAttr.project_type}</h3>
            </div>
          </div>

          <ProjectDescription attributes={currentProjAttr}/>
        </div>
      </div>
    </section>
  )
}

export { Projects }
