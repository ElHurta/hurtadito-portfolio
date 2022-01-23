import React from "react"

import "../sass/projects.sass"

import { IoAnalytics } from "@react-icons/all-files/io5/IoAnalytics"

import { useStaticQuery, graphql } from "gatsby"

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
              <h2 className="project_title">{projects[0].data[currentProj-1].attributes.project_title}</h2>
              <h3 className="project_type">{projects[0].data[currentProj-1].attributes.project_type}</h3>
            </div>
          </div>

          <p className="project_des">
            {
                projects[0].data[currentProj-1].attributes.project_description.substring(0, 300)+"..."
            }
            <a className="project_see_more" href={projects[0].data[currentProj-1].attributes.project_url}>See More</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export { Projects }
